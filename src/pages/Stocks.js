import { useState, useEffect} from 'react'
import { data } from '../data/data'
import { Link, useParams} from 'react-router-dom'

const apiKey = process.env.REACT_APP_STOCK_API_KEY

export const Stocks = () => {
    const [stocksData, setStocksData ] = useState([])
    const symbol = useParams()
    const url2 = `https://financialmodelingprep.com/api/v4/company-outlook?${symbol}&apikey=${apiKey}`
    const url = `https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${apiKey}`
    
    const getStocksData = async () => {
        try{
            const res = await fetch(url)
            const stockData = await res.json()
            console.log(stockData)
            setStocksData(stockData)
        }catch(e){
            console.log(e)
        }
        
    }
    useEffect(() =>{
        getStocksData()
    },[])
    // const [ stocks, setStocks]= useState(stocksData)
    // const symbol = useParams()
    return(
        <div>
            {
                data.length ? (data.map((stock, idx) => 
                    <ul key={idx}>
                        <li><Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link></li>
                    </ul>
                )): (
                    <h2>No stock Found</h2>
                )
            }

        </div>
    )
}