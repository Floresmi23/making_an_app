import React from "react";

function Animation(){
    const [color, setColor]=React.useState("blue");
    const [change2, setChange2]=React.useState(false);


    React.useEffect(()=>{
        if(change2){
            setColor("pink");
        }else{
            setColor("orange");
        }
    },[change2])


    return(
        <div style={{backgroundColor: color}}>
            <div>
                <h1>Name: Goku</h1>
                <h2>category: animation</h2>
                <h3>value: 1</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/I/51KJqhhcMZL._AC_SL1076_.jpg" alt="goku"/>
            </div>
            <div>
                <h1>Name: Vegeta</h1>
                <h2>category: animation</h2>
                <h3>value: 2</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/I/514OOd8O5hL._AC_SX425_.jpg" alt="Vegeta"/>
            </div>
            <div>
                <h1>Name: Vegito</h1>
                <h2>category: animation</h2>
                <h3>value: 5</h3>
                <img src="https://i5.walmartimages.com/asr/9d0d9ea9-279c-49c9-b263-ecc42d8a30c7_1.9e55add9a48eb687cadb0527a27ad48f.jpeg" alt="Vegito"/>
            </div>
            <div>
                <h1>Name: Deku</h1>
                <h2>category: animation</h2>
                <h3>value: 2</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/I/51IZqW3L05L._AC_SX425_.jpg" alt="Deku"/>
            </div>
            <button onClick={()=>setChange2(!change2)}>Change Color</button>
        </div>
            )
}
export default Animation;