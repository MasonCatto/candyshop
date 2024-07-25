"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SelectionMenu from "./components/topItemSelection/selectionMenu";
import TopAdvert from "./components/topAdvert/adContainer"
import './globals.css';
export default function Home() {
  return (
    <main>
      <div className="background">
            <SelectionMenu />
            <TopAdvert />
      </div>
    </main>
  );
}
