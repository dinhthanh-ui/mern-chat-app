import bcrypt from "bcryptjs";
import userModel from "../models/authUserModel";

const salt = bcrypt.genSaltSync(10);

/**
 * @param {xử lý băm mật khẩu người dùng }
 */
const hashUserPassword = (userPassword) =>
{
	return new Promise(async (resolve, reject) =>
	{
		try
		{
			let hashPassword = await bcrypt.hashSync(userPassword, salt);
			resolve(hashPassword);
		}
		catch (error)
		{
			reject(error);
		}
	})
}

/**
 * @param {xử lý kiểm tra gmail và số điện thoại của người dùng có trọng databasse}
 */

const handlerCheckEmail = (userEmail) =>
{
	return new Promise(async (resolve, reject) =>
	{
		try
		{


		} catch (error)
		{
			reject(error);
		}
	})
}