import "../styles/globals.css";

import Footer from "../components/Footer";
import SideNav from "../components/SideNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="grid lg:grid-cols-[1fr_67ch_1fr] lg:my-12 gap-x-3 prose-h1:font-semibold prose-h2:font-semibold">
        <SideNav />
        <Component {...pageProps} />
        <section className=""></section>
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
