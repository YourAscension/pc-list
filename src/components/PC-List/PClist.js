import PCItem from "./PCItem";
import styles from "./PClist.module.css"
import Button from "../UI/Button";

function PClist(props) {
	const {items, changeItem, deleteItem, modalControl} = props;
	return <div className={styles.container}>
		<div className={styles.items}>
			<div className={styles.itemsHead}>
				<div className={styles.itemsHeadTitle}>
					<div className={styles.title}> Комплектующие</div>
					<div className={styles.buttons}><Button type="add" tipTitle="Добавить позицию" action={modalControl}/></div>
				</div>
				<hr/>
				<div className={styles.itemsBody}>
					{
						items.length > 0
							?
							items.map((item) => <PCItem key={item.id} item={item} changeItem={changeItem} deleteItem={deleteItem}/>)
							:
							(<div className={styles.itemsNone}>Комплектующие отсутствуют</div>)}
				</div>
				<hr/>
				<div className={styles.totalContainer}>
					{
						items.length > 0 && (items.find((item) => item.checked === true) &&
							(<div className={styles.totalText}>
								Итого: {
								items.reduce((totalPrice, item) => {
									if (item.checked === true) {
										return totalPrice + (item.price * item.count)
									}
									return totalPrice;
								}, 0)} рублей
							</div>) || <div className={styles.totalText}>Выберите хотя бы одну позицию</div>)
					}
				</div>
			</div>
		</div>
	</div>
}

export default PClist;