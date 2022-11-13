const signupUser = async (req, res) =>
{
	try
	{
		const { name, email, password, phone } = req.body;

		console.log(name, email, password, phone)

	} catch (error)
	{
		console.log(error);

		res.status(500).json({
			errorCode: 0,
			errorMessage: " Lỗi hệ thống, xin lỗi quý khách về xự cố này",
			errorData: ""
		})
	}
}

module.exports = {
	signupUser: signupUser,
}