import { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { StocksContext } from '../context/stocksContext'

export const SingleStock = (props) => {
    const ctx = useContext(StocksContext)
    const symbol = useParams()
    const { stockData } = ctx

    //* find the index of the matching symbol from the router
    const idx = stockData.findIndex(stock => stock.symbol === symbol.name)

    //* Access the name value from the array
    const companyName = stockData[idx].name

    //* Access the last Price value from the array
    const price = stockData[idx].lastPrice
    
    return(
        <div>
            <h2>Name: {companyName}</h2>
            <h2>Price: {price} </h2>
        </div>
    )
}