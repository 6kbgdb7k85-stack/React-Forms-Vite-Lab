import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function addItem(item) {
    item.id = `${items.length + 1}`;
    setItems((prevState) => [...prevState, item]);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === "") return true;

    return (
      (item.category === selectedCategory || selectedCategory === "All") &&
      (item.name.toLowerCase().includes(search.toLowerCase()) || search === "")
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItem}/>
      <Filter
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={setSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
