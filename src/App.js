
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";
import productData from './data/shoes';
import { ProductProvider } from "./store/product";
import { CartDataProvider } from "./store/cart";


function App() {
    return (
 
            <BrowserRouter  >
                <CartDataProvider>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/" exact element={
                            <ProductProvider productData={productData}>
                                <Product >
                                </Product>
                            </ProductProvider>
                        }>

                        </Route>
                    </Routes>
                </CartDataProvider>
            </BrowserRouter>
    );
}

export default App;
