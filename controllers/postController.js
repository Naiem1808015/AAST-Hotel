const Post = require('../models/Post');
const { body, validationResult } = require('express-validator');

module.exports.createPost = async(req, res) => {
	const dateValue = req.body.date
	const roomValue = req.body.room
	const { type, name, email, id, members } = req.body;

	var query = {date: dateValue, room: roomValue}
	const checkBookingDate = await Post.find(query)
	console.log(checkBookingDate?.length)
			
	if(checkBookingDate.length === 0){
		// console.log("XXXXXXXX")
		try {
			// console.log("RESPOSE");
			const response = await Post.create({
				date:dateValue,
				room:roomValue,
				type,
				members,
				name,
				email,
				userId: id,
			});
				// console.log("RESPOSE2");
				return res.status(200).json({
					msg: 'Your room is booking successfully.',
					response,
				});
			} catch (error) {
				return res.status(500).json({msg: 'On this date this room is already booked'});
			}
		}else{
			console.log("YYYYYYYYY")
			return res.status(200).json({
				msg: 'On this date this room is already booked',
			});	
		}

}


module.exports.fetchPosts = async (req, res) => {
	const id = req.params.id;
	try {
		const response = await Post.find({ userId: id })
			.sort({ updatedAt: -1 });
		return res.status(200).json({ response: response});
	} catch (error) {
		return res.status(500).json({ errors: error, msg: error.message });
	}
};



module.exports.everyRoom = async (req, res) => {
	const roomNumber = req.params.room;
	// console.log("roomNumberBack:", roomNumber);
	try {
		const response = await Post.find({ room: roomNumber })
			.sort({ updatedAt: -1 });
		return res.status(200).json({ response: response});
	} catch (error) {
		return res.status(500).json({ errors: error, msg: error.message });
	}
};

