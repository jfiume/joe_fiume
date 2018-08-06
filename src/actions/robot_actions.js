export const RECEIVE_ROBOT = 'RECEIVE_ROBOT';

export const receiveRobot = robot => ({
  type: RECEIVE_ROBOT,
  robot
});

export const fetchRobot = (text) => dispatch => {
  return (
    JSON.parse('{ "robot":`https://robohash.org/${text}.png`}').then(robot => (
      dispatch(receiveRobot(robot))
    ))
  );
};
