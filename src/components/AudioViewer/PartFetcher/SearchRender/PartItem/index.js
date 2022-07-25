import React, { useEffect, useRef } from "react";

//send currently selected part ID to backend for processing
const postCurrentID = (partId, handleChanges) => {
    fetch("/partSet", {
        method:"POST",
        body: JSON.stringify({"partId": partId}),
        headers: new Headers({ 
            'Content-Type': 'application/json',
        }),
    }).then(response  => {
        return response.json();
    }).then(data => {
        handleChanges();
        console.log(data);
    }).catch(error => console.log(error));
}

//list item component
const PartItem = ( { name, partId, addRef, index, handleChanges } ) => {
    var itemRef = useRef(null);

    useEffect(() => {
        addRef(itemRef.current, index);
    });

    //pass part ID to post method
    const handleSelection = () => {
        postCurrentID(partId, handleChanges);
    }

    return<div ref={itemRef} onClick={handleSelection}>{name}</div>
}

export default PartItem;