module.exports = {
  apps: [{
    name: "backend",
    script: "./server.js",
    env_production: {
      NODE_ENV: "PRODUCTION",
      PORT: 8000,
      CONNECTION_STRING: "mongodb+srv://test:test@cluster0.smdii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      JWT_SECRET: "asdfaaobijadoifjwewr",
      JWT_EXPIRES_TIME: "7d",
      COOKIE_EXPIRES_TIME: 7
    },
    env_development: {
      NODE_ENV: "DEVELOPMENT",
      PORT: 8000,
      CONNECTION_STRING: "mongodb://localhost:27017/medex",
      JWT_SECRET: "asdfaaobijadoifjwewr",
      JWT_EXPIRES_TIME: "7d",
      COOKIE_EXPIRES_TIME: 7
    }
  }]
}
