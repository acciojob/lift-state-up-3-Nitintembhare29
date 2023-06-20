import React,{useState} from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"

const Parent = ()=>{

    const[option, setOption] = useState("")


    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child1 setOption={setOption} />
            <Child2 setOption={setOption} />
            <p>Selected Option: {option}</p>
        </div>
    )
}
export default Parent