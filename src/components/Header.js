import React from "react";
import Search from "./Search";

function Header({onSearch, listingCards}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} listingCards={listingCards} />
    </header>
  );
}

export default Header;
