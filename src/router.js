function router(app) {
  const index = require('./routes/indexRouter');
  const user = require('./routes/userRouter');
  const book = require('./routes/bookRouter');

  app.use('/', index);
  app.use('/users', user);
  app.use('/books', book);
}

module.exports = router