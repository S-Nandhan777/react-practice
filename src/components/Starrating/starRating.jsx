// import { useState } from 'react';
// import { FaStar } from 'react-icons/fa';
// import './styles.css'

// export const StarRating1 = ({ noOfStars = 5 }) => {

//     const [rating, setrating] = useState(0);
//     const [hover, sethover] = useState(0);
    
//     const handleOnClick = (getIndex) => {
//         setrating(getIndex);
//     }

//     const handleMouseMove = (getIndex) => {
//         sethover(getIndex);
        
//     }

//     const handleMouseLeave = () => {
//         sethover(rating);
        
//     }

//     return (
//         <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             boxSizing: 'border-box',
//             minHeight:'100vh'
//         }}>
//             {
//                 [...Array(noOfStars)].map((_, index) => {
//                     index += 1;
//                 return <FaStar
//                     key={index}
//                     className={index <=( rating || hover)  ? 'active' : 'inactive' }
//                     onClick={() => handleOnClick(index)}
//                     onMouseMove={() => handleMouseMove(index)}
//                     onMouseLeave={() => handleMouseLeave()}
//                     size={40}
//                 />
//             })
            
//             }
//         </div>
//     );
// }



import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'


const StarRating = ({ noOfStars = 5 }) => {
    
    const [rating, setrating] = useState(0);
    const [hover, sethover] = useState(0);

    const handleOnClick = (getIndex) => {
        setrating(getIndex)
        
    }

    const handleMouseMove = (getIndex) => {
        sethover(getIndex)
        
    }

    const handleMouseLeave = () => {
        sethover(rating)
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight:"100vh"
        }}>{
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;
                    return <FaStar
                    key={index} 
                    className={index <=( hover || rating) ? 'active' : 'inactive'}
                    onClick={() => {handleOnClick(index)}}
                    onMouseMove={() => {handleMouseMove(index)}}
                    onMouseLeave={() => {handleMouseLeave() }}
                    size={50}
                />
                   
            }
            )
        }
        </div>
    );
}

export default StarRating; 