import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import getConfig from "next/config";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { useState } from "react";
import ImagePreview from "../components/ImagePreview";

export default function Home({ items }) {
  const [search, setSearch] = useState("");
  const [media, setMedia] = useState(items);
  const [mediaType, setMediaType] = useState("");
  console.log(items);
  return (
    <div className={styles.container}>
      <Head>
        <title>Nasa Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Nasa Gallery</h1>
        <input
          id="nasaSearch"
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
          type="text"
          placeholder="Search for an image"
        ></input>
        <button
          className="button"
          disabled={search === ""}
          onClick={async () => {
            const results = await fetch(queryFull);
            const previews = await results.json();
            setMedia(await previews);
          }}
        >
          Find
        </button>
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
                  />
                ) : (
                  <YoutubeEmbed
                    videoUrl={preview.url}
                    title={preview.title}
                    description={preview.explanation}
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
