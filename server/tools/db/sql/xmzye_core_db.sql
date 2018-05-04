/*
 Navicat Premium Data Transfer

 Source Server         : s_xmzy
 Source Server Type    : MariaDB
 Source Server Version : 100116
 Source Host           : 111.230.209.108:3306
 Source Schema         : xmzye_core_db

 Target Server Type    : MariaDB
 Target Server Version : 100116
 File Encoding         : 65001

 Date: 04/05/2018 11:37:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for quizUser
-- ----------------------------
DROP TABLE IF EXISTS `quizUser`;
CREATE TABLE `quizUser` (
  `quizUserId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referrerId` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quizUserInfo` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vip` tinyint(1) NOT NULL DEFAULT '0',
  `totalKeyCount` int(11) NOT NULL DEFAULT '0',
  `muted` tinyint(1) NOT NULL DEFAULT '0',
  `currentQuizTabIndex` int(11) DEFAULT NULL,
  `currentQuizTabName` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastVisitTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`quizUserId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
