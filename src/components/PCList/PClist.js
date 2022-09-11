import PCItem from "./PCItem";
import styles from "./PClist.module.css"
import Button from "../UI/Button";

function PClist(props) {
	const {items, itemActions, modalControlActions} = props;

	const loadItems = () => {
		return items.length > 0
			? items.map((item) => <PCItem key={item.id} item={item} itemActions={itemActions}/>)
			: (<div className={styles.itemsNone}>Комплектующие отсутствуют</div>)
	}

	const totalPrice = () => {
		return items.length > 0 && (items.find((item) => item.checked === true)
			&&
			(<div className={styles.totalText}>
				Итого: {
				items.reduce((totalPrice, item) => {
					if (item.checked === true) {
						return totalPrice + (item.price * item.count)
					}
					return totalPrice;
				}, 0)} рублей
			</div>)
			||
			<div className={styles.totalText}>Выберите хотя бы одну позицию</div>)
	}
	return (
		<>
			<div className={styles.items}>
				<div className={styles.itemsHead}>
					<div className={styles.itemsHeadTitle}>
						<div className={styles.title}>Комплектующие</div>
						<div className="buttonsContainer">
							<Button
								icon="add"
								type="addButton"
								tipTitle="Добавить позицию"
								onClick={()=>modalControlActions.modalControlActiveHandler()}
							/>
						</div>
					</div>
					<hr/>
					<div className={styles.itemsBody}>
						{
							loadItems()
						}
					</div>
					<hr/>
					<div className={styles.totalContainer}>
						{
							totalPrice()
						}
					</div>
				</div>
			</div>
		</>)
}

export default PClist;