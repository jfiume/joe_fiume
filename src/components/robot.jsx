import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRobot } from '../actions/robot_actions';

class Robot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      robot: false
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({'text': e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const text = {text: this.state.text}
    this.props.fetchRobot(text);
    // set a flag for when we get a new robot
    this.setState({'robot': true})
    // delay for the animation to run, then set robot to false
    setTimeout(() => this.setState({'robot': false}), 10000);
  }

  render() {
    // set the classname to trigger an animation
    let className = 'img';
    if (this.state.robot) {
      className += '-robot'
    };
    return (
      <div>
        <h1>Robots</h1>
        <form>
          <label> Input text here:
          <input type="text"
            value={this.state.text}
            onChange={(e) => this.update(e)}
          />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <section>
          <img src={this.props.robot} alt="" className={className}/>
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
