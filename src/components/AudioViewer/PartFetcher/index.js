import React, { useEffect, useState } from "react";
import SearchRender from "./SearchRender";

//fetch part objects with the newDB api and return them as json objects in a list


const PartFetcher = () => {
    const [partsList, setPartsList] = useState([]);

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
        <input type="text" placeholder="Search.." id="partInput" />
        <SearchRender partsList={partsList}/>
    </div>
}

export default PartFetcher;