import React from "react";


function Button(props){


    const [toggle, setToggle]=React.useState(true);


    const returnColor = ()=>{
        if(toggle){
            return props.color;
        }else{
            return "black";
        }
    }




    let style={
        height:"80px",
        width:"80px",
        borderRadius:"80px",
        backgroundColor:returnColor()
    }

    return(
        <div style={style} onClick={()=>setToggle(!toggle)}>

        </div>
    )
}

export default Button;