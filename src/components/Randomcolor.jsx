import { useState } from "react";

const RandomColor = () => {
    const [TypeofColor, setTypeOfColor] = useState('hex');
    const [color, setcolor] = useState("#000000");

    const handleChangecolor = () => {
        // if (TypeofColor === 'rgb') {
        //     const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        //     const a = array.ranndom() * 256;
        //     console.log(a);
            
        // }
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        const a = array.ranndom() * 256;
        console.log(a);
        // else {
            
        // }
    }
    return (
        <>
            <div className="card"
                style={{
                    width: '100vw', 
                    height: '100vh',
                    background: color,
                }}
            >
            <button onClick={() => setTypeOfColor('rgb')}>create RGB</button>
            <button onClick={() => setTypeOfColor('hex')}>create #</button>
            <button onClick={() => handleChangecolor()}>Change color</button>
            </div>
        </>
    );
}

export default RandomColor; 