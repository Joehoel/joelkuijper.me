import { GetServerSideProps, InferGetServerSidePropsType } from "next";

function getFontSize(length: number) {
  if (length > 55) {
    return `4rem`;
  }
  if (length > 32) {
    return `6rem`;
  }
  return `8rem`;
}

export default function Thumbnail({ query }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { title, thumbnail, link } = query;
  const path = new URL(link);
  const fontSize = getFontSize(title.length);

  console.log({ title, thumbnail, path });
  return (
    <div className="bg-white p-10 relative w-full text-black h-screen flex flex-col justify-between">
      <div>
        <h1 className="font-bold" style={{ fontSize }}>
          {title}
        </h1>
        {thumbnail && <img className="w-[350px] absolute top-8 right-8 self-start" src={thumbnail} alt={title} />}
      </div>
      <div className="flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/31251240?v=4"
          alt="Joël Kuijper"
          className="object-cover h-24 w-24 rounded-full"
        />
        <div className="flex flex-col ml-10">
          <p className="text-5xl font-medium mb-4">Joël Kuijper</p>
          <p className="text-gray-700 italic text-3xl">{path.pathname}</p>
        </div>
      </div>
      {/* <img src={logo} alt="logo" className="logo" /> */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: { query },
  };
};
