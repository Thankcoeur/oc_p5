const path = require('path');

const fs = require('fs');

function returnjs() {
    let max = {}
    fs.readdirSync('./src').forEach((file) => {
       
        max[file.substring(0, file.length - 3)] = path.join(__dirname, 'src', file)

    })
    
    console.log(max)
    return max

}
module.exports = {
  entry: returnjs(),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public/js'),
  },
};