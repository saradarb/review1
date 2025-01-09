import React, { useState } from 'react';

function Problem3() {
    const [original, setOriginal] = useState("Hello World");

    const theFunct = () => {
        setOriginal((prevValue) => {
            return prevValue === "Hello World" ? "OOOOOOOO" : "Hello World";
        });
    };

    return (
        <div>
            <button onClick={theFunct}>{original}</button>
        </div>
    );
}

export default Problem3;
