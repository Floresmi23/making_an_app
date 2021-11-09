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
        newList.push("Selected");
        setData(newList);
        setChange(!change);

    }


    return(
        <div style={{backgroundColor: color}}>
            <div>
                {eles}
            </div>
            <div>
                <h1>Goku Funko</h1>

                <img src="https://images-na.ssl-images-amazon.com/images/I/51KJqhhcMZL._AC_SL1076_.jpg" alt="goku"/>
            </div>

            <button onClick={addList}>Select</button>
            <button onClick={()=>setChange2(!change2)}>Change Color</button>
        </div>
    )
}

export default Home;