import React, { useEffect, useRef } from "react";


const SearchBox = ( { setValue, setToggled, setInputRef }) => {
    var inputRef = useRef(null)

    const handleClick = () => {
        setToggled(true)
    }

    useEffect(() => {
        //{debugger}
        setInputRef(inputRef.current);
    }, []);

    return <input type="text" placeholder="Search.." ref={inputRef} onClick={handleClick} onChange={(e) => setValue(e.target.value)}/>
}

export default SearchBox;