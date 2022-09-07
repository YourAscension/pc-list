import './App.css';
import PCList from "./components/PC-List/PClist";
import react from 'react'

function App() {
  const [items, setItems] = react.useState([{
    id: 1,
    title: 'Видеокарта RTX 3070',
    category: 'Видеокарта',
    img: '../../image.jpg',
    checked: true,
    count: 1,
    price: 1000,
  },
    {
      id: 2,
      title: 'Процессор Ryzen7 5800x',
      category: 'Процессор',
      img: '../../image.jpg',
      checked: false,
      count: 2,
      price: 500,
    }])

  return (
    <div className="App">
      <PCList items = {items} />
    </div>
  );
}

export default App;
