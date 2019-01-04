function getShortMessages(messages) {
	//let result = [];
	let result = messages.filter(msg => msg.message.length < 50).map(msg => msg.message);
	return result;
}
module.exports = getShortMessages
