import { app } from './setup';
import { config } from 'dotenv';

config(); 

const PORT = 4000


app.listen({ port: PORT }, () => {
  console.log(`Listening on port ${PORT}`);
});
