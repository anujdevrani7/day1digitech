
import React, { useState } from 'react';

export default function Numbervalidation(prop) {
    const [number, setCount] = useState();
    
    

    function handelonchange(event) {
        if(event.target.value.length<=10){
            setCount(event.target.value)
            if(event.target.value.length==10){
                document.getElementById("phone").classList.remove("error");

            }
            else{
                document.getElementById("phone").classList.add("error");

            }
            
        }

        
        

    }
    return (
        <>
            <tr>
                <td><label htmlFor="phone">Phone</label></td>
                <td><input  type="number" onChange={handelonchange} id="phone" name="phone" value={number} /></td>
            </tr>
        </>



    )
}
