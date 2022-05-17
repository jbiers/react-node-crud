import { useState } from "react";

import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";

export function Home() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div className="App">
            <Header title="Home" />
            <Navbar />

            <button
             type="button"
             onClick={increment}
            >
                Click
            </button>

            <p>{counter} clicks</p>
        </div>
    )
}