import mongoose from 'mongoose';
import { config, info, error } from '../config';

const NAMESPACE = 'DATABASE';

export const connectToDb = async () => {
  return await mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((x) => {
      info(NAMESPACE, `Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .catch((err) => {
      console.log(config.mongo.url);
      error(NAMESPACE, err.message);
    });
};
