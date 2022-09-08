import react from "react";
import Button from "../UI/Button";
import styles from "./PCItem.module.css"

const PCItem = (props) => {
	const {item, changeItem, deleteItem} = props;

	const [fullCost, setFullCost] = react.useState({price: item.price, count: item.count})
	const [checkedPosition, setCheckedPosition] = react.useState(item.checked)

	const checkboxHandle = (check) => {
		setCheckedPosition(check);
		changeItem({...item, checked: check})
	}

	const fullCostHandle=(inputType, newValue)=> {
		newValue >=1 && setFullCost({...fullCost, [inputType]: newValue})
		newValue >=1 && changeItem({...item, [inputType]: newValue})
	}



	return <>
		<div className={styles.item}>
			<div className={styles.itemTitle}>
				<input className={styles.itemCheckbox} type="checkbox" onChange={() => checkboxHandle(!checkedPosition)}
							 checked={checkedPosition}/>
				<img className={styles.itemTitleImg} src={item.img} alt="logo"/>
				<div>
					<div className={styles.itemTitleText}>{item.title}</div>
					<div className={styles.itemSubTitleText}>{item.category}</div>
				</div>
			</div>
			<div className={styles.controlsContainer}>
				<div className={styles.controls}>
					<label><input type="number" onChange={(e) => fullCostHandle ("price", e.target.value) }
												value={fullCost.price}/> руб.</label>
					<label><input type="number" onChange={(e) => fullCostHandle ("count", e.target.value)}
												value={fullCost.count}/> шт.</label>
				</div>
				<div className={styles.buttons} >
					<Button type="link" title={`Перейти по ссылке: ${item.link}`} action={()=>window.open(item.link)}  />
					<Button type="close" title={`Удалить позицию: ${item.title}`} action={()=>deleteItem(item.id)}/>
				</div>
			</div>
		</div>
	</>
}

export default PCItem