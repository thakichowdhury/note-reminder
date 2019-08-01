const checkUserActivity = require('./checkUserActivity.js');
const toggleUserActivity = require('./toggleUserActivity.js');

const checkAndToggleUserActiveState = async ({ phoneNumber, directive }) => {
  const isUserActive = await checkUserActivity({ phoneNumber });

  const alreadyAtDesiredState = `Your account is already ${isUserActive ? 'active' : 'inactive'}.`;
  const switchedState = `Your account has been set to ${isUserActive ? 'inactive' : 'active'}.`;

  // if account's is_active field should be updated
  const shouldToggleActivityLevel = (directive === 'START' && !isUserActive) || (directive === 'STOP' && isUserActive);

  if (shouldToggleActivityLevel) {
    // toggle the is_active field and return message informing of the state update
    await toggleUserActivity({ phoneNumber });
    return switchedState;
  }

  // else return message saying that the update was unneccessary
  return alreadyAtDesiredState;
};

module.exports = checkAndToggleUserActiveState;
