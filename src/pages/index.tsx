import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import prismaExample from "@/data/test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // await prismaExample()
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-600">Hello world!</h1>
    </>
  );
}
