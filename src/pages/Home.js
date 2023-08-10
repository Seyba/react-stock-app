import { useContext } from 'react'
import { StocksContext } from '../context/stocksContext'

export const Home = () => {
    const ctx = useContext(StocksContext)
    const { activeStocks } = ctx
    console.log(activeStocks)
    if(activeStocks === null) {
        return(
            <div> 
                <h2>Loading...</h2>
            </div>
        )
    }
    const companies = activeStocks.map((stock, idx) => <li key={idx}>{stock.name}</li>)
    const changes = activeStocks.map((stock, idx) => <li key={idx}>{stock.change}</li>)
    const price = activeStocks.map((stock, idx) => <li key={idx}> {stock.price}</li>)
    return(
        <div>
            <h2>Home Page</h2>
            <h3>Most Active Stocks</h3>
            <div className="grid grid-cols-3 gap-2">
                <div>
                    <h2>Company Name</h2>
                </div>
                <div>
                    <h2>Price</h2>
                </div>
                <div>
                    <h2>Change</h2>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div>
                    <u>
                        {companies}
                    </u>
                </div>
                <div>
                    <ul>
                        {price}
                    </ul>
                </div>
                <div>
                    <ul>
                        {changes}
                    </ul>
                </div>
            </div>

        </div>
    )
}

