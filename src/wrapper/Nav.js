import React from "react";
import {NavLink} from "react-router-dom";


function Nav(){
    return(
        <nav>
            <NavLink exact to={"/"} activeClassName={"active"}> HOME  </NavLink>
            <NavLink to={"/games"} activeClassName={"active"}>  See-Tweets  </NavLink>
            <NavLink to={"/television"} activeClassName={"active"}>  Make-Tweets  </NavLink>
        </nav>
    )

}

export default Nav;