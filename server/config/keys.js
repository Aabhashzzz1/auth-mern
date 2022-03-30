require("dotenv").config();

module.exports = {
  mongoURI: `mongodb+srv://${process.env.USERNAME_db}:${process.env.PASSWORD_db}@authen.wsm7q.mongodb.net/${process.env.MONGO_db}?retryWrites=true&w=majority`,
};
