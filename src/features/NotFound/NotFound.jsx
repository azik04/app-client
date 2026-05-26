import { useNavigate } from 'react-router-dom';
import './style.css'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className='asset'>
            <div class="asset-container">
                <p className="fs-1 mb-2">404</p>
                <p className="fs-3 mb-3">Oops! Page not found.</p>
                <button type='button' onClick={() => navigate("/")} class="btn btn-dark">Go Home</button>
            </div>
        </div>
    )
}

export default NotFound;