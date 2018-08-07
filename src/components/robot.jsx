import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRobot } from '../actions/robot_actions';

class Robot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const text = {text: this.state.text}
    this.props.fetchRobot(text);
  }

  render() {
    return (
      <div>
        <h1>Robots</h1>
        <form>
          <label> Input text here <br/>
          <input type="text"
            value={this.state.text}
            onChange={this.update('text')}
          />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <section>
          <img src={this.props.robot} alt="" />
        </section>
      </div>
    )
  }
}


const mapStateToProps = ( { robot } ) => {
  return ({
    robot
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRobot: (text) => dispatch(fetchRobot(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Robot);
