import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { StocksContext } from '../context/stocksContext'

export const Dashboard = () => {
    const ctx = useContext(StocksContext)
    const { stockData } = ctx
    return(
        <div>
            {
                stockData.map((stock, idx) => {
                    return <ul key={idx}>
                        <Link to={`/stocks/${stock.symbol}`}><li>{stock.name}</li></Link>
                    </ul>
                })
            }
        </div>       
    )
}