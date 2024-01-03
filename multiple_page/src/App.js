import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import Home from "./pages/home";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefinition = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage/>}/>
//         <Route path="/products" element={<ProductsPage/>}/>
//     </Route>
// );
// const router = createBrowserRouter(routeDefinition);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/products', element: <ProductsPage/>},
            {path: '/products/:productId', element: <ProductDetailPage/>},
        ]
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
