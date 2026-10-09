import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"Tilk - Multi-Platform Developer"}
        description={"Tilk's personal portfolio - 18 year old developer from Germany building iOS apps, web tools and self-hosted automation"}
        canonical={`https://tilk.dev${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#111111"}
        openGraph={{
          url: `https://tilk.dev${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "Tilk - Multi-Platform Developer",
          description: "Tilk's personal portfolio - 18 year old developer from Germany building iOS apps, web tools and self-hosted automation",
          images: [
            {
              url: "/pfp.png",
              alt: "Tilk",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
