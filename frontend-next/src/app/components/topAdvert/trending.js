import styles from './trending.module.css';

export default function Trending() {
 return (
     <div className={styles.trendingContainer}>
         <h1 className={styles.header}>Trending</h1>
            <div className={styles.trendingItems}>
                
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
            </div>
     </div>
 );
}