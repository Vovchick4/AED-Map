const BASE_URL = 'http://localhost:3000';

const SECRET_JWT_KEY_AUTH = 'defibrillator_secret';
const EXPIRE_TIME_JWT_AUTH = 60 * 60; //seconds
const SECRET_JWT_KEY_SIGN_UP = 'signup_create_secret';
const EXPIRE_TIME_JWT_SIGN_UP = 60 * 60; //seconds
const SECRET_JWT_KEY_RESET = 'reset_create_secret';
const EXPIRE_TIME_JWT_RESET = 60 * 60; //seconds

const EMAIL_USER = 'defibrillator.lviv@gmail.com';
const EMAIL_FROM = 'defibrillator.lviv@gmail.com';
const EMAIL_PASSWORD = 'Defibrillator1!';

const ADMIN_EMAIL = 'admin@admin.com';
const ADMIN_PASSWORD = 'qwe123Q!';

module.exports = {
  BASE_URL,
  EMAIL_USER,
  EMAIL_PASSWORD,
  EMAIL_FROM,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  SECRET_JWT_KEY_AUTH,
  EXPIRE_TIME_JWT_AUTH,
  SECRET_JWT_KEY_RESET,
  EXPIRE_TIME_JWT_RESET,
  SECRET_JWT_KEY_SIGN_UP,
  EXPIRE_TIME_JWT_SIGN_UP
};
