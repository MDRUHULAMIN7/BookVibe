import { useState } from "react";



const NewBooks = () => {
   const array=[10,12,34,556,32,234,44]
const [newarray,setarray]=useState([])
   const handlesort=()=>{
    const sortedarray= array.sort((a,b)=>a-b);
    setarray(sortedarray);
    console.log(newarray);
    console.log(array);
   }
    return (
        <div>
         <button onClick={handlesort} type="button">sort array</button>
        
         <h1>{array}</h1>
<h1>{newarray}</h1>
        </div>
    );
};

export default NewBooks;