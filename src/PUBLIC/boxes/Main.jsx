import React, { useState } from "react";
import Header from "./Header";
import Box from "./Box";
import "./boxes.css";

function Main() {
    const [Dark, setDark] = useState(false);

    return (
        <>
            <main className={Dark ? "Dark" : ""}>
                <Header setDark={setDark} Dark={Dark} />

                <div className="boxes">
                    <Box number="1" />
                    <Box number="2" />
                    <Box number="3" />
                    <Box number="4" />
                </div>
            </main>
        </>
    );
}

export default Main;
