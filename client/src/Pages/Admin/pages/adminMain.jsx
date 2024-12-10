import React from "react";
import Navbar from "../Components/Navbar/Navbar"
import Admin from "./Admin";

const adminMain = () => {
    return (
        <div>
            { <Navbar/>}
            <Admin/>
        </div>
    )
}

export default adminMain