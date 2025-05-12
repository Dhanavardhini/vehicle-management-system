-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2024 at 11:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vechile_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `name` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fourimage`
--

CREATE TABLE `fourimage` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fourimage`
--

INSERT INTO `fourimage` (`id`, `name`, `price`, `brand`, `file`) VALUES
(1, 'honda', '20000', 'suzuki', '../upload/67504095a7691-car1.jpg'),
(2, 'Rolesroys', '4000', 'moto', '../upload/675040d208e13-car2.jpg'),
(3, 'lambogini', '50000', 'toyoto', '../upload/675040e97f6c0-car3.jpg'),
(4, 'sumo', '6000', 'amaciter', '../upload/6750411b7306c-car4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `fourwheel`
--

CREATE TABLE `fourwheel` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `number_of_days` int(200) NOT NULL,
  `pickup_location` varchar(200) NOT NULL,
  `from_date` varchar(200) NOT NULL,
  `to_date` varchar(200) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `price` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fourwheel`
--

INSERT INTO `fourwheel` (`id`, `name`, `email`, `phone`, `number_of_days`, `pickup_location`, `from_date`, `to_date`, `status`, `price`) VALUES
(9, 'makesh', 'b@gmail.com', '9944429723', 23, 'chennai', '22/3/2024', '10/3/2024', 'pending', '1500'),
(21, 'ganesh', 'b@gmail.com', '9944429723', 23, 'chennai', '22/3/2024', '10/3/2024', 'completed', '2000'),
(22, 'ishu', 'ishu@gmail.com', '123456789', 4, 'ariyalur', '2024-03-02', '2024-03-03', 'pending', '16000'),
(23, 'bharani', 'bharani@gmail.com', '1234567890', 4, 'salem', '2024-05-03', '2024-06-04', 'pending', '80000');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(200) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `file` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `name`, `price`, `brand`, `file`) VALUES
(1, 'honda', '2000', 'hero', '../upload/675042627770d-674ea1ab8e1d2-animal.jpg'),
(2, 'pulser', '4000', 'roys', '../upload/6750427c5649f-674da372bc9e3-th.jpg'),
(3, 'bullet', '5000', 'royal enfield', '../upload/675042c0d1196-674eb89326df1-one.jpg'),
(4, 'yamaha', '5000', 'tvs', '../upload/675042e2b6b02-674ef79a94937-cars.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `twowheelerbook`
--

CREATE TABLE `twowheelerbook` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `number_of_days` int(200) NOT NULL,
  `pickup_location` varchar(200) NOT NULL,
  `from_date` varchar(200) NOT NULL,
  `to_date` varchar(200) NOT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `twowheelerbook`
--

INSERT INTO `twowheelerbook` (`id`, `name`, `email`, `phone`, `number_of_days`, `pickup_location`, `from_date`, `to_date`, `Status`, `price`) VALUES
(1, 'makesh', 'b@gmail.com', '9944429723', 23, 'chennai', '22/3/2024', '10/3/2024', 'completed', '3000'),
(3, 'ganesh', 'b@gmail.com', '9944429723', 23, 'chennai', '22/3/2024', '10/3/2024', 'completed', '3000'),
(4, 'gowri', 'gowri@gmail.com', '9159783990', 12, 'chennai', '2024-03-12', '2024-03-13', 'completed', '2000'),
(7, 'moni', 'akshaya26@gmail.com', '6787989000', 3, 'salem', '2024-04-02', '2024-05-04', 'pending', '15000'),
(8, 'swathi', 'swathi@gmail.com', '1234567890', 3, 'kumbakonam', '2024-03-02', '2024-04-03', NULL, '60000');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fourimage`
--
ALTER TABLE `fourimage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fourwheel`
--
ALTER TABLE `fourwheel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `twowheelerbook`
--
ALTER TABLE `twowheelerbook`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fourimage`
--
ALTER TABLE `fourimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fourwheel`
--
ALTER TABLE `fourwheel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `twowheelerbook`
--
ALTER TABLE `twowheelerbook`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
