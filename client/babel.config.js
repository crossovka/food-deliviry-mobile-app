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
					root: './',
					extensions: ['.js', '.jsx', '.ts', '.tsx']
				}
			]
			// Add other plugins if necessary
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