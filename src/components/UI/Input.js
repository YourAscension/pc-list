import React from 'react';
import styles from './Input.module.css'

const Input = (props) => {
	const {labelText, inputType, inputValue, setInput, inputName} = props;
	return (
		<div className={styles.textBox}>
		<label className={styles.textBox__label}>
			{labelText}
			<input onChange={(e)=>setInput(inputName, e.target.value)} className={styles.textBox__input} type={inputType}/>
		</label>
		</div>
	);
};

export default Input;
