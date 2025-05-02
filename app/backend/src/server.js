import dotenv from 'dotenv'
import app from './app.js';

dotenv.config();

const port = process.env.APP_PORT || 3001;

const server = app.listen(port, () => console.log(
  `Server is running at: http://localhost:${port}`,
));

export default server;