import React from "react";
// import { useState } from "react";
import "./boxes.css";
import LightModeIcon from "@mui/icons-material/LightMode";

function Header({ setDark, Dark }) {
    return (
        <nav className={Dark ? "btndark" : ""}>
            <button onClick={() => setDark(!Dark)}>Toggle Theme</button>
            <LightModeIcon className={Dark ? "white" : ""} />
        </nav>
    );
}

export default Header;
