import React from "react";
import Button from "./Button";

function Post(props){

    const [likes,addLikes]=React.useState(50);
    const [color,setColor]=React.useState("red")

    const colors= ["orange","purple", "magenta"];

    const buttonEles = colors.map((itm, idx)=>
        <Button key={idx} color={itm}/>
    );

    const setLikes=()=>{
        addLikes(likes+10)
    }

    const changeColor=()=>{
        if (likes>70){
            setColor("blue")
        }else{
            setColor("green")
        }

    }

    let style={
        height: "250px",
        width: "400px",
        backgroundColor: color
    }

    return(
        //USE SPAN
        <span>
            <div style={style} onClick={changeColor}>
                <h1>{props.data.name}</h1>
                <h2>{props.data.car}</h2>
                <p>{likes} likes</p>
                {buttonEles}
            </div>

            <button onClick={setLikes}>Click Me</button>
        </span>
    )
}


export default Post;