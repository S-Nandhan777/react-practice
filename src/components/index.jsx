import React, { useState } from "react";
import data from "./data";
// import './accordian.css'; // Import the CSS file

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id);
    };

    const handleMultipleSelection = (id) => {
        let copyMulti = [...multiple];
        const findIndexOfCurrentId = copyMulti.indexOf(id);
        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) copyMulti.push(id);
        else copyMulti.splice(findIndexOfCurrentId, 1);
        setMultiple(copyMulti);
    };

    console.log(selected, multiple);

    return (
        <div className="wrapper">
            <div className="accordion"
                 style={{
                    maxWidth: '200px',
                     backgroundColor: 'burlywood',
                     display: 'flex',
                     alignItems: "center",
                     justifyContent: "space-around",
                     marginLeft:'200px',
                     flexDirection: "column",
                     maxWidth: '50vw',
                     
                    
                    
                }}
            >
                <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
                 className={enableMultipleSelection ? 'button-multiple-active' : ''}>
                    MultipleSelection
                </button>
                {data && data.length > 0 ? data.map((dataItems) => (
                    <div key={dataItems.id}>
                        <div
                            onClick={
                                enableMultipleSelection
                                    ? () => handleMultipleSelection(dataItems.id)
                                    : () => handleSingleSelection(dataItems.id)
                            }
                        >
                            <h3>{dataItems.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultipleSelection ?
                                multiple.indexOf(dataItems.id) !== -1 && (
                                    <div>{dataItems.answer}</div>
                                )
                                : selected === dataItems.id && (
                                    <div>{dataItems.answer}</div>
                                )
                        }
                    </div>
                )) :
                    <p>No data</p>
                }
            </div>
        </div>
    );
};

export default Accordian;






// import { useState } from "react";
// import data from "./data";
// import './accordian.css'

// const Accordian = () => {
//     const [selected, setselected] = useState(null);

//     const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);

//     const [multiple, setMultiple] = useState([]);
//     const handleSingleSelection = (id) => {
//         setselected(id === selected ? null : id)
//     }

//     const handleMultipleSelection = (id) => {
//         let copyMulti = [...multiple];
//         const findIndexOfCurrentId = copyMulti.indexOf(id);
//         console.log(findIndexOfCurrentId);
//         if (findIndexOfCurrentId === -1) copyMulti.push(id);
//         else copyMulti.splice(findIndexOfCurrentId, 1)
//         setMultiple(copyMulti)
//     }

//     console.log(selected, multiple);

//     return (
//         <div className="wraper">
//             <div className="accordian" >
//                 <button onClick={  () => setEnableMultipleSelection(!enableMultipleSelection)}>MultipleSelection</button>
//                 {data && data.length > 0 ? data.map((dataItems) => (<div key={dataItems.id}>
//                     <div onClick={enableMultipleSelection
//                         ? () => handleMultipleSelection(dataItems.id)
//                         : () => handleSingleSelection(dataItems.id)}>
//                         <h3>{dataItems.question}</h3>
//                         <span>+</span>
//                     </div>
//                     {
//                         enableMultipleSelection ?
//                             multiple.indexOf(dataItems.id) !== -1 &&( <div>
//                                 {dataItems.answer}
//                             </div>)
//                             : selected === dataItems.id &&( <div>
//                                 {dataItems.answer}
//                             </div>)
//                     }

//                     {/* {selected === dataItems.id || multiple.indexOf(dataItems.id) !== -1 ? <div>
//                         {dataItems.answer}
//                     </div> : null} */}
//                 </div>)) :
//                     <p>No data</p>
//                 }
//             </div>
//         </div>
//     );
// }
// export default Accordian;