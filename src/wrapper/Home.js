import React from "react";

function Home(){
    const [data, setData]=React.useState([])
    const [list, setList] =React.useState([])
    const [change, setChange]=React.useState(false);
    const [change2, setChange2]=React.useState(false);
    const [color, setColor]=React.useState("blue");



    React.useEffect(()=>{
        setList(data);
    },[data, change]);





    React.useEffect(()=>{
        if(change2){
            setColor("pink");
        }else{
            setColor("red");
        }
    },[change2])

    let eles = list.map((itm, idx)=>
        <div key={idx}>{itm}</div>
    )


    const addList =()=>{
        let newList = data;
        newList.push("Home");
        setData(newList);
        setChange(!change);

    }

// , "Vegito", "Deku", "Kazuya", "Cortex", "Sonic", "McCree", "Michael Scott", "Dwight", "Jim", "Pam"

    return(
        <div style={{backgroundColor: color}}>
            <div>
                {eles}
            </div>
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
            <div>
                <h1>Name: Kazuya</h1>
                <h2>category: games</h2>
                <h3>value: 3</h3>
                <img src="https://cdn.shopify.com/s/files/1/0803/3763/products/Tekken_kazuya_POP-mindzai-1000-2.jpg?v=1571567721" alt="Kazuya"/>
            </div>
            <div>
                <h1>Name: Cortex</h1>
                <h2>category: games</h2>
                <h3>value: 2</h3>
                <img src="https://www.characterstation.com/eshop/13567-large_default/figur-funko-pop-games-crash-bandicoot-neo-cortex-rare-geneva-switzerland-online-shop.jpg" alt="Cortex"/>
            </div>
            <div>
                <h1>Name: Sonic</h1>
                <h2>category: games</h2>
                <h3>value: 4</h3>
                <img src="https://images-na.ssl-images-amazon.com/images/I/41x7KV15nsL._AC_SY450_.jpg" alt="Sonic"/>
            </div>
            <div>
                <h1>Name: McCree</h1>
                <h2>category: games</h2>
                <h3>value: 3</h3>
                <img src="https://geekvault.co.uk/wp-content/uploads/2019/07/Overwatch_FPV_USAMcCree01.jpg" alt="McCree"/>
            </div>
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
            <button onClick={addList}>Click Me</button>
            <button onClick={()=>setChange2(!change2)}>Change Color</button>
        </div>
    )
}

export default Home;