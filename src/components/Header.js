import React, { useState } from "react";

function Header({onDarkModeClick, mode}) {


    return (
        <div className={"App " + (mode ? "dark" : "light")}>
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {mode ? "Dark" : "Light"} Mode
        </button>
      </header>
       </div>
    )
}

export default Header;