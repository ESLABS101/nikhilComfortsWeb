-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 20, 2018 at 10:55 AM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ncom`
--
CREATE DATABASE `ncom` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ncom`;

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE IF NOT EXISTS `contact_us` (
  `contact_us_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `msg` text,
  `email` varchar(100) DEFAULT NULL,
  `mobile` varchar(13) DEFAULT NULL,
  `dummy1` varchar(50) DEFAULT NULL,
  `dummy2` varchar(50) DEFAULT NULL,
  `dummy3` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`contact_us_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`contact_us_id`, `name`, `msg`, `email`, `mobile`, `dummy1`, `dummy2`, `dummy3`) VALUES
(1, NULL, NULL, 'guptaparag1996@gmail.com', NULL, NULL, NULL, NULL),
(2, NULL, NULL, 'parag@equipshare.in', NULL, NULL, NULL, NULL),
(3, NULL, NULL, 'guptaparag1996@gmail.com', NULL, NULL, NULL, NULL),
(4, NULL, NULL, 'guptaparag1996@gmail.com', NULL, NULL, NULL, NULL),
(5, NULL, '       /guptaparag1996@gmail.com  /n   a     ', 'parag@gmail.com', NULL, NULL, NULL, NULL),
(6, NULL, '''<script>hello</script> world''', 'parag@gmail.com', NULL, NULL, NULL, NULL),
(7, NULL, '<script>hello</script> world', 'parag@gmail.com', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE IF NOT EXISTS `partner` (
  `partner_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `contact_number` varchar(10) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `subject` text,
  PRIMARY KEY (`partner_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `partner`
--

INSERT INTO `partner` (`partner_id`, `email`, `contact_number`, `first_name`, `last_name`, `subject`) VALUES
(1, 'gupta@gmail.com', '9584777921', 'parag', 'gupta', NULL),
(2, 'gupta@gmail.com', '9584777921', 'parag', 'gupta', 'bla bla'),
(3, 'ta@gmail.com', '9584777921', 'parag', 'gupta', 'bla bla');

-- --------------------------------------------------------

--
-- Table structure for table `quote`
--

CREATE TABLE IF NOT EXISTS `quote` (
  `quote_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`quote_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `quote`
--

INSERT INTO `quote` (`quote_id`, `email`, `description`) VALUES
(1, 'gupta@gmail.com', NULL),
(2, 'gupta@gmail.com', NULL),
(3, 'gupta@gmail.com', 'a way of doing business');
