var whitelist = [/\.google\.com$/,/^http:\/\/localhost:3000$/]

var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.some(domain => domain.test(origin)) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200
  }

module.exports = corsOptions