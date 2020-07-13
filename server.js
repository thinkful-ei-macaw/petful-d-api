const app = require('./modules/app/app')
const port = process.env.PORT || 7000

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${ port }.`)
})

