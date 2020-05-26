module.exports = {
  runtimeCompiler: true,
  parallel: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          exclude: /node_modules/,
          use: [
            'vue-loader',
            {
              loader: 'markdown-to-vue-loader',
              options: {
                exportSource: true,
              },
            },
          ],
        },
      ],
    },
  },
};
