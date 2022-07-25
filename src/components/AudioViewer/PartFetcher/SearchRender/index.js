import React, { useEffect, useRef } from "react";
import PartItem from "./PartItem";

const SearchRender = ({ toggled, partsList, value, setRefList, handleChanges }) => {

    const filteredList = partsList.filter(item => item.partNum.toString().toLowerCase().startsWith(value.toLowerCase()))
    var refList = [];

    const addRef = (ref, index) => {
        refList[index] = ref;
        setRefList(refList);
    }

    if (toggled === true){
        return(<div>
            {
                filteredList.map((item, index) => (
                    <PartItem name={item.partNum} key={item.partId} partId={item.partId} addRef={addRef} index={index} handleChanges={handleChanges}/>
                ))
            }
            </div>
        )
    } else {
        return (<div />)
    }

}

export default SearchRender;