import { useContext } from 'react'
import { StocksContext } from '../context/stocksContext'

export const Home = () => {
    const ctx = useContext(StocksContext)
    const { activeStocks } = ctx
    
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
            <div className="grid grid-cols-3 gap-2 py-4">
                <div>
                    <h2 className="text-2xl">Company Name</h2>
                </div>
                <div>
                    <h2 className="text-2xl">Price</h2>
                </div>
                <div>
                    <h2 className="text-2xl">Change</h2>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <u className="text-sm list-none no-underline divide-y divide-blue-200">
                        {companies}
                    </u>
                </div>
                <div>
                    <ul className="text-sm divide-y divide-blue-200">
                        {price}
                    </ul>
                </div>
                <div>
                    <ul className="text-sm divide-y divide-blue-200">
                        {changes}
                    </ul>
                </div>
            </div>

        </div>
    )
}