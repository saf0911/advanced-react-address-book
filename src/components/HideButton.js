import React from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail.js";


export default class HideButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

  }

  handleClick() {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    const {user} = this.props;
    const {isToggleOn} = this.state;
    return (
      <li key={user.id}>
        <UserDetail toggled={isToggleOn} key={user.id} item={user} />
        <button onClick={() => this.handleClick()}>
          {isToggleOn ? "Hide" : "Show"}
        </button>
      </li>
    );
  }

}

HideButton.propTypes = {
  user: PropTypes.array,
}
