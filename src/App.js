import SearchBar from './SearchBar';
import './App.css';
// import CategorySort from './CategorySort';
// import PriceSort from './PriceSort';
import ProductList from './ProductList';
import FilterDropdown from './FilterDropdown';
// import Product from './Product';
import AlexaImage from './images/alexa.png';

const App = () => {
  const productArray = [{
    price:200,
    category: 'food',
    name: 'apple',
    image: AlexaImage,
  },
  {
    price:200,
    category: 'food',
    name: 'apple',
    image: AlexaImage,
  },
  {
    price:200,
    category: 'food',
    name: 'apple',
    image: AlexaImage,
  },
  {
    price:200,
    category: 'food',
    name: 'apple',
    image: AlexaImage,
  },
  {
    price:200,
    category: 'food',
    name: 'apple',
    image: AlexaImage,
  },
  {
    price:200,
    category: 'food',
    name: 'apple',
    image: AlexaImage,
  },
  {
    price:200,
    category: 'food',
    name: 'apple',
    image: AlexaImage,
  },
  {
    price:200,
    category: 'food',
    name: 'apple',
    image: AlexaImage,
  },
  {
    price:200,
    category: 'food',
    name: 'apple',
    image: AlexaImage,
  }
];
  return (
    <div>
      <SearchBar/>
      <FilterDropdown title={'title'} options={[]}/>
      <ProductList productArray={productArray}/>      
      
      
    </div>
  );
};

export default App;