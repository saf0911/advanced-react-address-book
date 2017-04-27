import React from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail.js";



function AlphabetLetters(props) {
  const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  const AlphabetInsert = letters.map((letter) => {
    return (
      <ul key={letter.index}>{letter}</ul>
    );
  }
);
  // const UserInfo = props.users.map((item) => {
  //   return (
  //     <UserDetail key={item.id} item={item.lastName} />
  //   );
  // }
  // );


  return (
    <AlphabetInsert />
  );
}








export default AlphabetLetters;

AlphabetLetters.propTypes = {
  letters: PropTypes.array,
  users: PropTypes.array
};
