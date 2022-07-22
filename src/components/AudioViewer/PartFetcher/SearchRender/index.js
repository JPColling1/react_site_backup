import React from "react";
import PartItem from "./PartItem";

const SearchRender = ({ toggled, partsList, value }) => {

    const filteredList = partsList.filter(item => item.partNum.toString().toLowerCase().startsWith(value.toLowerCase()))

    if (toggled === true){
        return(<div>
            {
                filteredList.map((item) => (
                    <PartItem name={item.partNum} key={item.partId}/>
                ))
            }
            </div>
        )
    } else {
        return (<div />)
    }

}

export default SearchRender;