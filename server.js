const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const logger = require('morgan');
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const path = require('path')
const cors = require('cors');

require('dotenv').config({ path: './config/.env' });

app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000', 'https://happy-hour-hq.onrender.com']
	})
);

// Passport config
require('./config/passport')(passport);

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

// Sessions
app.use(
	session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
	})
);
app.use(express.static(path.join(__dirname, "build")))



// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/', mainRoutes);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', '/index.html'))
  });

app.listen(process.env.PORT, () => {
	console.log(`Server is running on Port ${process.env.PORT} you better catch it!`);
});
