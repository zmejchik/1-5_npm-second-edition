const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/scripts/main.js', // Ваш основной файл JS для сборки
  output: {
    path: path.resolve(__dirname, 'public/scripts'), // Путь для сохранения собранного бандла
    filename: 'bundle.js', // Имя собранного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Применять правила только к .js файлам
        exclude: /node_modules/, // Исключить node_modules из обработки
        use: {
          loader: 'babel-loader', // Использовать Babel для транспиляции JavaScript
          options: {
            presets: ['@babel/preset-env'], // Настройки Babel для ES6+
          },
        },
      },
    ],
  },
};
