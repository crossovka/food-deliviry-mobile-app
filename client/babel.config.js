// babel.config.js
module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'nativewind/babel',
			'inline-dotenv',
			[
				'babel-plugin-root-import',
				{
					root: __dirname, // Изменено, чтобы root был client/
					alias: {
						'@': './app', // Если хочешь оставить @ для app
						'@assets': './assets' // Новый alias для assets
					},
					extensions: ['.js', '.jsx', '.ts', '.tsx']
				}
			]
		]
	}
}

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: ["nativewind/babel", "inline-dotenv"]
//   };
// };
