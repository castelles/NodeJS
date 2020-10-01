require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'bugs_db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
