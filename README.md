# db-with-node

Istallation
--
By using npm (the recommended way):

clone the repo and run 

npm install 

And all the dependies will be installed to your system.
-- --------------------------------------------------------------------------------------------------------------

For the data base:
--
 phpMyAdmin SQL Dump
 version 5.1.1
--
 PHP Version: 8.0.12
--
-- Database: `collagemng`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `category` set('pg','ug') NOT NULL,
  `credits` int(3) DEFAULT NULL,
  `department_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `name`, `category`, `credits`, `department_id`) VALUES
(1, 'accounts', 'ug', 3, 4),
(2, 'data structures', 'ug', 5, 1),
(3, 'mathematics-1', 'ug', 4, 1),
(4, 'mathematics-1', 'ug', 3, 5),
(5, 'mathematics-1', 'ug', 4, 2),
(6, 'java', 'ug', 2, 1),
(7, 'java', 'pg', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_id` int(20) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_id`, `name`) VALUES
(1, 'CSE'),
(2, 'ECE'),
(3, 'CE'),
(4, 'BBA'),
(5, 'BCA');

-- --------------------------------------------------------

--
-- Table structure for table `sports`
--

CREATE TABLE `sports` (
  `sport_id` int(20) NOT NULL,
  `name` varchar(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sports`
--

INSERT INTO `sports` (`sport_id`, `name`) VALUES
(1, 'basket ball'),
(2, 'football'),
(3, 'cricket ');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(10) NOT NULL,
  `first_name` varchar(11) NOT NULL,
  `last_name` varchar(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `gender` set('male','female','other') NOT NULL,
  `dob` date NOT NULL,
  `address` varchar(50) NOT NULL,
  `state` varchar(11) NOT NULL,
  `country` varchar(20) NOT NULL,
  `pincode` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `first_name`, `last_name`, `email`, `phone`, `gender`, `dob`, `address`, `state`, `country`, `pincode`) VALUES
(1, 'Subhapreet', 'Rajwans', 'subhapreetkaur@growthnatives.com', '9813333817', 'female', '1999-12-18', '#2e1 sector 37 ', 'chandigarh', 'india', '160034'),
(2, 'Kamal', 'Kashyab', 'kamal.kashyab@growthnatives.com', '9423443537', 'male', '1997-11-28', '234 abc ambala city', 'Haryana', 'india', '134500'),
(3, 'Abhijot', 'Rajwans', 'abhijot@growthnatives.com', '9816553817', 'female', '2005-10-10', '#2r1 sector 37 ', 'chandigarh', 'india', '160035'),
(4, 'Subha', 'Rajwans', 'subha@growthnatives.com', '9814535817', 'female', '2005-10-10', '#2y1 sector 37 ', 'chandigarh', 'india', '160036');

-- --------------------------------------------------------

--
-- Table structure for table `student_courses`
--

CREATE TABLE `student_courses` (
  `student_id` int(20) NOT NULL,
  `course_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_courses`
--

INSERT INTO `student_courses` (`student_id`, `course_id`) VALUES
(1, 2),
(1, 3),
(2, 3),
(2, 6),
(3, 3),
(1, 6);

-- --------------------------------------------------------

--
-- Table structure for table `student_department`
--

CREATE TABLE `student_department` (
  `student_id` int(20) NOT NULL,
  `department_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_department`
--

INSERT INTO `student_department` (`student_id`, `department_id`) VALUES
(1, 1),
(2, 5),
(4, 4),
(3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `student_sport`
--

CREATE TABLE `student_sport` (
  `student_id` int(20) NOT NULL,
  `sport_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_sport`
--

INSERT INTO `student_sport` (`student_id`, `sport_id`) VALUES
(1, 1),
(3, 1),
(3, 2),
(2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `teacher_id` int(20) NOT NULL,
  `name` varchar(21) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `gender` set('male','female','other') NOT NULL,
  `address` varchar(50) NOT NULL,
  `state` varchar(20) DEFAULT NULL,
  `country` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`teacher_id`, `name`, `email`, `phone`, `gender`, `address`, `state`, `country`) VALUES
(1, 'Dharna Sharma', 'dharna.sharma@growthnatives.com', '9812345611', 'female', '593 old-panchkula', 'Haryana', 'India'),
(2, 'Chhavinav', 'chhavinav@growthnatives.com', '982792111', 'male', '173 zirakpur', 'Punjab', 'India'),
(3, 'Ashish', 'ashish@growthnatives.com', '9278345256', 'male', '3782 sector 35', 'Chandigarh', 'India');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_courses`
--

CREATE TABLE `teacher_courses` (
  `teacher_id` int(20) NOT NULL,
  `course_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher_courses`
--

INSERT INTO `teacher_courses` (`teacher_id`, `course_id`) VALUES
(2, 2),
(1, 6),
(3, 1),
(1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `teacher_department`
--

CREATE TABLE `teacher_department` (
  `teacher_id` int(20) NOT NULL,
  `department_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher_department`
--

INSERT INTO `teacher_department` (`teacher_id`, `department_id`) VALUES
(1, 1),
(2, 4),
(3, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `sports`
--
ALTER TABLE `sports`
  ADD PRIMARY KEY (`sport_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `student_courses`
--
ALTER TABLE `student_courses`
  ADD KEY `student_id` (`student_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `student_department`
--
ALTER TABLE `student_department`
  ADD KEY `student_id` (`student_id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `student_sport`
--
ALTER TABLE `student_sport`
  ADD KEY `student_id` (`student_id`),
  ADD KEY `sport_id` (`sport_id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`teacher_id`);

--
-- Indexes for table `teacher_courses`
--
ALTER TABLE `teacher_courses`
  ADD KEY `teacher_id` (`teacher_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `teacher_department`
--
ALTER TABLE `teacher_department`
  ADD KEY `teacher_id` (`teacher_id`),
  ADD KEY `department_id` (`department_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sports`
--
ALTER TABLE `sports`
  MODIFY `sport_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `teacher_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`);

--
-- Constraints for table `student_courses`
--
ALTER TABLE `student_courses`
  ADD CONSTRAINT `student_courses_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  ADD CONSTRAINT `student_courses_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`);

--
-- Constraints for table `student_department`
--
ALTER TABLE `student_department`
  ADD CONSTRAINT `student_department_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  ADD CONSTRAINT `student_department_ibfk_2` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`);

--
-- Constraints for table `student_sport`
--
ALTER TABLE `student_sport`
  ADD CONSTRAINT `student_sport_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  ADD CONSTRAINT `student_sport_ibfk_2` FOREIGN KEY (`sport_id`) REFERENCES `sports` (`sport_id`);

--
-- Constraints for table `teacher_courses`
--
ALTER TABLE `teacher_courses`
  ADD CONSTRAINT `teacher_courses_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`),
  ADD CONSTRAINT `teacher_courses_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`);

--
-- Constraints for table `teacher_department`
--
ALTER TABLE `teacher_department`
  ADD CONSTRAINT `teacher_department_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`),
  ADD CONSTRAINT `teacher_department_ibfk_2` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`);


