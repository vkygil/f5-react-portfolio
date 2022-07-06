import './Portfolio.css';
import MainPage from "./MainPage"
import Works from "./Works"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Portfolio = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="works" element={<Works />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Portfolio