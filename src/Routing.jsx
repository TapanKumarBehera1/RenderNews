import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import RoutingError from "./RoutingError" 
const router = createBrowserRouter([
        { path: "/", element: <App /> },
        { path: "*", element: <RoutingError /> }
    ])
export default router