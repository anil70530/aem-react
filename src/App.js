import './App.scss';
import { Footer } from './component/footer/Footer';
import  Header  from './component/header/Header';
import ProductList from './page/productList/ProductList';
import  ProductDetail  from './page/productDetail/ProductDetail';
import  ProductCart  from './page/productCart/ProductCart';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './component/navigation/Navigation';
import { useState } from 'react';
function App() {
  const [isMenu, setIsMenu] = useState(false)
    
  const handleClicked=()=>setIsMenu(!isMenu);
  const handleClose=()=>setIsMenu(false);

  return (
    <>
      <Header handleClicked={handleClicked}/>
      <main>
    
        <Routes>
          <Route exact path='aem-react/' element={<ProductList />}></Route>
          <Route path='aem-react/detail/:id' element={<ProductDetail />}></Route>
          <Route path='aem-react/cart' element={<ProductCart />}></Route>
        </Routes>
        
      </main>
     
      <Footer />
      <Navigation isMenu={isMenu} navClose={()=>handleClose()}/>
    </>

  );
}

export default App;
