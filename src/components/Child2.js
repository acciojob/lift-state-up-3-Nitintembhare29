import React from "react";

const Child2 = ({setOption})=>{

    return(
        <div className="child2">                        
            <h2>Child Component2</h2>
            <button onClick={()=> setOption("Option 2")}>Option 2</button>
        </div>
    )
}
export default Child2