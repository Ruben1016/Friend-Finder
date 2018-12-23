
DROP DATABASE IF EXISTS finder_db;
CREATE DATABASE finder_db;
USE finder_db;
CREATE TABLE IF NOT EXISTS profiles (
   name VARCHAR(25),
   photo VARCHAR(255),
   scores VARCHAR(25)
);