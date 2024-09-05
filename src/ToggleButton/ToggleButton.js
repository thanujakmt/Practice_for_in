
// Write a react component that includes a button .when the button is clicked, 
// a paragraph element below it should toggle between being visible and hidden.
//  Then text in the paragraph element reads: Garpefruite are forever. 

import { useState } from 'react';

function ToggleButton () {

    const [isVisible,setIsvisible] = useState()

    const handleClick = () => {
        setIsvisible(!isVisible)
    }

    return(
        <>
            <div>
                <button onClick={handleClick}>ToggleButton</button>
                {
                    isVisible && (
                        <p>Garpefruite are forever</p>
                    )
                }
            </div>
        </>
    )
}

export default ToggleButton
