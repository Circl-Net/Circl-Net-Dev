-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema circlenet
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema new_schema1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `Users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Users` ;

CREATE TABLE IF NOT EXISTS `Users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL UNIQUE,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `id_UNIQUE` (`user_id` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `Posts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Posts` ;

CREATE TABLE IF NOT EXISTS `Posts` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  `create_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `likes` INT ZEROFILL NULL,
  `user_id` INT NOT NULL,
  `access` ENUM("Everyone", "Friends", "Circlers", "Me") NULL,
  PRIMARY KEY (`post_id`),
  INDEX `fk_Posts_Users_idx` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`post_id` ASC) VISIBLE,
  CONSTRAINT `fk_Posts_User`
    FOREIGN KEY (`user_id`)
    REFERENCES `Users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

-- -----------------------------------------------------
-- Table `Circles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Circles` ;

CREATE TABLE IF NOT EXISTS `Circles` (
  `circle_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `create_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `size` INT NULL,
  PRIMARY KEY (`circle_id`),
  UNIQUE INDEX `id_UNIQUE` (`circle_id` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `Circlers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Circlers` ;

CREATE TABLE IF NOT EXISTS `Circlers` (
  `user_id` INT NOT NULL,
  `circle_id` INT NOT NULL,
  `create_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`, `circle_id`),
  INDEX `fk_Circlers_Circles_idx` (`circle_id` ASC) VISIBLE,
  INDEX `fk_Circlers_Users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_Circlers_Users`
    FOREIGN KEY (`user_id`)
    REFERENCES `Users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Circlers_Circles`
    FOREIGN KEY (`circle_id`)
    REFERENCES `Circles` (`circle_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `Posts_in_Circles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Posts_in_Circles` ;

CREATE TABLE IF NOT EXISTS `Posts_in_Circles` (
  `post_id` INT NOT NULL,
  `circle_id` INT NOT NULL,
  PRIMARY KEY (`post_id`, `circle_id`),
  INDEX `fk_Posts_in_Circles_Circles_idx` (`circle_id` ASC) VISIBLE,
  INDEX `fk_Posts_in_Circles_Posts_idx` (`post_id` ASC) VISIBLE,
  CONSTRAINT `fk_Posts_in_Circles_Posts`
    FOREIGN KEY (`post_id`)
    REFERENCES `Posts` (`post_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Posts_in_Circles_Circles`
    FOREIGN KEY (`circle_id`)
    REFERENCES `Circles` (`circle_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `Friendships`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Friendships` ;

CREATE TABLE IF NOT EXISTS `Friendships` (
  `user_id2` INT NOT NULL,
  `user_id1` INT NOT NULL,
  `create_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id2`, `user_id1`),
  INDEX `fk_Friendships_Users2_idx` (`user_id1` ASC) INVISIBLE,
  INDEX `fk_Friendships_Users1_idx` (`user_id2` ASC) VISIBLE,
  CONSTRAINT `fk_Friendships_Users1`
    FOREIGN KEY (`user_id2`)
    REFERENCES `Users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Friendships_Users2`
    FOREIGN KEY (`user_id1`)
    REFERENCES `Users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `timestamps`
-- -----------------------------------------------------


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
