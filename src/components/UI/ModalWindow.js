import React from 'react';
import styles from "./ModalWindow.module.css"
import Button from "./Button";
import TextInput from "./TextInput";

const ModalWindow = (props) => {

	const {itemTemplate, modalTitle, addItem, active, setActive} = props;

	const [modalInputs, setModalInputs] = React.useState({})

	const setInputHandle = (textBoxName, value) => {
		setModalInputs({...modalInputs, [textBoxName]: value})
	}

	return active ? (
			<div className={styles.modalBackground} onClick={() => setActive(false)}>
				<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
					<div className={styles.modalEdge}>
						<h2 className={styles.modalTitle}>{modalTitle}</h2>
						<div className={styles.buttonContainer}>
							<Button type="close" action={() => setActive(false)} tipTitle="Закрыть"/>
						</div>
					</div>
					<div className={styles.modalContent}>
						<hr/>
						<div className={styles.content}>{itemTemplate.map((item) => item != "id" && item != "checked" &&
							<TextInput setInput={setInputHandle} key={item} textBoxName={item} labelText={item}/>)}</div>
					</div>
					<div className={styles.modalEdge}>
						<div className={styles.buttonContainer}></div>
						<div className={styles.buttonContainer}>
							<Button action={() => {
								addItem(modalInputs);
								setActive()
							}} type="submit" tipTitle="Добавить">
								<div>Добавить</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		)
		:
		false;
};

export default ModalWindow;
