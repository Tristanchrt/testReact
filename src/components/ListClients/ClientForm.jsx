import React, { Component, useState } from "react";

const ClientForm = (props) => {

  const [newClient, setClient] = useState(""); 

  const handleChange = event => {
    setClient(event.currentTarget.value );
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = newClient;

    props.onClientAdd({ id, nom });

    setClient("");
  };

    return (
      <form onSubmit={handleSubmit}>
        <input
          value={newClient}
          onChange={handleChange}
          type="text"
          placeholder="Ajouter un client"
        />
        <button>Confirmerr</button>
      </form>
    );
}

export default ClientForm;
