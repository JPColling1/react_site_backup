import React, { useEffect, useRef } from "react";

const PartItem = ( { name, setCurrentId, partId, addRef, index} ) => {
    var itemRef = useRef(null);

    useEffect(() => {
        addRef(itemRef.current, index);
    });

    return<div ref={itemRef} onClick={() => setCurrentId(partId)}>{name}</div>
}

export default PartItem;