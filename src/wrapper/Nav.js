import React from "react";
import {NavLink} from "react-router-dom";


function Nav(){
    return(
        <nav>
            <NavLink exact to={"/"} activeClassName={"active"}> ALL  </NavLink>
            <NavLink to={"/games"} activeClassName={"active"}>  GAMES  </NavLink>
            <NavLink to={"/television"} activeClassName={"active"}>  TELEVISION  </NavLink>
            <NavLink to={"/Animation"} activeClassName={"active"}> ANIMATION </NavLink>
        </nav>
    )

}

export default Nav;