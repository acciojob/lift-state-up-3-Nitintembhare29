import React from "react";

const Child1 = ({setOption})=>{

    return(
        <div className="child1">                        
            <h2>Child Component1</h2>
            <button onClick={()=> setOption("Option 1")}>Option 1</button>
        </div>
    )
}
export default Child1
