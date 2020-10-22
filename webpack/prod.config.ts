import HtmlWebpackTagsPlugin from "html-webpack-tags-plugin";
import path from "path";
import { merge } from "webpack-merge";

import common from "./common.config";
import { dependencies } from "../package.json";

export default merge(common, {
	devtool: "source-map",
	mode: "production",
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all",
				},
			},
		},
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "../dist"),
	},
	plugins: [
		new HtmlWebpackTagsPlugin({
			scripts: ([
				{ packageName: "react", variableName: "React" },
				{ packageName: "react-dom", variableName: "ReactDOM" },
			] as const).map(({ packageName, variableName }) => ({
				attributes: { crossorigin: "" },
				external: { packageName, variableName },
				path: `https://unpkg.com/${packageName}@${dependencies[packageName]}/umd/${packageName}.production.min.js`,
			})),
		}),
	],
});
