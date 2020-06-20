const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Succsess',
		data: [
			{
				fullName: 'Barak Ahituv',
				city: 'Jerusalem',
				email: 'barakahituve@.gl.co',
				cellPhone: '052-2222222',
				description:
					'As the founder of Ahituv Properties, and with more than 25 years of experience Barak is one of the best brokers in town. Using all his connections and active approach, with Barak on your side you are on your sure path of finding your dream apartment.',
				images: [],
				profileImage: 'images/brokers/barak.jpg',
			},
			{
				fullName: 'Tuvia Ahituv',
				city: 'Jerusalem',
				email: 'tuviaahituv@.gl.co',
				cellPhone: '054-4444444',
				description:
					'As the son of, and as a young professional who inspires others Tuvia is the go-to person. Tuvia is always following the new and upcoming real estate project ,and will always find his clients the next great deal.',
				images: [],
				profileImage: 'images/brokers/tovia2.jpg',
			},
			{
				fullName: 'Sara Feldman',
				city: 'Jerusalem',
				email: 'sarafeldman@.gl.co',
				cellPhone: '053-3333333',
				description:
					'It has been already 2 years since Sara has joined the office and what a change she has made! With her positive and kind full approach Sara always takes care of her clients. Sara will always make you feel welcome, and taken care of.',
				images: [],
				profileImage: 'images/brokers/sara2.jpg',
			},
		],
	});
});

module.exports = router;
