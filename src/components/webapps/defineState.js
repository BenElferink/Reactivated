// this function, with the help of 4 required parameters,
// checks if given user object has a property for the given app.
// if that property exists, then it's data is returned to the state (where we called this function),
// if that property doesn't exist, then the given default value is returned to the state.
export default function defineState(user, appData, stateParameter, defaultValue) {
  let userAppData = user[`${appData}`];
  if (userAppData === undefined) {
    return defaultValue;
  } else {
    return userAppData[`${stateParameter}`];
  }
}
