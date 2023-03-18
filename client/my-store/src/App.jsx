import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Product from "./pages/product/Product.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/products/:id",
        element: <Products/>
    },
    {
        path: "/product/:id",
        element: <Product/>
    }
])

function App() {

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App