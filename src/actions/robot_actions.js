export const RECEIVE_ROBOT = 'RECEIVE_ROBOT';

export const receiveRobot = robot => ({
  type: RECEIVE_ROBOT,
  robot
});

export const fetchRobot = (text) => dispatch => {
  const url = text.text;
  const robot = {"robot":`https://robohash.org/${url}.png`}
  return (
    dispatch(receiveRobot(robot))
  );
};
