const path = require("path")

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: {
								removeViewBox: false,
							},
						},
					},
				},
			],
		})
		config.resolve.alias["images"] = path.join(__dirname, "public", "images")
		return config
	},
}
