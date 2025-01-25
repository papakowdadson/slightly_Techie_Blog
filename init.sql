SET GLOBAL validate_password.policy = LOW;
CREATE DATABASE IF NOT EXISTS blog_db;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON blog_db.* TO 'user'@'%';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;