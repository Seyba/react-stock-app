import {BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "../pages/About"
import { Home } from "../pages/Home"
import { Dashboard } from "../pages/Dashboard"
import { NotFound } from "../pages/NotFound"
import { SingleStock } from "../pages/SingLeStock"

export const AppRouter = props => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route 
                        Path='*'
                        element={<NotFound/>}
                    />
                    <Route path="/" element={<Home/>}/>
                    <Route path="/stocks" element={<Dashboard/>}/>
                    <Route path="/stocks/:name" element={<SingleStock/>}/>
                    <Route path="/about" element={<About/>}/>
                
                </Routes>
            </BrowserRouter>
        </div>
    )
}