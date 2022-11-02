import React from "react";
import PI, { doublePi, triplePi } from "./mates.js";
import TellTime from "./TellTime";
import ListFood from "./ListFood";
import Heading from "./Heading";
import Card from "./Card";
import contacts from "./Contacts";
import Counter from "./Counter";
import TablePeliculas from "./TablePeliculas";
import FormCards from "./FormCards";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      url={contact.url}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

export default function App() {
  let isLogged = true;
  const [newName, setNewName] = React.useState("");
  const [newTel, setNewTel] = React.useState("");
  const [newMail, setNewMail] = React.useState("");
  const [contactList, setContactList] = React.useState(contacts);

  function nameHandler(event) {
    setNewName(event.target.value);
  }

  function telHandler(event) {
    setNewTel(event.target.value);
  }

  function mailHandler(event) {
    setNewMail(event.target.value);
  }

  function addCard(event) {
    const newId = contactList.length + 1;
    setContactList((prevValue) => [
      ...prevValue,
      {
        id: newId,
        name: newName,
        url: "",
        tel: newTel,
        email: newMail
      }
    ]);
  }

  return (
    <div>
      <TablePeliculas />
      <Counter />
      <FormCards
        nameHandler={nameHandler}
        telHandler={telHandler}
        mailHandler={mailHandler}
        addCard={addCard}
      />
      {isLogged && contactList.map(createCard)}
      <Heading />
      <TellTime />
      <p> El doble del número pi es {doublePi()}</p>
      <ListFood />
    </div>
  );
}
// Con operador ternario
//{isLogged ? contacts.map(createCard) : <p>Necesitas iniciar sesión</p>}
//{isLogged ? contacts.map(createCard) : null}

//Sin mapeo
/*export default function App() {
  return (
    <div>
      <Card
        name={contacts[0].name}
        url={contacts[0].url}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        url={contacts[1].url}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        url={contacts[2].url}
        tel={contacts[2].tel}
        email={contacts[2].email}
      />
      <Heading />
      <TellTime />
      <p> El doble del número pi es {doublePi()}</p>
      <ListFood />
    </div>
  );
}*/

/*function showCards() {
  let isLogged = true;
  if (isLogged) {
    return contacts.map(createCard);
  }
  return <p>Necesitas iniciar sesión</p>;
}*/
