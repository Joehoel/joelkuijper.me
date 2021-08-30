import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Header from "./Header";

interface Meta {
    title: string;
    image: string;
    description: string;
    type: string;
    date?: string;
}

interface Props extends Partial<Meta> {
    children: React.ReactNode;
}

export default function Container(props: Props) {
    const router = useRouter();

    const { children, ...customMeta } = props;

    const meta: Meta = {
        title: "Joël Kuijper",
        description: "Fullstack developer, Typescript Maniac",
        image: "",
        type: "website",
        ...customMeta,
    };

    return (
        <div className="font-body bg-white dark:bg-black">
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:url" content={`https://joelkuijper.me${router.asPath}`} />
                <link rel="canonical" href={`https://joelkuijper.me${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Joël Kuijper" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="description_large_image" />
                <meta name="twitter:site" content="@joel_kuijper" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && <meta property="article:published_time" content={meta.date} />}
            </Head>
            <Header />
            <main className="flex flex-col justify-center px-8 bg-white dark:bg-black mt-16">{children}</main>
        </div>
    );
}
