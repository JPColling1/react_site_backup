import React, { useEffect, useState } from "react";

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

    const getParts = () => {
        //fetch parts from newDB api and store in list
    }

    return<div id="myDropdown" className="dropdown-content">
        <input type="text" placeholder="Search.." id="partInput" />
        <div>Selectable Part</div>
    </div>
}

export default PartFetcher;