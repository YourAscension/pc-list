import React from 'react';
import styles from "./ModalWindow.module.css"
import Button from "./Button";
import Input from "./Input";

const ModalWindow = (props) => {

	const {
		itemModels,
		itemActions,
		modalActions,
		title,
		isActive
	} = props;

	const [modalInputs, setModalInputs] = React.useState({})

	const controledInputHandlder = (inputName, value) => {
		setModalInputs({...modalInputs, [inputName]: value})
	}

	return isActive ? (
			<div className={styles.modalBackground} onClick={() => modalActions.modalControlActiveHandler()}>
				<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
					<div className={styles.modalEdge}>
						<h2 className={styles.modalTitle}>{title}</h2>
						<div className={styles.buttonContainer}>
							<Button
								icon="delete"
								type="deleteButton"
								tipTitle="Закрыть"
								onClick={() => modalActions.modalControlActiveHandler()}
							/>
						</div>
					</div>
					<hr className={styles.modalDivider}/>
						<div className={styles.modalContent}>
							{itemModels.map((model) => model.visible === true &&
								<Input
									setInput={controledInputHandlder}
									key={model.propertyName}
									inputName={model.propertyName}
									inputType={model.type}
									labelText={model.labelName}/>)}
						</div>
					<div className={styles.modalEdge}>
						<div className={styles.buttonContainer}></div>
						<div className={styles.buttonContainer}>
							<Button
								onClick={() => {
									itemActions.addItemHandler(modalInputs);
									modalActions.modalControlActiveHandler()

								}}
								icon="none"
								type="primaryButton"
								tipTitle="Добавить"
								title="Добавить"
							>
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
