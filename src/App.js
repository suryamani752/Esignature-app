import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {
  const [name, setName] = useState("suryamani");
  const [date, setDate] = useState("Dob");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="container-fluid">
      <h1 className="text-center">Signature app</h1>
      <Title text={name} />
      <Title text={date} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet,
        commodi soluta libero eligendi consequuntur beatae rerum, iure est
        suscipit explicabo. Perspiciatis nobis atque aliquid possimus, ducimus
        magnam soluta labore pariatur est amet impedit dolorem iure doloribus
        facilis reiciendis sint ut cum blanditiis recusandae repellat quis
        repellendus ad iste. Iure optio soluta consectetur voluptatibus dolor
        laboriosam, voluptates nobis odit. Velit aperiam quidem excepturi fugit
        nulla tempore hic. Libero, laborum deleniti officiis voluptatum nulla
        ipsam aliquid sequi debitis rem suscipit qui ab accusamus nemo esse
        totam minima maiores cupiditate dolorum rerum. Illo voluptates quidem
        asperiores nobis rerum itaque molestiae quibusdam veniam?
      </p>
      <div className="d-flex input-boxes">
        <input type="text" value={name} onChange={handleNameChange} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
