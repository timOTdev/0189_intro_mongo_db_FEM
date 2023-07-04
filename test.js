const mongoose = require('mongoose');

const connect = () => {
	return mongoose.connect('mongodb://localhost:27017/whatever');
};

const student = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			unique: true
		},
		favFoods: [{ type: String }],
		info: {
			school: {
				type: String
			},
			shoeSize: {
				type: Number
			}
		}
	},
	{ timestamps: true }
);

const Student = mongoose.model('student', student);

connect()
	.then(async connection => {
		const student = await Student.create({ firstName: 'Tim' });
		const found = await Student.find({ firstName: 'this' });
		const foundById = await Student.findById('asdfasdfasdf');
		const updated = await Student.findByIdAndUpdate('asdfads', {});
		console.log(student);
	})
	.catch(e => console.error(e));
