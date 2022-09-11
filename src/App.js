import react from 'react'
import './App.css';
import {findMaxValueInArrayOfObjects} from "./common"
import PCList from "./components/PCList/PClist";
import ModalWindow from "./components/UI/ModalWindow";


function App() {
	const [modalActive, setModalActive] = react.useState(false)

	const defaultItemObjectModel = [
		{
			propertyName: "id",
			type: "number",
			visible: false,
			isKey: true,
			labelName: "Идентификатор",
		},
		{
			propertyName: "title",
			type: "string",
			visible: true,
			isKey: false,
			labelName: "Название",
		},
		{
			propertyName: "category",
			type: "string",
			visible: true,
			isKey: false,
			labelName: "Категория",
		},
		{
			propertyName: "img",
			type: "string",
			visible: true,
			isKey: false,
			labelName: "Ссылка на картинку",
		}, {
			propertyName: "link",
			type: "string",
			visible: true,
			isKey: false,
			labelName: "Ссылка на товар",
		},
		{
			propertyName: "checked",
			type: "boolean",
			visible: false,
			isKey: false,
			labelName: null,
		},
		{
			propertyName: "count",
			type: "number",
			visible: true,
			isKey: false,
			labelName: "Количество",
		},
		{
			propertyName: "price",
			type: "number",
			visible: true,
			isKey: false,
			labelName: "Цена",
		},
	];
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


	const itemHandlers = {
		changeItemHandler(newItem) {
			setItems([...items.map((item) => item.id !== newItem.id ? item : newItem)])
		},
		deleteItemByIdHandler(id) {
			setItems(items.filter((item) => item.id !== id))
		},
		addItemHandler(newItem) {
			setItems(
				[
					...items,
					{
						...newItem,
						id: 1+findMaxValueInArrayOfObjects(items, "id")
					}
				])
		}
	}

	const modalControlHandlers = {
		modalControlActiveHandler() {
			setModalActive(!modalActive)
		}
	}


	return (
		<div className="App">
			<div className="container">
				<PCList items={items} itemActions={itemHandlers}
								modalControlActions={modalControlHandlers}/>
			</div>
			<ModalWindow itemModels={defaultItemObjectModel}
									 itemActions={itemHandlers}
									 modalActions={modalControlHandlers}
									 title="Комплектующие"
									 isActive={modalActive}/>
		</div>
	);
}

export default App;
