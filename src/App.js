import react from 'react'
import './App.css';
import PCList from "./components/PC-List/PClist";
import ModalWindow from "./components/UI/ModalWindow";
import React from "react";


function App() {
	const [modalActive, setModalActive] = react.useState(false)

	const defaultItemObjectModel = ["id", "title", "category", "img", "link", "checked", "count", "price"];
	const [items, setItems] = react.useState([{
		id: 1,
		title: 'Видеокарта RTX 3070',
		category: 'Видеокарта',
		img: 'https://ae04.alicdn.com/kf/S80bad2bec76944ffab59cb904048dc3eW/MSI-GeForce-RTX-3070-VENTUS-2X-8G-3070-GAMING-Z-TRIO-8G-256.jpg',
		link: "https://www.google.com",
		checked: true,
		count: 1,
		price: 1000,
	},
		{
			id: 2,
			title: 'Процессор Ryzen 7 5800x',
			category: 'Процессор',
			img: '../../public/images/image.jpg',
			link: "https://www.google.com",
			checked: false,
			count: 1,
			price: 500,
		},
		{
			id: 3,
			title: 'Блок питания Corsair',
			category: 'Блок питания',
			img: '../../public/images/image.jpg',
			link: "https://www.google.com",
			checked: false,
			count: 5,
			price: 666,
		}])

	const changeItemHandler = (innerItem) => {
		setItems([...items.map((item) => item.id !== innerItem.id ? item : innerItem)])
	}

	const deleteItemHandler = (id) => {
		setItems(items.filter((item) => item.id !== id))
	}

	console.log(items.reduce((prevItem, currentItem) => {
		return prevItem.id > currentItem.id
			? prevItem.id
			: currentItem.id
	}, 0) + 1)


	const addItemHandler = (innerItem) => {
		setItems([...items, {
			...innerItem, id: items.reduce((prevItem, currentItem) => {
				return prevItem.id > currentItem.id
					? prevItem.id
					: currentItem.id
			}, 0) + 1
		}])
	}

	const modalControlHandler = () => {
		setModalActive(!modalActive)
	}


	return (
		<div className="App">
			<div className="container">
				<PCList items={items} changeItem={changeItemHandler} deleteItem={deleteItemHandler}
								modalControl={modalControlHandler}/>
			</div>
			<ModalWindow itemTemplate={defaultItemObjectModel} addItem={addItemHandler} modalTitle="Комплектующие"
									 active={modalActive} setActive={setModalActive}/>
		</div>
	);
}

export default App;
