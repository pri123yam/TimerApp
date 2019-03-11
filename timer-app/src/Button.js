import React from 'react';
class Buton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "default",
      on: false
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>{this.props.status? 'on':'off'}</button>
      </div>

    );
  }
}

export default Buton;