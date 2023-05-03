const path = require('path');

module.exports = {
    // ...other configurations
    resolve: {
        fallback: {
            "buffer": require.resolve("buffer/"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/")
        },
    },
    // ...other configurations
};
