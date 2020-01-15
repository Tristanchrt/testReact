import React, { useState } from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";


const AppFormClient = () => {

  const [clients, setClients] = useState([
            { id: 1, nom: "Lior Chamla" },
            { id: 2, nom: "Magali Pernin" },
            { id: 3, nom: "Joseph Durand" }
          ])

  const handleDelete = id => {
    const updateClient = [...clients];
    const index = updateClient.findIndex(client => client.id === id);

    updateClient.splice(index, 1);
    setClients(updateClient);

  };

  const handleAdd = client => {
    const updateClient = [...clients];
    updateClient.push(client);

    setClients(updateClient);
  };

    const title = "Liste des clients";

    return (
      <div class="test" >
        <h1>{title}</h1>
        <ul>
          {clients.map(client => (
            <Client
              key={client.id}
              details={client}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <ClientForm onClientAdd={handleAdd} />
      </div>
    );
}

export default AppFormClient;
