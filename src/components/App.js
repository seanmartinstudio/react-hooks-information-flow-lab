import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div>
      <Header onDarkModeClick={handleDarkModeClick} mode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
