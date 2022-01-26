/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : cms

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2022-01-26 14:38:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `subTitle` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '1', '1', '1', '2022-01-25 13:14:30', '1');
INSERT INTO `article` VALUES ('2', '2', '2', '2', '2022-01-26 12:12:12', '2');
INSERT INTO `article` VALUES ('3', '3', '3', '3', '2022-12-12 12:12:12', '3');
INSERT INTO `article` VALUES ('4', '4', '4', '4', '2022-12-12 12:12:12', '4');
INSERT INTO `article` VALUES ('5', '5', '5', '5', '2022-12-12 12:12:12', '5');
INSERT INTO `article` VALUES ('6', '6', '6', '6', '2022-12-12 12:12:12', '6');
INSERT INTO `article` VALUES ('7', '7', '7', '7', '2022-12-12 12:12:12', '7');
INSERT INTO `article` VALUES ('8', '8', '7', '7', '2022-12-12 12:12:12', '7');
INSERT INTO `article` VALUES ('9', '9', '7', '7', '2022-12-12 12:12:12', '7');
INSERT INTO `article` VALUES ('10', '10', '7', '7', '2022-12-12 12:12:12', '7');
INSERT INTO `article` VALUES ('11', '11', '7', '7', '2022-12-12 12:12:12', '7');
INSERT INTO `article` VALUES ('13', '测试表题', '测试副标题', 'lxxxxx', '2022-01-26 11:31:19', '<p>测试内容</p>');

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgSrc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES ('1', 'banner1.jpg');
INSERT INTO `banner` VALUES ('2', 'banner2.jpg');
INSERT INTO `banner` VALUES ('3', 'banner3.jpg');

-- ----------------------------
-- Table structure for nav
-- ----------------------------
DROP TABLE IF EXISTS `nav`;
CREATE TABLE `nav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `disable` int(11) DEFAULT NULL COMMENT '1选中0不可选中',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nav
-- ----------------------------
INSERT INTO `nav` VALUES ('1', '首页', '/home', '1', '0');
INSERT INTO `nav` VALUES ('2', '企业讯息', '/info', '0', '1');
INSERT INTO `nav` VALUES ('3', '文章列表', '/list', '0', '0');
INSERT INTO `nav` VALUES ('4', '联系我们', '/call', '0', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `player` varchar(255) DEFAULT NULL,
  `editable` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'lyc', '123456', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuadjumAuOWuuCIsInBhc3N3b3JkIjoiMTI0NTYiLCJpYXQiOjE2NDMwMzExODMsImV4cCI6MTY0MzAzNDc4M30.N0A4Byx9PdD8d64-Cz9d5ctPQoKLzQJu75yura3pxFw', 'avatar.jpg', 'vip', '1');
INSERT INTO `user` VALUES ('2', 'lx', '123456', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx4IiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2NDMwOTYzMjksImV4cCI6MTY0MzA5OTkyOX0.FRjtLUqMV5R7w3BvQra_JJA8FvNlmcRAaR64HGp8oU0', 'avatar-17e8eb0b5b8.jpg', 'vip', '1');
INSERT INTO `user` VALUES ('4', 'lxx', '123456', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx4eCIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNjQzMTY0ODQyLCJleHAiOjE2NDMxNjg0NDJ9.gRUPVJ_3Oqwp0Ld7BTCC90gMwlsQdSrxtuokfcy5NHI', 'avatar-17e9440da25.jpg', 'normal', '1');
INSERT INTO `user` VALUES ('5', 'lxxxxx', '123456', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx4eHh4eCIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNjQzMTY4Mjk4LCJleHAiOjE2NDMxNzE4OTh9.wQ9gBpkCQorlaF4SiyQjimyfqS8s08e98rlw3592ZYE', 'avatar-17e94694581.jpg', 'vip', '1');
