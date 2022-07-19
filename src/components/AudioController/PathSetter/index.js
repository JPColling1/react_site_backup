import React, { useState } from "react";

export const sendPath = (path) => {
    //{debugger}
    fetch("/filePath", {
        method:"POST",
        body: JSON.stringify({"filePath": path}),
        headers: new Headers({ 
            'Content-Type': 'application/json',
        }),
        
    }).then(response  => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error => console.log(error));
}

const PathSetter = (props) => {
    const handleClick = () => {
        sendPath(props.filePath);
        props.readyData(true);
    }

    return <button onClick={() => handleClick()}>Get audio data</button>
}

export default PathSetter;