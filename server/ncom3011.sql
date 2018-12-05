-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 30, 2018 at 07:53 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(9) NOT NULL AUTO_INCREMENT,
  `status` int(1) NOT NULL DEFAULT '1',
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdby` int(9) NOT NULL DEFAULT '0',
  `adminname` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL,
  `password_token` varchar(500) NOT NULL,
  `token_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `admin_ip` varchar(255) NOT NULL,
  `mydp` varchar(250) NOT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `admin_fk0` (`createdby`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `status`, `full_name`, `email`, `date_time`, `createdby`, `adminname`, `password`, `password_token`, `token_time`, `admin_ip`, `mydp`) VALUES
(1, 1, '', '', '2018-09-04 13:35:26', 0, 'parag', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', ''),
(2, 0, 'paragdineshgupta', '', '2018-09-21 12:24:36', 0, 'gupta', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', 'parag.jpg'),
(3, 1, 'parag', '', '2018-09-22 15:30:13', 2, 'divana', '85b2ab7fc2fa0ab39c66c05eadffbad5cd3d47a6cdc761ad41b7cb84b9a4b251', '', '0000-00-00 00:00:00', '', ''),
(4, 1, 'rajesh', '', '2018-10-02 15:43:57', 1, 'raj', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE IF NOT EXISTS `blog` (
  `blog_id` int(11) NOT NULL AUTO_INCREMENT,
  `b_position` int(1) NOT NULL COMMENT '0-top 1-side',
  `b_name` varchar(255) NOT NULL,
  `b_desc` text NOT NULL,
  `b_image1` varchar(255) NOT NULL,
  `b_image2` varchar(255) NOT NULL,
  `b_image3` varchar(255) NOT NULL,
  `b_image4` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`blog_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blog_id`, `b_position`, `b_name`, `b_desc`, `b_image1`, `b_image2`, `b_image3`, `b_image4`, `status`) VALUES
(1, 1, 'test blog', 'uuuuuuuuuuuuuuuuuuuuuuuu', 'aa', 'bbbb', 'bb', 'aaa', 1);

-- --------------------------------------------------------

--
-- Table structure for table `career`
--

CREATE TABLE IF NOT EXISTS `career` (
  `career_id` int(11) NOT NULL AUTO_INCREMENT,
  `profile` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `createdby` int(11) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`career_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `career`
--

INSERT INTO `career` (`career_id`, `profile`, `description`, `createdby`, `status`) VALUES
(1, 'test career', 'careeeeeeeer', 4, 1),
(2, 'test career', 'careeeeeeeer', 4, 0);

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
-- Table structure for table `enquiry`
--

CREATE TABLE IF NOT EXISTS `enquiry` (
  `enquiry_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '0 for delete',
  PRIMARY KEY (`enquiry_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`enquiry_id`, `name`, `subject`, `description`, `status`) VALUES
(1, 'rajesh', 'jalebi kya bhav he', 'timepass', 0);

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE IF NOT EXISTS `equipment` (
  `equipment_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `rate` varchar(10) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`equipment_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `equipment`
--

INSERT INTO `equipment` (`equipment_id`, `name`, `description`, `rate`, `status`) VALUES
(1, 'testequip', 'timepass', '10000', 1);

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
