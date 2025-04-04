const config = Object.freeze({
  MONGODB_URL: process.env.MONGODB_URL,
  NODE_ENV: process.envNODE_ENV,
});

function getEnv(key) {
  const value = config[key];
  if (!value) throw new Error(`Environment variable ${key} is not defined`);
  return value;
}

export { getEnv };
