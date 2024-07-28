"use client";
// import Image from "next/image";
import styles from "./page.module.css";
import SelectionMenu from "./components/topItemSelection/selectionMenu";
import TopAdvert from "./components/topAdvert/adContainer"
import Trending from "./components/topAdvert/trending";
import SearchBar from "./components/searchBar/searchBar";
import ItemContainer from "./components/itemContainer/itemContainer";
import './globals.css';

export default function Home() {
  return (
    <main>
      <div className="background">
            <SelectionMenu />
            <TopAdvert />
            <Trending />
            <div>
            {/* <h1>TRENDING NOW</h1> */}

            </div>
            <SearchBar />
           <ItemContainer />
      </div>
    </main>
  );
}
