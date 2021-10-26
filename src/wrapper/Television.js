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
                <h1>Name: Michael Scott</h1>
                <h2>category: television</h2>
                <h3>value: 3</h3>
                <img src="https://media.gamestop.com/i/gamestop/10173271/POP-Television-The-Office-Michael-Scott?$pdp$" alt="Michael Scott"/>
            </div>
            <div>
                <h1>Name: Dwight</h1>
                <h2>category: television</h2>
                <h3>value: 1</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/I/518oRvfXItL._AC_SX425_.jpg" alt="Dwight"/>
            </div>
            <div>
                <h1>Name: Jim</h1>
                <h2>category: television</h2>
                <h3>value: 2</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/I/41vdN0vxvrL._AC_.jpg" alt="Jim"/>
            </div>
            <div>
                <h1>Name: Pam</h1>
                <h2>category: television</h2>
                <h3>value: 1</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/I/31R5tyCdCnL._AC_.jpg" alt="Pam"/>
            </div>
            <button onClick={()=>setChange2(!change2)}>Change Color</button>
        </div>
    )
}

export default Television;