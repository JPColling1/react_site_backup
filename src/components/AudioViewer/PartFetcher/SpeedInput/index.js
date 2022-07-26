import React from "react";

//pass new speed to backend for processing
const postSpeedVal = (speed, handleChanges) => {
    fetch("/speedSet", {
            method:"POST",
            body: JSON.stringify({"speed": speed}),
            headers: new Headers({ 
                'Content-Type': 'application/json',
            }),
        }).then(response  => {
            return response.json();
        }).then(data => {
            console.log(data);
            handleChanges();
        }).catch(error => console.log(error));
}

//speed input box component
const SpeedInput = ( { handleChanges } ) => {
    return (<input placeholder="speed (rpm)" onChange={(e) => postSpeedVal(e.target.value, handleChanges)}/>)
}

export default SpeedInput;