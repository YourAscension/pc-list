import react from "react";
import Button from "../UI/Button";
import styles from "./PCItem.module.css"

const PCItem = (props) => {
	const {item, itemActions} = props;

	const [fullCost, setFullCost] = react.useState({price: item.price, count: item.count})
	const [checkedPosition, setCheckedPosition] = react.useState(item.checked)

	const checkboxHandle = (check) => {
		setCheckedPosition(check);
		itemActions.changeItemHandler({...item, checked: check})
	}

	const fullCostHandle=(inputType, newValue)=> {
		newValue >=1 && setFullCost({...fullCost, [inputType]: newValue})
		newValue >=1 && itemActions.changeItemHandler({...item, [inputType]: newValue})
	}

	return <>
		<div className={styles.item} >
			<div className={styles.itemTitle}>
				<input className={styles.itemCheckbox} type="checkbox" onChange={() => checkboxHandle(!checkedPosition)}
							 checked={checkedPosition}/>
				<img className={styles.itemTitleImg} src={item.img} alt={item.title}/>
				<div>
					<div className={styles.itemTitleText}>{item.title}</div>
					<div className={styles.itemSubTitleText}>{item.category}</div>
				</div>
			</div>
			<div className={styles.controlsContainer}>
				<div className={styles.controls}>
					<label><input type="number" onChange={(e) => fullCostHandle ("price", e.target.value) }
												value={fullCost.price}/> руб.</label>
					<label><input  type="number" onChange={(e) => fullCostHandle ("count", e.target.value)}
												value={fullCost.count}/> шт.</label>
				</div>
				<div className={styles.buttons}>
					<Button
						icon="link"
						type="linkButton"
						tipTitle={`Перейти по ссылке: ${item.link}`}
						onClick={()=>window.open(item.link)}
					/>
					<Button
						icon="delete"
						type="deleteButton"
						tipTitle={`Удалить позицию: ${item.title}`}
						onClick={()=>itemActions.deleteItemByIdHandler(item.id)}
					/>
				</div>
			</div>
		</div>
	</>
}

export default PCItem