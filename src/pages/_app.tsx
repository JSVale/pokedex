import React from "react";
import { AppProps } from "next/app";

// Globals Styles
import "../styles/reset.css";
import "../styles/global.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
