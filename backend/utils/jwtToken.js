// create and sennd token and save in the cookie
const sendToken = (user, statusCode, res) => {

	// create Jwt token
	const token = user.getJwtToken();

	// options for cookie
	const options = {
		expires: new Date(
			Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 1000
		),
		//make it accessible through your code only
		httpOnly: true
	}
	res.status(statusCode).cookie('token', token, options).json({
		success: true,
		token,
		user
	})
}



module.exports = sendToken;