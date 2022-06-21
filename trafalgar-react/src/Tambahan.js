import React, { Component } from "react";

import "./_style.scss";

class Tambahan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      fullName: "John Doe",
    };
  }

  handleChangeFullName = (e) => {
    const _value = e.target.value;
    this.setState({
      fullName: _value,
    });
  };

  handleShowPopup = () => {
    this.setState({
      showPopup: true,
    });
  };

  handleHidePopup = () => {
    this.setState({
      hidePopup: false,
    });
  };

  render() {
    const {
      handleChangeFullName,
      handleShowPopup,
      handleHidePopup,
      state: { fullName, showPopup },
    } = this;

    return (
      <>
        <input
          type="text"
          placeholder="Input Here"
          onInput={(e) => this.handleChangeFullName(e)}
        />
        <h1>Hello, {fullName}</h1>

        <button
          className="tambahan__btn"
          onClick={handleShowPopup}
          type="button"
        >
          Show Popup
        </button>
        <div className="popup">
          <button
            type="button"
            onClick={handleHidePopup}
            className="popup__close"
          >
            Close Popup
          </button>
          <h2>Popup Content</h2>
        </div>
      </>
    );
  }
}

export default Tambahan;
