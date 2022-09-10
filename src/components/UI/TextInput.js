import React from 'react';
import styles from './TextInput.module.css'

const TextInput = (props) => {
	const {labelText} = props;
	return (
		<div className={styles.textBox}>
		<label className={styles.textBox__label}>
			{labelText}
			<input className={styles.textBox__input} type="text"/>
		</label>
		</div>
	);
};

export default TextInput;
