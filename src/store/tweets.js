const getTweets = (max=4) => {
	const getRandomDate = () => {
		const maxDate = Date.now();
		const timestamp = Math.floor(Math.random() * maxDate);
		return new Date(timestamp);
	};

	const tweets = [];

	for (let i = 1; i <= max; i++) {
		tweets.push({
			id: 'AA-TT' + (Math.random() * 10),
			user: {
				image: 'https://via.placeholder.com/70',
				name: 'User ' + i,
				username: '@useername_' + i,
			},
			create_at: getRandomDate(),
			text: Math.floor((Math.random() * 10) + 1) >= 6.5 ? 
				"<b><a href=\"http://localhost:8080/about\">twitter-app</a></div><img src=\"https://pbs.twimg.com/profile_banners/263884490/1638993901/1080x360\">" :
				'Texto muito generico'
			,
			sequences: Math.floor((Math.random() * 10) + 1),
			actions: {
				retweets: Math.floor((Math.random() * 10000) + 1),
				comments: Math.floor((Math.random() * 10000) + 1),
				hearts: Math.floor((Math.random() * 10000) + 1),
			},
		});
	}

	return tweets;
};

export default getTweets;