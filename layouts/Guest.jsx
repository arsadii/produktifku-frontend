import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Guest(props) {
  return (
    <div className="w-full h-screen relative">
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      <div className="min-h-full flex flex-col overflow-y-auto container">
        {props.children}
      </div>
    </div>
  );
}
