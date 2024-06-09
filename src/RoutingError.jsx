import { TiArrowBack } from "react-icons/ti";
import "./RoutingError.css"
import { useNavigate } from 'react-router-dom'

const RoutingError = () => {
    let navigate = useNavigate()
    function navigateFnc() {
        navigate('/')
    }
    return (
        <div className='pageNotFound'>
            <button onClick={navigateFnc}><TiArrowBack /></button>
            <p>404 Error | Page Not Found</p>
        </div>
    )
}

export default RoutingError