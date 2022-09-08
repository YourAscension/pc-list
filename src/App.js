import react from 'react'
import './App.css';
import PCList from "./components/PC-List/PClist";


function App() {
  const [items, setItems] = react.useState([{
    id: 1,
    title: 'Видеокарта RTX 3070',
    category: 'Видеокарта',
    img: 'https://ae04.alicdn.com/kf/S80bad2bec76944ffab59cb904048dc3eW/MSI-GeForce-RTX-3070-VENTUS-2X-8G-3070-GAMING-Z-TRIO-8G-256.jpg',
    checked: true,
    count: 1,
    price: 1000,
  },
    {
      id: 2,
      title: 'Процессор Ryzen 7 5800x',
      category: 'Процессор',
      img: '../../public/images/image.jpg',
      checked: false,
      count: 2,
      price: 500,
    },
    {
      id: 3,
      title: 'Блок питания Corsair',
      category: 'Блок питания',
      img: '../../public/images/image.jpg',
      checked: false,
      count: 5,
      price: 666,
    }])

  const changeItemHandler = (innerItem) => {
    setItems([...items.map((item)=>item.id !==innerItem.id ? item : innerItem)])
  }

  const deleteItemHandler = (id) => {

    setItems(items.filter((item)=> item.id !== id))
  }
  return (
    <div className="App" >
      <PCList items = {items} changeItem={changeItemHandler} deleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
