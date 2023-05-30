import mongoose from 'mongoose'
import app from './app'
import config from './config'
const port = config.port || 4000
async function bootstrap() {
  try {
    await mongoose.connect(`${config.database_url}`)
    console.log(`Database is connected successfully`)
    app.listen(port, () => {
      console.log(`App is running on port ${port}`)
    })
  } catch (error) {
    console.log('Failed to connect database', error)
  }
}

bootstrap()
