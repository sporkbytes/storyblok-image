// babel.config.js
module.exports = api => {
	const isTest = api.env('test');

	if (isTest) {
		return {
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							node: 'current',
						},
					},
				],
			],
		};
	} else {
		return {
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							browsers: ['last 2 versions', 'safari >= 7'],
						},
						modules: false,
					},
				],
			],
		};
	}
};
