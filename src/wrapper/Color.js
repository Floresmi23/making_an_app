import React from "react";

function Color(props){
    return(
        <div style={{height:"100px", width:"100px", backgroundColor:props.match.params.id}}>

        </div>
    )
}

export default Color;