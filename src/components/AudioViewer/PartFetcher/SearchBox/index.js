import React, { useEffect, useRef } from "react";


const SearchBox = ( { setValue, setToggled }) => {
    var inputRef = useRef(null)

    const handleClick = () => {
        setToggled(true)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setToggled(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return <input type="text" placeholder="Search.." ref={inputRef} id="partInput" onClick={handleClick} onChange={(e) => setValue(e.target.value)}/>
}

export default SearchBox;