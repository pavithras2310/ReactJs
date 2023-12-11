import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HelloWorld from './components/hello-world/hello-world';
import { Congratscards } from "./components/task2/congratscard";
import Menu from "./components/menu/menu";
import { League } from "./components/task3/league";
import SocialButton from './components/task4/social-buttons';
import Notiication from './components/task5/notification';
import Login from './components/task6/login';
import ProductInCards from './components/prouct-in-cards/product-in-cards';
import Details from './components/prouct-in-cards/details';
import Technologies from './components/task7/technologies';
import Counter from './components/task8/add';
import FruitCounter from './components/task9/fruit-counter';
import Jsontask from './components/task11/jsontask';
import Feedback from './components/task10/feedback';
import Feed from './components/task10/feed';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Menu/>} ></Route>
      <Route path='/home' element={[<Menu/>,<HelloWorld/>]} ></Route>
      <Route path='/congratscard' element={[<Menu/>,<Congratscards/>]} ></Route>
      <Route path='/league' element={[<Menu/>,<League/>]} ></Route>
      <Route path='/socialbutton' element={[<Menu/>,<SocialButton/>]} ></Route>
      <Route path='/notification' element={[<Menu/>,<Notiication/>]} ></Route>
      <Route path='/login' element={[<Menu/>,<Login/>]} ></Route>
      <Route path='/technologycard' element={[<Menu/>,<Technologies/>]} ></Route>
      <Route path='/add' element={[<Menu/>,<Counter/>]} ></Route>
      <Route path='/fruitcounter' element={[<Menu/>,<FruitCounter/>]} ></Route>
      <Route path='/productincards' element={[<Menu/>,<ProductInCards/>]} ></Route>
      <Route path='/details/:id' element={[<Menu/>,<Details/>]} ></Route>
      <Route path='/jsontask' element={[<Menu/>,<Jsontask/>]} ></Route>
      <Route path='/feedback' element={[<Menu/>,<Feedback />]} ></Route>
      <Route path='/feed' element={[<Menu/>,<Feed />]} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
