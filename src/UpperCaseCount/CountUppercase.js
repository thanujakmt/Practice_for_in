
// Create a react component  that  includes a textarea.
// Displays the count of uppercase letters entered in 
// real-time Below the textarea

import { useState } from "react"

function UpperCaseCount () {

    const [text,setText] = useState('');
    const [upperCount,setUpperCount] = useState(0);

    const handleText = (e) => {
        const inPutText = e.target.value
        setText(inPutText)
        handleCount(inPutText)
    }

    const handleCount = (str) => {
        const count = str.split('').filter(char => char >= 'A' && char <= 'Z').length
        setUpperCount(count)
    }

    return (
        <>
            <div>
                <textarea placeholder="Type here..." value={text} onChange={handleText}></textarea>
                <div>UpperCaseCount : {upperCount}</div>
            </div>
        </>
    )
}

export default UpperCaseCount
