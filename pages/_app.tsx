import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider as StoreProvider } from "react-redux";

import client from "@/utils/fetchers";
import store from "@/utils/store";
import seoProps from "@/next-seo.config";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/styles.scss";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
        <DefaultSeo {...seoProps} />
        <Component {...pageProps} />
      </StoreProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(App);
