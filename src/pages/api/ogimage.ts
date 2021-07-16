import chrome from "chrome-aws-lambda";
import { NextApiHandler } from "next";
import puppeteer, { BrowserConnectOptions, BrowserLaunchArgumentOptions, LaunchOptions, Product } from "puppeteer-core";
import wait from "waait";

type Options = LaunchOptions &
  BrowserLaunchArgumentOptions &
  BrowserConnectOptions & {
    product?: Product;
    extraPrefsFirefox?: Record<string, unknown>;
  };

const cached = new Map();

const exePath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";

async function getOptions(isDev: boolean): Promise<Options> {
  if (isDev) {
    return {
      product: "chrome",
      args: [],
      executablePath: exePath,
      headless: true,
    };
  }
  return {
    product: "chrome",
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  };
}

async function getScreenshot(url: string, isDev: boolean): Promise<Buffer> {
  console.log({ isDev, url: process.env.URL });
  // first check if this value has been cached
  const cachedImage = cached.get(url);
  if (cachedImage) {
    return cachedImage;
  }
  const options = await getOptions(isDev);
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1.5 });
  await page.goto(url);
  await wait(1000);
  const buffer = await page.screenshot({ type: "png" });
  //@ts-ignore
  const image = Buffer.from(buffer, "base64");
  // const base64Image: Buffer = buffer.toString("base64");
  cached.set(url, image);
  await browser.close();
  return image;
}

const handler: NextApiHandler = async (req, res) => {
  const qs = new URLSearchParams(req.query as Record<string, string>);
  const photoBuffer = await getScreenshot(
    `${process.env.URL || `http://localhost:3000`}/thumbnail?${qs.toString()}`,
    process.env.URL.includes("http://localhost")
  );

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": photoBuffer.length,
  });
  res.end(photoBuffer);
};

export default handler;
