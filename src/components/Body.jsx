import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./Header.css"

function Body() {
    return (
        <div >
            <Header />
            <div className="container">
            <Outlet />
            <Footer />
            </div>
        </div>

    )
}

export default Body;