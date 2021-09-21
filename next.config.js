module.exports = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: ["apod.nasa.gov", "www.youtube.com"],
    path: "/_next/image",
    loader: "default",
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "api_key=aSd5Nv7mi6s72iISz4OSALpabxzfpclXxAZu1Smx&",
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
};
