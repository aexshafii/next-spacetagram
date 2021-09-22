import Head from "next/head";
import styles from "../styles/Home.module.css";
import getConfig from "next/config";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { useState } from "react";
import ImagePreview from "../components/ImagePreview";

export default function Home({ items }) {
  const [media, setMedia] = useState(items);
  return (
    <div className={styles.container}>
      <Head>
        <title>Spacetagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Spacetagram</h1>
        <div className={styles.fade}>
          <div className={styles.gridContainer}>
            {media &&
              media.map((preview) =>
                preview.media_type === "image" ? (
                  <ImagePreview
                    key={preview.url}
                    thumbnailUrl={preview.url}
                    title={preview.title}
                    description={preview.explanation}
                    date={preview.date}
                  />
                ) : (
                  <YoutubeEmbed
                    key={preview.url}
                    videoUrl={preview.url}
                    title={preview.title}
                    description={preview.explanation}
                    date={preview.date}
                  />
                )
              )}
          </div>
        </div>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  console.log("ala");

  function lastWeek() {
    var today = new Date();
    var lastWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    return lastWeek.toISOString().split("T")[0];
  }
  const { serverRuntimeConfig } = getConfig();

  let queryUrl = "https://api.nasa.gov/planetary/apod?";
  let queryKey = serverRuntimeConfig.mySecret;
  let queryDate = "start_date=" + lastWeek() + "&";
  let queryFull = queryUrl + queryKey + queryDate;

  const results = await fetch(queryFull);
  const previews = await results.json();
  const items = await previews;

  return {
    props: { items },
  };
}
