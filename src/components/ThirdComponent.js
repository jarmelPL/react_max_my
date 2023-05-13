import React, {useState} from "react"
import './Component.css'



function ThirdComponent() {
    const [value, setValue] = useState('Third Component')
    function changeComponentTitle() {
        setValue('Changed')
    }

    return (
        <li className="third" onClick={changeComponentTitle}>{value}</li>
    )
}

export default ThirdComponent