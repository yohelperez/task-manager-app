module.exports = { 
    entry: './src/app/index.js', //file its going to share
    output: {                   //where its going to put the code its going to share
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};