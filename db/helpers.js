import mongoose from 'mongoose';

import { DB_URI } from '../config/environment.js';

export function connectToDb() {
  return mongoose.connect(DB_URI);
}

export function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect();
  }
}
