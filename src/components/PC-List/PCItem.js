import Button from "../UI/Button";
import styles from "./PCItem.module.css"

const PCItem = (props) => {
	const {item} = props;
	return <>
		<div className={styles.item}>
			<div className={styles.itemTitle}>
				<input className={styles.itemCheckbox} type="checkbox" checked={item.checked}/>
				<img className={styles.itemTitleImg} src={item.img} alt="logo"/>
				<div>
					<div className={styles.itemTitleText}>{item.title}</div>
					<div className={styles.itemSubTitleText}>{item.category}</div>
				</div>
			</div>
			<div className={styles.controlsContainer}>
				<div className={styles.controls}>
					<label><input type="number" value={item.price}/> руб.</label>
					<label><input type="number" value={item.count}/> шт.</label>
				</div>
				<div className={styles.buttons}>
				<Button type="link" title ="Перейти по ссылке"/>
				<Button type="close" title ="Удалить позицию"/>
				</div>
			</div>
		</div>
	</>
}

export default PCItem