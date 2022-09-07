import PCItem from "./PCItem";
import styles from "./PClist.module.css"

function PClist(props) {
	const {items} = props;
	return <div className={styles.container}>
		<div className={styles.items}>
			<div className={styles.itemsHead}>
				<p>Комплектующие</p>
				<hr/>
				<div className={styles.itemsBody}>
					{items.map((item) => <PCItem item={item}/>)}
				</div>
				<hr/>
				<div className={styles.totalContainer}>
					<div className={styles.totalText}>
						Итого: {items.reduce((prev, current) => prev + current.price * current.count, 0)} рублей
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default PClist;