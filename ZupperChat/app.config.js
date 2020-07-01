import "dotenv/config";

export default {
  expo: {
    name: "zupperchat",
    slug: "zupperchat",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/core/assets/img/icon.png",
    splash: {
      image: "./src/core/assets/img/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSAppTransportSecurity : {
          NSAllowsArbitraryLoads : true,
          NSAllowsArbitraryLoadsForMedia: true, 
          NSAllowsArbitraryLoadsInWebContent: true, 
          NSExceptionAllowsInsecureHTTPLoads: true
        }
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    packagerOpts: {
      config: "metro.config.js",
      sourceExts: [
        "expo.ts",
        "expo.tsx",
        "expo.js",
        "expo.jsx",
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "wasm",
        "svg",
      ],
    },
    extra: {
      API_URL: "http://localhost:8080",
      NODE_ENV: process.env.NODE_ENV,
    },
  },
};
