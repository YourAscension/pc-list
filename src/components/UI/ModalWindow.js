import React from 'react';
import styles from "./ModalWindow.module.css"

const ModalWindow = (props) => {
	const {active, setActive} = props;
	return active ? (
			<div className={styles.modalBackground} onClick={() => setActive(false)} onKeyPress={(e)=> e.key === "Escape" && alert(e)} tabIndex="0">
				<div className={styles.modal} onClick={(e)=>e.stopPropagation()}>
					<div className={styles.modalEdge}>
						<h2 className={styles.modalTitle}>Текст</h2>
						<div className={styles.buttonContainer}>
							<button style={{backgroundColor: "red"}}>Кнопка1</button>
							<button>Кнопка2</button>
						</div>
					</div>

					<div className={styles.modalContent}>
						<hr/>
						<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium alias aperiam c</span></p>
					</div>
					<div className={styles.modalEdge}>
						<div className={styles.buttonContainer}></div>
						<div className={styles.buttonContainer}>
							<button style={{backgroundColor: "red"}}>Кнопка1</button>
							<button>Кнопка2</button>
						</div>
					</div>
				</div>
			</div>
		)
		:
		false;
};

export default ModalWindow;
