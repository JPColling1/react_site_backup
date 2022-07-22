import React, { useEffect, useRef, useState } from "react";
import SearchRender from "./SearchRender";
import SearchBox from "./SearchBox";
import SpeedInput from "./SpeedInput";

//fetch part objects with the newDB api and return them as json objects in a list


const PartFetcher = () => {
    const [partsList, setPartsList] = useState([]);
    const [value, setValue] = useState("");
    const [toggled, setToggled] = useState(false);
    const [speed, setSpeed] = useState(0);
    const [currentId, setCurrentId] = useState(0);


    var inputRef1 = useRef(null);
    const setInputRef = (ref) => {
        inputRef1.current = ref;
    }

    var refList = useRef(null);
    const setRefList = (refs) => {
        refList.current = refs;
    }

    useEffect(() => {
        //fetch parts and put response in parts List
        fetch("/partsList").then(
            res => res.json()
        ).then(
            data => {
                let partList = JSON.parse(data["partsList"])
                setPartsList(partList);
            }
        )
        
    }, [])

    useEffect(() => {
        function handleClickOutside(event) {
            //check if any partItems are within click bounds
            let inList = false;
            //{debugger}
            if (refList.current !== null){
                for (let i = 0; i < refList.current.length; i++){
                    if (refList.current[i].contains(event.target)){
                        inList = true;
                    }
                }
            }
            if (inputRef1.current && !inputRef1.current.contains(event.target) && !inList) {
                setToggled(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        };
    })

    const handleSelection = (idNum) => {
        var promise = setCurrentId(idNum);
    }

    return<div id="myDropdown" className="dropdown-content">
        <SpeedInput setSpeed={setSpeed}/>
        <SearchBox setValue={setValue} setToggled={setToggled} setInputRef={setInputRef}/>
        <SearchRender toggled={toggled} partsList={partsList} value={value} setCurrentId={handleSelection} setRefList={setRefList}/>
    </div>
}

export default PartFetcher;