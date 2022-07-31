import React from "react";

class ProfileCards extends React.Component {
  constructor() {
    super();
  }

  render(props) {
    return (
      <div className="card">
        <div className="profile-card-container">
          <div className="profile-card-wrapper">
            <img
              className="republic-logo"
              src="https://cdn11.bigcommerce.com/s-fg272t4iw0/images/stencil/1280x1280/products/3259/3512/C-13266__70796.1557815494.jpg?c=2"
              alt="republic logo"
            />

            <div className="card-name">{this.props.name}</div>

            <div className="description">{this.props.description}</div>
          </div>
          <button className="card-button">Action Btn</button>
        </div>
      </div>
    );
  }
}

export default ProfileCards;
