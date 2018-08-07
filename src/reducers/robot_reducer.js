import { RECEIVE_ROBOT } from '../actions/robot_actions';

const RobotReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROBOT:
      return Object.assign({}, action.robot);
    default:
      return state;
  }
};

export default RobotReducer;
