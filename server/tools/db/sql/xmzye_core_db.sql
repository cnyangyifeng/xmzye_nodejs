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

 Date: 26/04/2018 10:05:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for quizRecord
-- ----------------------------
DROP TABLE IF EXISTS `quizRecord`;
CREATE TABLE `quizRecord` (
  `quizUserId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quizId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quizUnlocked` tinyint(1) NOT NULL DEFAULT '1',
  `quizPlayed` tinyint(1) NOT NULL DEFAULT '0',
  `timeElapsed` int(11) NOT NULL DEFAULT '0',
  `quizSolved` tinyint(1) NOT NULL DEFAULT '0',
  `quizQuestionImageUrl` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastVisitTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`quizUserId`,`quizId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for quizUser
-- ----------------------------
DROP TABLE IF EXISTS `quizUser`;
CREATE TABLE `quizUser` (
  `quizUserId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
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
