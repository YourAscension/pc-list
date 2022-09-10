import React from 'react';
import styles from "./ModalWindow.module.css"
import Button from "./Button";

const ModalWindow = (props) => {
	const {active, setActive} = props;

	const {children, modalTitle} = props;
	return active ? (
			<div className={styles.modalBackground} onClick={() => setActive(false)} onKeyPress={(e)=> e.key === "Escape" && alert(e)} tabIndex="0">
				<div className={styles.modal} onClick={(e)=>e.stopPropagation()}>
					<div className={styles.modalEdge}>
						<h2 className={styles.modalTitle}>{modalTitle}</h2>
						<div className={styles.buttonContainer}>
							<Button type="close" action={() => setActive(false)} tipTitle="Закрыть"/>
						</div>
					</div>
					<div className={styles.modalContent}>
						<hr/>
						<div className={styles.content}>{children}</div>
					</div>
					<div className={styles.modalEdge}>
						<div className={styles.buttonContainer}></div>
						<div className={styles.buttonContainer}>
							<Button type = "submit" tipTitle="Добавить" ><div>Добавить</div></Button>
						</div>
					</div>
				</div>
			</div>
		)
		:
		false;
};

export default ModalWindow;
