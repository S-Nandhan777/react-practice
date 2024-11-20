import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";

const RandomColor = () => {
    const [color, setcolor] = useState("#000000");
    const [typeOfColor, setTypeOfColor] = useState('rgb');

    useEffect(() => {
        typeOfColor === 'rgb' ? handleRGB() :
            handleHEX()
    }, [typeOfColor]);

    const randomUtility = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleHEX = () => {
        // #123H09
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexcolor = "#";
        for (let i = 0; i < 6; i++){
            hexcolor += hex[randomUtility(hex.length)]
            console.log(hexcolor);
            setcolor(hexcolor);
        }
    }

    const handleRGB = () => {
        const r = randomUtility(256);
        const g = randomUtility(256);
        const b = randomUtility(256);
        console.log(r,g,b)
        setcolor(`rgb(${r},${g},${b})`);
    }
    return (
        <div className="card" style={{
            background: color,
            width: "100vw",
            height:"100vh"
        }}>
            <button onClick={() => setTypeOfColor('rgb')}>Set RGB</button>
            <button onClick={() => setTypeOfColor('hex')}>Set HEX</button>
            <button onClick={typeOfColor === 'rgb' ? () => handleRGB() : () => handleHEX()}>Click To Change Background Color</button>

            <div>
                {typeOfColor === 'rgb' ? <h3>{`Color = (${color})`}</h3> : <h3>{`Color = (${color})`}</h3>}
            </div>
        </div>

    );
}

export default RandomColor;