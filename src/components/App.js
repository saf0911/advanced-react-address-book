import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddH3 from "./AddH3";
import AddFooter from "./AddFooter.js";
import ListOfUsers from "./ListOfUsers.js";
import PropTypes from "prop-types";
import AlphabetLetters from "./AlphabetLetters";
import NameList from "./NameList.js";

function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <AddH3 />
      <ListOfUsers users={props.users} />
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <NameList users={props.users} />
      <AlphabetLetters users={props.users} />
      <AddFooter />

    </div>
  );
}

App.propTypes = {
  users: PropTypes.array,
  alphabet: PropTypes.array
};

export default App;
