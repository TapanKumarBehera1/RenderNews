import { RouterProvider } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from "./Routing.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
