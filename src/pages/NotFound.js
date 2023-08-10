import { Link } from 'react-router-dom'
export const NotFound = () => {
    return(
        <div>
            <h2>Oops Page not found</h2>
            <p>Return to <Link to="/">home</Link>home</p>
        </div>
    )
}