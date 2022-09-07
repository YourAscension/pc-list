import React from 'react';
import styles from './Button.module.css'

const ButtonIcon = (props) => {
	if (props.type === "close") {
		return (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
			<path d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" />
			<path d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" />
		</svg>);
	}
	if (props.type === "link") {
		return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25" height="25">
			<path d="M41.470703 4.9863281 A 1.50015 1.50015 0 0 0 41.308594 5L27.5 5 A 1.50015 1.50015 0 1 0 27.5 8L37.878906 8L22.439453 23.439453 A 1.50015 1.50015 0 1 0 24.560547 25.560547L40 10.121094L40 20.5 A 1.50015 1.50015 0 1 0 43 20.5L43 6.6894531 A 1.50015 1.50015 0 0 0 41.470703 4.9863281 z M 12.5 8C8.3754991 8 5 11.375499 5 15.5L5 35.5C5 39.624501 8.3754991 43 12.5 43L32.5 43C36.624501 43 40 39.624501 40 35.5L40 25.5 A 1.50015 1.50015 0 1 0 37 25.5L37 35.5C37 38.003499 35.003499 40 32.5 40L12.5 40C9.9965009 40 8 38.003499 8 35.5L8 15.5C8 12.996501 9.9965009 11 12.5 11L22.5 11 A 1.50015 1.50015 0 1 0 22.5 8L12.5 8 z"  />
		</svg>)
	}
}

const Button = (props) => {
	const {type, title} = props;
	return (
		<button className={styles[type]} title={title}>
			<ButtonIcon type={type}/>
		</button>
	);
};

export default Button;
