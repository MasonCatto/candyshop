import { Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import Header from './components/topNavigation/topNavigation';
import Footer from "./components/footer/footer";
import styles from './page.module.css';
const Rubik = Rubik_Mono_One({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-highlight",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
           <body className={Rubik.variable}>
            {/* <div className={styles.relative}> */}
              <Header />
              {/* <div className={styles.relativeChild}></div> */}
              {children}
              {/* </div> */}
              <Footer/>
            </body>
    </html>
  );
}
