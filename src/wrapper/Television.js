import React from "react";

function Television(){
    const [color, setColor]=React.useState("blue");
    const [change2, setChange2]=React.useState(false);


    React.useEffect(()=>{
        if(change2){
            setColor("pink");
        }else{
            setColor("green");
        }
    },[change2])


    return(
        <div style={{backgroundColor: color}}>
            <div>
                <h1>Michael Scott Funko</h1>
                <img src="https://media.gamestop.com/i/gamestop/10173271/POP-Television-The-Office-Michael-Scott?$pdp$" alt="Michael Scott"/>
            </div>
            <div>
                <h1>Dwight Funko</h1>
                <img src="https://images-na.ssl-images-amazon.com/images/I/518oRvfXItL._AC_SX425_.jpg" alt="Dwight"/>
            </div>
            <div>
                <h1>Jim Funko</h1>
                <img src="https://images-na.ssl-images-amazon.com/images/I/41vdN0vxvrL._AC_.jpg" alt="Jim"/>
            </div>
            <div>
                <h1>Pam Funko</h1>
                <img src="https://images-na.ssl-images-amazon.com/images/I/31R5tyCdCnL._AC_.jpg" alt="Pam"/>
            </div>
            <button onClick={()=>setChange2(!change2)}>Change Color</button>
        </div>
    )
}

export default Television;