const express = require('express')
const { setup } = require('radiks-server')

const app = express()

setup({
  mongoDBUrl: 'mongodb://localhost:27017/your-list'
}).then((RadiksController) => {
  app.use('/radiks', RadiksController)
})

const PORT = process.env.PORT || 5000;

app.listen((PORT), () => {
  console.log('listening on port ' + PORT);
});
