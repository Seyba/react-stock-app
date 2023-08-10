import { Link } from 'react-router-dom'

const Navbar  = () => {
    return(
        <nav>
            <ul className="container_header py-3">
                <div className="brand">
                    <li><a href="/">iStocks </a> </li>
                </div>
                <div className="container_header">
                    <li className="px-8"><a href="/stocks">Stocks </a> </li>
                    <li><a href="/about">About </a> </li>
                    
                </div>
            </ul>
        </nav>
    )
}
export default Navbar