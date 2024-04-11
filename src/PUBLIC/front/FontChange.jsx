import React, { useState } from 'react';
import "./FontChange.css";

function Text() {
    const [input, setInputText] = useState("");
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isLowercase, setIsLowercase] = useState(false);
    const [isUppercase, setIsUppercase] = useState(false);

    return (
        <div>
            <div className='parent'>
                <input
                    type="text"
                    placeholder="Enter Something"
                    className={`${isBold ? "bold" : ""} ${isItalic ? "italic" : ""} ${isLowercase ? "lowercase" : ""} ${isUppercase ? "uppercase" : ""}`}
                    value={input}
                    onChange={(e) => setInputText(e.target.value)}
                />

                <button onClick={() => setIsBold(!isBold)} className={isBold ? "normal" : "bold"}>
                    {isBold ? "Normal" : "Bold"}
                </button>

                <button onClick={() => setIsItalic(!isItalic)} className={isItalic ? "normal" : "italic"}>
                    {isItalic ? "Normal" : "Italic"}
                </button>

                <button onClick={() => setIsLowercase(!isLowercase)} className={isLowercase ? "normal" : "lowercase"}>
                    {isLowercase ? "Normal" : "Lowercase"}
                </button>

                <button onClick={() => setIsUppercase(!isUppercase)} className={isUppercase ? "normal" : "uppercase"}>
                    {isUppercase ? "Normal" : "Uppercase"}
                </button>
            </div>
        </div>
    );
}

export default Text;
