import React from 'react'
import Table from './Table'
import ColorSelector from './ColorSelector';
import { useDispatch } from "react-redux";
import { addRow } from "../stateSlice.js";

const App = () => {
    const dispatch = useDispatch();

const handleAddRowClick = () => {
    dispatch(addRow());
}
  return (
    <div id="pixelate">
      <h1>Pixelate</h1>
      <div>
        <button  onClick={handleAddRowClick} id="add-row">Add a row</button>
       <ColorSelector />
      </div>
      <Table />
    </div>
  );
}

export default App



