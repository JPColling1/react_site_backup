import React from "react";

const SpeedInput = ( { setSpeed } ) => {
    return (<input placeholder="speed (rpm)" onChange={(e) => setSpeed(e.target.value)}/>)
}

export default SpeedInput;