import React from 'react';
import styles from './TextInput.module.css'

const Input = (props) => {
	const {labelText, inputType, setInput, textBoxName} = props;
	return (
		<div className={styles.textBox}>
		<label className={styles.textBox__label}>
			{labelText}
			<input onChange={(e)=>setInput(textBoxName, e.target.value)} className={styles.textBox__input} type={inputType}/>
		</label>
		</div>
	);
};

export default Input;
