import React, { useEffect, useState } from "react";
import SearchRender from "./SearchRender";
import SearchBox from "./SearchBox";

//fetch part objects with the newDB api and return them as json objects in a list


const PartFetcher = () => {
    const [partsList, setPartsList] = useState([]);
    const [value, setValue] = useState("");
    const [toggled, setToggled] = useState(false);

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

    return<div id="myDropdown" className="dropdown-content">
        <SearchBox setValue={setValue} setToggled={setToggled}/>
        <SearchRender toggled={toggled} partsList={partsList} value={value}/>
    </div>
}

export default PartFetcher;