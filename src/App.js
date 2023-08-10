import {useState, useEffect} from "react";
import { AppRouter } from "./routes/AppRouter"
import Navbar from './components/Navbar/index'
import { StocksContext } from "./context/stocksContext";
import { data } from "./data/data";
import './App.css';

export default function App(props) {
  const [stockData, setStockData ] = useState(data)
  
  return (
    <StocksContext.Provider value={{stockData}}>
      <div className="container mx-auto">
        <Navbar/>
        <AppRouter/>
      </div> 
    </StocksContext.Provider>
  );
}