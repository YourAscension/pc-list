import PCItem from "./PCItem";
import styles from "./PClist.module.css"

function PClist(props) {
	const {items, changeItemHandler} = props;
	return <div className={styles.container}>
		<div className={styles.items}>
			<div className={styles.itemsHead}>
				<p>Комплектующие</p>
				<hr/>
				<div className={styles.itemsBody}>
					{
						items.length > 0
							?
							items.map((item) => <PCItem key={item.id} item={item} changeItemHandler={changeItemHandler}/>)
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
							</div>)|| <div className={styles.totalText}>Выберите хотя бы одну позицию</div> )
					}
				</div>
			</div>
		</div>
	</div>
}

export default PClist;