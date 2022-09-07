import react from "react";
import Button from "../UI/Button";
import styles from "./PCItem.module.css"

const PCItem = (props) => {
	const {item, changeItemHandle} = props;

	const [fullCost, setFullCost] = react.useState({price: item.price, count: item.count})
	const [checkedPosition, setCheckedPosition] = react.useState(item.checked)

	const checkedHandle = (check) => {
		setCheckedPosition(check);
		 changeItemHandle({...item, checked: check})
	}
	return <>
		<div className={styles.item}>
			<div className={styles.itemTitle}>
				<input className={styles.itemCheckbox} type="checkbox" onChange={()=>checkedHandle(!checkedPosition)}  checked={checkedPosition}/>
				<img className={styles.itemTitleImg} src={item.img} alt="logo"/>
				<div>
					<div className={styles.itemTitleText}>{item.title}</div>
					<div className={styles.itemSubTitleText}>{item.category}</div>
				</div>
			</div>
			<div className={styles.controlsContainer}>
				<div className={styles.controls}>
					<label><input type="number" onChange={(e)=>setFullCost({...fullCost, price: e.target.value})} value={fullCost.price}/> руб.</label>
					<label><input type="number" onChange={(e)=>setFullCost({...fullCost, count: e.target.value})}  value={fullCost.count}/> шт.</label>
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