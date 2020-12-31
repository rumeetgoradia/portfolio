const path = require("path")
const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

const nextConfig = {
	webpack: (config, { dev }) => {
		config.resolve.alias["public"] = path.join(__dirname, "public")
		config.resolve.alias["images"] = path.join(__dirname, "public", "images")
		return config
	},
}

module.exports = withPlugins(
	[
		[
			optimizedImages,
			{
				/* config for next-optimized-images */
			},
		],
		[
			module,
			{
				rules: [
					{
						test: /\.(png|jpe?g|gif|svg|webp)$/i,
						use: [
							{
								loader: "optimized-images-loader",
								options: {
									// see below for available options
								},
							},
						],
					},
				],
			},
		],

		// your other plugins here
	],
	nextConfig
)
