import { Inter } from "next/font/google";
import LoginScreen from "./LoginScreen";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>Budgeting App</Head>
      <LoginScreen />
    </div>
  );
}
