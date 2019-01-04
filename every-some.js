function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
       return submittedUsers.some(result => submittedUsers.every(user => goodUsers.includes(user)));
    };
}
    
module.exports = checkUsersValid


