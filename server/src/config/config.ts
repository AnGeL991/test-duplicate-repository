import dotenv from 'dotenv';
dotenv.config();

const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  socketTimeoutMS: 30000,
  keepAlive: true,
  poolSize: 50,
  autoIndex: false,
  retryWrites: false
};
const MONGODB_URI = process.env.MONGODB_URI! || '';

const MONGO = {
  options: MONGO_OPTIONS,
  url: MONGODB_URI
};
const url = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8080';

const SERVER__HOSTNAME = process.env.SERVER__HOSTNAME || 'http://localhost';
const SERVER__PORT = process.env.SERVER__PORT || 5000;
const SERVER__TOKEN_EXPIRETIME = process.env.SERVER__TOKEN_EXPIRETIME || 3600;
const SERVER__TOKEN__ISSUER = process.env.SERVER__TOKEN__ISSUER || 'coolIssuer';
const SERVER__TOKEN__SECRET = process.env.SERVER__TOKEN__SECRET || 'secretPassword';
const SERVER__TOKEN__ACTIVATION = process.env.JWT_ACTIVATION || 'activateToken';

const SERVER = {
  hostname: SERVER__HOSTNAME,
  port: SERVER__PORT,
  token: {
    expireTime: SERVER__TOKEN_EXPIRETIME,
    issuer: SERVER__TOKEN__ISSUER,
    secret: SERVER__TOKEN__SECRET,
    activation: SERVER__TOKEN__ACTIVATION
  }
};

export const config = {
  mongo: MONGO,
  server: SERVER,
  url
};
