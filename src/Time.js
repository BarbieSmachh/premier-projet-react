import { useEffect, useState } from "react";
import React from "react";
import dio from "./zaWarudo.gif";
function Time() {
  
    const[time, setTime]  = useState(0);

    useEffect(()=> {
        const interval = setInterval (()=> {
            setTime(time + 1)
        },1000) 
        if (time === 10){
            clearInterval(interval);
            document.querySelector('h2').textContent = 'ZA WARUDO';
            document.body.classList.add("backgroundBlack");

            let imgElement = document.createElement('img');
            imgElement.setAttribute("src", dio);
            imgElement.setAttribute("alt", "za warudo");

            document.querySelector(".countSeconds").appendChild(imgElement)
{
    
}
           
        }
        return ()=> {
            clearInterval(interval)
        }
    })
   
 
return (
    <>    
    <section className="countSeconds">
    il s'est écoulé {time} secondes !
    <h2>


    </h2>
    
        
    
    </section>
    
    </>

  )
}

export default Time