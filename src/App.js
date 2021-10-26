import React from "react";
import Post from "./wrapper/Post";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./wrapper/Home";
import Games from "./wrapper/Games";
import Nav from "./wrapper/Nav";
import Television from "./wrapper/Television";
import Animation from "./wrapper/Animation";
import Color from "./wrapper/Color";



function App() {
    const [data]=React.useState([{name:"Michael", car:"chevy"}, {name:"Tim", car:"Dodge"}, {name:"Jerry", car:"Ford"}])

    let elements = data.map((itm, idx)=>
        <Post key={idx} data={itm}/>
    )

    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/games"} component={Games}/>
                    <Route path={"/television"} component={Television}/>
                    <Route path={"/animation"} component={Animation}/>
                    <Route path={"/color/:id"} component={Color}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
