import './App.scss';
import { Footer } from './component/footer/Footer';
import  Header  from './component/header/Header';
import ProductList from './page/productList/ProductList';
import  ProductDetail  from './page/productDetail/ProductDetail';
import  ProductCart  from './page/productCart/ProductCart';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './component/navigation/Navigation';
import { useState } from 'react';
import  Filter from './component/filter/Filter';
function App() {
  const [isMenu, setIsMenu] = useState(false)
  const [isFilter, setIsFilter] = useState(false)
  const handleClicked=()=>setIsMenu(!isMenu);
  const handleClose=()=>setIsMenu(false);
  const handleFilter=()=>setIsFilter(!isFilter);
  const closeFilter=()=>setIsFilter(false);
  return (
    <>
      <Header handleClicked={handleClicked}/>
      <main>
    
        <Routes>
          <Route exact path='aem-react/' element={<ProductList handleFilter={handleFilter}/>}></Route>
          <Route path='aem-react/detail/:id' element={<ProductDetail />}></Route>
          <Route path='aem-react/cart' element={<ProductCart />}></Route>
        </Routes>
        
      </main>
     
      <Footer />
      <Navigation isMenu={isMenu} navClose={()=>handleClose()}/>
      <Filter isFilter={isFilter} filterClose={()=>closeFilter()} />
    </>

  );
}

export default App;
