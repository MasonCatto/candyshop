import style from './itemContainer.module.css'

export default function ItemContainer() {
    return (
        <div className={style.ItemContainer}>
            <div className={style.ItemContent}>
                <h1>Item</h1>
            </div>
        </div>
    )
}