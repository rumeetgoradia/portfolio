const path = require("path")
const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

module.exports = withPlugins([
	[
		optimizedImages,
		{
			// webpack(config) {
			// 	config.resolve.alias.images = path.join(__dirname, "images")
			// 	return config
			// },
		},
	],
	{
		webpack(config) {
			config.module.rules.push({
				test: /\.svg$/,
				issuer: {
					test: /\.(js|ts)x?$/,
				},
				use: ["@svgr/webpack"],
			})

			return config
		},
	},
	// other plugins here
])
