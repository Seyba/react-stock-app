import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter"
import Navbar from './components/Navbar/index'
import { StocksContext } from "./context/stocksContext";
import { data } from "./data/data";
import './App.css';

export default function App(props) {
  const apiKey = process.env.REACT_APP_STOCK_API_KEY
  const [stockData, setStockData ] = useState(data)
  const [activeStocks, setActiveStocks ] = useState(null)

  const symbol = useParams()
    //const url2 = `https://financialmodelingprep.com/api/v4/company-outlook?${symbol}&apikey=${apiKey}`
    const url = `https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apiKey}`
    
    const getActiveStocks = async () => {
      try{
        const res = await fetch(url)
        const stockAct = await res.json()
        //console.log(stockAct)
        setActiveStocks(stockAct)
      }catch(e){
        console.log(e)
      }
        
    }
    useEffect(() =>{
        getActiveStocks()
    },[])
    
  return (
    <StocksContext.Provider value={{stockData, activeStocks}}>
      <div className="container mx-auto">
        <Navbar/>
        <AppRouter/>
      </div> 
    </StocksContext.Provider>
  );
}