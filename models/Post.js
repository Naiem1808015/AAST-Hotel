const { model, Schema } = require('mongoose');

const postSchema = new Schema(
	{
		date: {
			type: String,
			required: true,
		},
		room: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		members:{
			type: String,
			required: true,
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
	},
	{ timestamps: true }
);
module.exports = model('post', postSchema);
