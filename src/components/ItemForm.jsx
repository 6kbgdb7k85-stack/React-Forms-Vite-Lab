import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemForm, setItemForm] = useState({
    id:'',
    name: "",
    category: "Produce",
  });

  function handleFormChange({ target }) {
    setItemForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(itemForm);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          onChange={handleFormChange}
          type="text"
          name="name"
          value={itemForm.name}
        />
      </label>

      <label>
        Category:
        <select
          onChange={handleFormChange}
          name="category"
          value={itemForm.category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
