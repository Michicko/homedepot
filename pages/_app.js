import Layout from "@/components/Layout";
import "@/styles/globals.css";
import store from "@/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
