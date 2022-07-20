import React from "react";
import PartItem from "./PartItem";

const SearchRender = (props) => {

    return(<div>
        {
            props.partsList.map((item) => (
                <PartItem name={item.partNum} key={item.partId}/>
            ))
        }
        </div>
    )
}

export default SearchRender;