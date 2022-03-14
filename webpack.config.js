const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");
const ROOT_DIR = path.join(__dirname, "..");
const resolvePath = (relPath) => path.join(ROOT_DIR, relPath);

const SRC_DIR = resolvePath("src");

module.exports = {
  mode: "production",
  devtool: false,
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: [SRC_DIR, "node_modules"],
    extensions: [".js", ".ts"],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: true,
      generateStatsFile: false,
    }),
    new CompressionPlugin({
      algorithm: "gzip",
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [SRC_DIR],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-typescript",
                ["@babel/preset-env", { modules: false }],
              ],
            },
          },
        ],
      },
    ],
  },
};
