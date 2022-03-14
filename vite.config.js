const { visualizer } = require("rollup-plugin-visualizer");
module.exports = {
  plugins: [visualizer()],
  build: {
    minify: false,
    outDir: "dist-vite",
  },
};
