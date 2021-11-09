import React from "react";

function Games(){
    const [color, setColor]=React.useState("blue");
    const [change2, setChange2]=React.useState(false);


    React.useEffect(()=>{
        if(change2){
            setColor("pink");
        }else{
            setColor("blue");
        }
    },[change2])

    return(
        <div style={{backgroundColor: color}}>
            <div>
                <h1>Kazuya Funko</h1>
                <img src="https://cdn.shopify.com/s/files/1/0803/3763/products/Tekken_kazuya_POP-mindzai-1000-2.jpg?v=1571567721" alt="Kazuya"/>

            </div>
            <div>
                <h1>Cortex Funko</h1>
                <img src="https://www.characterstation.com/eshop/13567-large_default/figur-funko-pop-games-crash-bandicoot-neo-cortex-rare-geneva-switzerland-online-shop.jpg" alt="Cortex"/>
            </div>
            <div>
                <h1>Sonic Funko</h1>
                <img src="https://images-na.ssl-images-amazon.com/images/I/41x7KV15nsL._AC_SY450_.jpg" alt="Sonic"/>
            </div>
            <div>
                <h1>McCree Funko</h1>
                <img src="https://geekvault.co.uk/wp-content/uploads/2019/07/Overwatch_FPV_USAMcCree01.jpg" alt="McCree"/>
            </div>
            <button onClick={()=>setChange2(!change2)}>Change Color</button>

        </div>
    )
}

export default Games;