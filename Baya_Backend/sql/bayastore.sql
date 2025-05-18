-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.4.27-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for bayastore
CREATE DATABASE IF NOT EXISTS `bayastore` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `bayastore`;

-- Dumping structure for table bayastore.category
CREATE TABLE IF NOT EXISTS `category` (
  `categoryID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`categoryID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.category: ~18 rows (approximately)
INSERT INTO `category` (`categoryID`, `name`) VALUES
	(1, 'iPhone'),
	(2, 'Honor'),
	(3, 'Vivo'),
	(4, 'Pixel'),
	(5, 'LG'),
	(6, 'Samsung'),
	(7, 'Sony'),
	(8, 'ZTE'),
	(9, 'TCL'),
	(10, 'Xiaomi'),
	(11, 'OPPO'),
	(12, 'Realme'),
	(13, 'OnePlus'),
	(14, 'Meizu'),
	(15, 'Benco'),
	(16, 'Tecno'),
	(17, 'Apple'),
	(18, 'Inoi');

-- Dumping structure for table bayastore.contact
CREATE TABLE IF NOT EXISTS `contact` (
  `contactID` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(50) NOT NULL,
  `phoneNumber` tinytext NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(50) NOT NULL,
  `userID` int(11) NOT NULL,
  PRIMARY KEY (`contactID`) USING BTREE,
  KEY `fk_contactuserforkey` (`userID`) USING BTREE,
  CONSTRAINT `fk_contactuserforkey` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.contact: ~0 rows (approximately)

-- Dumping structure for table bayastore.news
CREATE TABLE IF NOT EXISTS `news` (
  `newsID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` tinytext DEFAULT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `thumbnail` varchar(255) NOT NULL,
  `newsTypeID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  PRIMARY KEY (`newsID`) USING BTREE,
  KEY `FK_news_newstype` (`newsTypeID`) USING BTREE,
  KEY `FK_news_users` (`userID`) USING BTREE,
  CONSTRAINT `FK_news_newstype` FOREIGN KEY (`newsTypeID`) REFERENCES `newstype` (`newsTypeID`),
  CONSTRAINT `FK_news_users` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.news: ~0 rows (approximately)

-- Dumping structure for table bayastore.newstype
CREATE TABLE IF NOT EXISTS `newstype` (
  `newsTypeID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL DEFAULT '',
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`newsTypeID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.newstype: ~0 rows (approximately)

-- Dumping structure for table bayastore.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `orderID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phoneNumber` int(11) NOT NULL,
  `address` varchar(255) NOT NULL DEFAULT '',
  `paymentID` int(11) NOT NULL,
  `orderStatusID` int(11) NOT NULL,
  `totalPrice` decimal(10,2) NOT NULL,
  `createAt` date DEFAULT NULL,
  `deliveredDate` date DEFAULT NULL,
  `note` tinytext DEFAULT NULL,
  `fee` int(11) DEFAULT 0,
  `discount` int(11) DEFAULT 0,
  PRIMARY KEY (`orderID`) USING BTREE,
  KEY `UserID` (`userID`) USING BTREE,
  KEY `PaymentID` (`paymentID`) USING BTREE,
  KEY `FK_order_order_status` (`orderStatusID`) USING BTREE,
  CONSTRAINT `FK_order_order_status` FOREIGN KEY (`orderStatusID`) REFERENCES `order_status` (`orderStatusID`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.orders: ~0 rows (approximately)

-- Dumping structure for table bayastore.order_detail
CREATE TABLE IF NOT EXISTS `order_detail` (
  `orderID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `totalPrice` decimal(10,2) NOT NULL,
  PRIMARY KEY (`orderID`) USING BTREE,
  KEY `FK_order_detail_products` (`productID`) USING BTREE,
  CONSTRAINT `FK_order_detail_orders` FOREIGN KEY (`orderID`) REFERENCES `orders` (`orderID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_order_detail_products` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.order_detail: ~0 rows (approximately)

-- Dumping structure for table bayastore.order_status
CREATE TABLE IF NOT EXISTS `order_status` (
  `orderStatusID` int(11) NOT NULL,
  `orderStatusName` varchar(50) NOT NULL,
  PRIMARY KEY (`orderStatusID`) USING BTREE,
  KEY `orderStatusID` (`orderStatusID`) USING BTREE,
  KEY `orderStatusID_2` (`orderStatusID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.order_status: ~0 rows (approximately)

-- Dumping structure for table bayastore.products
CREATE TABLE IF NOT EXISTS `products` (
  `productID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `description` tinytext DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `categoryID` int(11) DEFAULT NULL,
  `quanlityStock` int(11) DEFAULT NULL,
  `quanlitySell` int(11) DEFAULT NULL,
  `createAt` datetime(6) DEFAULT NULL,
  `discountDefault` int(11) DEFAULT NULL,
  PRIMARY KEY (`productID`) USING BTREE,
  KEY `FK_products_category` (`categoryID`) USING BTREE,
  CONSTRAINT `FK_products_category` FOREIGN KEY (`categoryID`) REFERENCES `category` (`categoryID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.products: ~149 rows (approximately)
INSERT INTO `products` (`productID`, `name`, `price`, `description`, `img`, `categoryID`, `quanlityStock`, `quanlitySell`, `createAt`, `discountDefault`) VALUES
	(1, 'iPhone 16 Pro Max 256GB', 32990000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_16_pro_max_bda3030b4b.png', 1, 72, 2, '2023-07-11 01:15:55.000000', 29),
	(2, 'iPhone 16 Pro 128GB', 27490000, 'Phiên bản iPhone cao cấp với thiết kế titan và camera hàng đầu.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_16_pro_37987b6def.png', 1, 122, 2, '2023-01-07 17:41:01.000000', 20),
	(3, 'iPhone 16 Plus 128GB', 24990000, 'Điện thoại cao cấp với bút S-Pen và camera 200MP.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_16_plus_c7b3ef901b.png', 1, 6, 9, '2023-05-19 17:29:25.000000', 28),
	(4, 'Samsung Galaxy S24 FE 5G 128GB', 13990000, 'Điện thoại giá rẻ với cấu hình mạnh mẽ, phù hợp với mọi người.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samssung_galaxy_s24_fe_xanh_723e4e6443.png', 6, 186, 3, '2023-12-16 05:21:29.000000', 9),
	(5, 'Samsung Galaxy Z Fold6 5G 256GB', 36490000, 'Phiên bản iPhone tầm trung với thiết kế titan và màn hình OLED.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samsung_galaxy_z_fold6_thumb_3c94cadb15.png', 6, 37, 1, '2023-08-23 12:21:10.000000', 15),
	(6, 'iPhone 16 128GB', 21490000, 'Điện thoại thông minh giá rẻ với thiết kế bắt mắt.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_16_f27848b783.png', 1, 39, 7, '2023-07-24 11:15:40.000000', 0),
	(7, 'Xiaomi Redmi 14C 4GB 128GB', 2990000, 'Điện thoại giá rẻ nhất của Xiaomi, phù hợp cho người lớn tuổi.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/xiaomi_redmi_14c_den_1_671192109b.jpg', 10, 39, 3, '2023-05-09 00:49:01.000000', 19),
	(8, 'Honor X6b 6GB 128GB', 3590000, 'Điện thoại thông minh với camera đẹp, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/honor_x6b_xanh_3_524c482ee3.jpg', 2, 92, 6, '2023-04-03 21:47:14.000000', 16),
	(9, 'Samsung Galaxy A16 5G 8GB 128GB', 6090000, 'Điện thoại giá rẻ với màn hình lớn và pin bền.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samsung_galaxy_a16_5g_xanh_1_10d99ea2fc.jpg', 6, 49, 1, '2023-09-01 18:48:53.000000', 21),
	(10, 'Honor X7c 8GB 256GB', 4990000, 'Phiên bản Note với camera 50MP và pin trâu.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/honor_x7c_xanh_5_560007b413.jpg', 2, 143, 2, '2023-09-09 06:56:23.000000', 13),
	(11, 'Samsung Galaxy A06 4GB 128GB', 2890000, 'Điện thoại cao cấp với thiết kế sang trọng và hiệu năng vượt trội.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samsung_galaxy_a06_blue_black_1_46d3694f11.png', 6, 56, 7, '2023-02-21 10:56:44.000000', 20),
	(12, 'ZTE Blade A35 4GB 64GB', 1990000, 'Điện thoại phổ thông với thiết kế đơn giản, phù hợp với học sinh.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/zte_blade_a35_xanh_3_dd8b86a0b8.jpg', 8, 145, 1, '2023-01-12 10:00:56.000000', 3),
	(13, 'Xiaomi Poco M6 6GB 128GB', 3490000, 'Điện thoại cao cấp với công nghệ sạc nhanh 120W.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/poco_m6_cc5c059d02.png', 10, 189, 5, '2023-09-01 14:06:12.000000', 2),
	(14, 'OPPO A18 4GB 64GB', 2990000, 'Điện thoại với thiết kế mỏng nhẹ và camera AI.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_5_10_638509283036082649_OPPO-A18-thumb.jpg', 11, 29, 5, '2023-12-27 05:28:18.000000', 9),
	(15, 'OPPO Reno12 F 5G 8GB 256GB', 8690000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/oppo_reno12_f_green_800b5588d2.png', 11, 70, 4, '2023-08-03 18:54:11.000000', 6),
	(16, 'Xiaomi Poco M6 Pro 12GB 512GB', 3490000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/poco_m6_cc5c059d02.png', 10, 72, 2, '2023-03-06 12:28:27.000000', 10),
	(17, 'Xiaomi Poco M6 Pro 8GB 256GB', 6690000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/poco_m6_pro_003aba177e.png', 10, 151, 8, '2023-01-26 18:53:09.000000', 1),
	(18, 'Samsung Galaxy A35 5G 128GB', 7590000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_3_19_638464663923276145_samsung-galaxy-a35-den-png-1.png', 6, 136, 2, '2023-09-23 06:33:57.000000', 7),
	(19, 'OPPO A3 8GB 256GB', 6090000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/oppo_a3_trang_5_9d886c971d.jpg', 11, 26, 8, '2023-03-10 02:46:39.000000', 2),
	(20, 'Benco V91 Plus 6GB 128GB', 2990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/benco_v91_plus_xanh_5_1feb13010b.jpg', 15, 130, 6, '2023-08-20 22:59:27.000000', 5),
	(21, 'Realme C61 4GB 128GB', 3590000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/realme_c61_xanh_5_6390b0e884.jpg', 12, 86, 4, '2023-11-21 13:40:24.000000', 27),
	(22, 'Benco V91c 4GB 128GB', 2490000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/benco_v91c_xam_1_3bdf228d6e.jpg', 15, 40, 9, '2023-03-08 04:52:33.000000', 29),
	(23, 'OPPO Reno8 T 4G 8GB-256GB', 6290000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2023_3_27_638155148198300095_oppo-reno8-t-4g-dd.jpg', 11, 140, 6, '2023-06-20 17:35:05.000000', 4),
	(24, 'Tecno Pova 6 Neo 8GB 128GB', 3990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/tecno_pova_6_neo_den_4_5725ec6777.jpg', 16, 180, 10, '2023-04-05 02:13:31.000000', 22),
	(25, 'Honor 200 5G 12GB 256GB', 12490000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/honor_200_5g_trang_5_56db4af3b6.jpg', 2, 79, 2, '2023-09-09 04:01:15.000000', 11),
	(26, 'Honor X7b 8GB 256GB', 3990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/honor_x7b_xanh_2a9b19aba4.jpg', 2, 56, 9, '2023-10-09 08:22:03.000000', 17),
	(27, 'ZTE Blade A55 4GB 128GB', 2290000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/zte_blade_a55_den_4_f6c59d5a86.jpg', 8, 44, 10, '2023-06-07 02:47:45.000000', 25),
	(28, 'Tecno Spark Go 1 4GB 64GB', 2390000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/tecno_spark_go_1_trang_5_53c24bf742.jpg', 16, 48, 1, '2023-04-15 01:49:01.000000', 13),
	(29, 'Tecno Spark 20C 4GB 128GB', 2490000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_4_24_638495555871383963_tecno-spark-20c-dd.jpg', 16, 110, 7, '2023-07-11 09:21:36.000000', 19),
	(30, 'Xiaomi 14T Pro 12GB 512GB', 17990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/xiaomi_14t_pro_titan_gray_1_45b1866e10.png', 10, 100, 4, '2023-07-04 08:04:37.000000', 22),
	(31, 'iPhone 14 128GB', 15990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_14_48a46d1684.png', 17, 80, 2, '2023-03-03 20:03:01.000000', 29),
	(32, 'Samsung Galaxy A05s 128GB', 2790000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_6_10_638535778605131398_samsung-galaxy-a05s.png', 6, 98, 7, '2023-09-02 20:15:41.000000', 19),
	(33, 'Samsung Galaxy A55 5G 128GB', 9290000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_3_19_638464669526032000_samsung-galaxy-a55-xanh-png-1.png', 6, 52, 8, '2023-03-18 12:31:04.000000', 7),
	(34, 'Samsung Galaxy M55 5G 256GB', 8190000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samsung_galaxy_m55_den_4_d7f9674500.jpg', 6, 163, 8, '2023-12-22 07:29:10.000000', 9),
	(35, 'iPhone 15 Pro Max 256GB', 29290000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_15_pro_max_f589ed5358.png', 1, 59, 5, '2023-08-20 05:34:38.000000', 24),
	(36, 'OPPO Reno13 F 8GB 256GB', 8990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/oppo_reno13_f_5g_xam_4_40988633f5.png', 11, 4, 2, '2023-04-06 14:35:36.000000', 5),
	(37, 'Samsung Galaxy A16 4GB 128GB', 5090000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samsung_galaxy_a16_lte_green_1_f774db8fa0.png', 6, 45, 4, '2023-04-04 11:04:46.000000', 12),
	(38, 'OPPO A3 6GB 128GB', 4590000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/oppo_a3_tim_5_a81a5f4bf7.jpg', 11, 12, 3, '2023-07-15 07:10:13.000000', 15),
	(39, 'iPhone 15 Plus 128GB', 22590000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_15_plus_80a37cdce5.png', 1, 125, 5, '2023-11-19 12:31:14.000000', 11),
	(40, 'Samsung Galaxy A55 5G 128GB', 9290000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_3_19_638464669526032000_samsung-galaxy-a55-xanh-png-1.png', 6, 156, 1, '2023-03-30 13:07:17.000000', 13),
	(41, 'OPPO Reno13 F 5G 12GB 256GB', 10990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/oppo_reno13_f_5g_tim_5_858ba5c2ad.png', 11, 20, 6, '2023-01-02 09:05:12.000000', 10),
	(42, 'Xiaomi Poco M6 Pro 8GB 256GB', 5690000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/poco_m6_pro_003aba177e.png', 10, 34, 6, '2023-11-18 06:33:20.000000', 12),
	(43, 'Xiaomi Redmi Note 13 6GB 128GB', 4090000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_1_5_638400663079293145_xiaomi-redmi-note-13-xanh.png', 10, 110, 1, '2023-09-20 18:46:43.000000', 29),
	(44, 'Samsung Galaxy S24 Ultra 5G 256GB', 25490000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samsung_galaxy_s24_ultra_2f8a5ee174.png', 6, 47, 8, '2023-10-02 09:47:39.000000', 21),
	(45, 'Realme C60 4GB-64GB', 2790000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_2_23_638442955485720002_realme-c60-xanh-4.jpg', 12, 105, 4, '2023-10-15 17:04:59.000000', 18),
	(46, 'TCL 503 3GB-64GB', 1890000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/tcl_503_gray_1_04327edabf.png', 9, 182, 5, '2023-03-14 20:25:47.000000', 29),
	(47, 'Samsung Galaxy Z Flip5 5G 256GB', 15990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_3_28_638472353992099331_samsung-galaxy-zflip-5-xanh-ai.jpg', 6, 197, 5, '2023-08-31 18:25:04.000000', 29),
	(48, 'iPhone 15 128GB', 18990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_15_a9308b6994.png', 17, 36, 7, '2023-11-05 22:04:24.000000', 28),
	(49, 'Inoi A34 12GB (3+9GB) 128GB', 1990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/inoi_a34_den_4_be08f2aa0a.jpg', 18, 189, 3, '2023-01-24 13:37:56.000000', 26),
	(50, 'Samsung Galaxy A25 5G 128GB', 5990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2023_12_11_638378882923497132_samsung-galaxy-a25-5g-den-1.jpg', 6, 19, 4, '2023-08-23 16:00:58.000000', 26),
	(51, 'OPPO A58 8GB 128GB', 4990000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_6_25_638549405401920070_oppo-a58-thumb.jpg', 11, 182, 10, '2023-05-30 01:07:57.000000', 29),
	(52, 'Realme 13+ 5G 8GB 256GB', 9490000, '', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/realme_13_plus_5g_tim_5_4ed930bfe7.png', 12, 53, 4, '2023-01-03 21:22:33.000000', 4),
	(53, 'Samsung Galaxy S24 Plus 5G 256GB', 20990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samsung_galaxy_s24_plus_9c167349d6.png', 6, 118, 2, '2023-06-08 11:56:47.000000', 26),
	(54, 'Xiaomi Redmi A3 4GB 128GB', 2490000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_3_11_638457544497489646_xiaomi-redmi-a3-xanh%20(1).jpg', 10, 33, 6, '2023-03-10 10:35:56.000000', 28),
	(55, 'Xiaomi POCO X6 5G 12GB-256GB', 7790000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/00909923_poco_x6_blue_5e570f66db.png', 10, 8, 6, '2023-08-25 21:51:58.000000', 1),
	(56, 'Realme C61 6GB 128GB', 3990000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/realme_c61_xanh_5_6390b0e884.jpg', 12, 140, 9, '2023-08-13 08:04:00.000000', 14),
	(57, 'OPPO Reno11 F 5G 8GB-256GB', 7990000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_4_22_638493832157161657_oppo-reno11-f-green-1.png', 11, 77, 6, '2023-11-03 04:28:18.000000', 6),
	(58, 'iPhone 11 64GB', 8990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_11_3d0cd738fd.png', 1, 163, 3, '2023-06-01 12:21:48.000000', 21),
	(59, 'Samsung Galaxy A15 128GB', 4490000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2023_12_11_638379104714831641_samsung-galaxy-a15-xanh-1.jpg', 6, 186, 5, '2023-05-01 02:39:34.000000', 24),
	(60, 'OPPO Reno12 5G 12GB 256GB', 11990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/oppo_reno_12_trang_d776379731.jpg', 11, 35, 7, '2023-08-31 22:01:40.000000', 16),
	(61, 'Xiaomi 14T Pro 12GB 1TB', 17490000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/xiaomi_14t_pro_blue_1_5f61c0cb50.png', 10, 60, 7, '2023-08-05 05:10:37.000000', 22),
	(62, 'OPPO Find X8 5G 16GB 512GB', 22990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/oppo_find_x8_space_black_1_6a9c3746b3.png', 11, 195, 1, '2023-04-19 20:06:55.000000', 3),
	(63, 'Samsung Galaxy Z Flip4 5G 128GB', 9990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samsung_galaxy_z_flip4_567aa5d37e.jpg', 6, 195, 4, '2023-04-20 23:35:55.000000', 10),
	(64, 'Vivo Y03 4GB 64GB', 2990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_3_20_638465432003015733_vivo-y03-xanh-4.jpg', 3, 187, 7, '2023-01-07 03:20:08.000000', 9),
	(65, 'Inoi A54 12GB (4+8GB) 256GB', 2790000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/inoi_a54_tim_5_3f8dc11817.jpg","1"\r\n"67","OPPO Find N3 Flip 5G 12GB 256GB","OPPO","17490000","30",,"2024","https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2023_11_7_63834953635026', 18, 150, 2, '2023-08-23 18:59:33.000000', 18),
	(66, 'OPPO Find N3 Flip 5G 12GB 256GB', 17490000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2023_11_7_638349536350266653_oppo-find-n3-5g-vang-8.jpg', 11, 189, 1, '2023-01-12 18:50:20.000000', 3),
	(67, 'Honor 90 5G 12GB 256GB', 8990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/honor_90_512gb_bac_4_2f3e21d020.jpg', 2, 94, 5, '2023-10-30 19:00:33.000000', 21),
	(68, 'Samsung Galaxy S22 5G 128GB', 11990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:qualityhttps://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samsung_galaxy_s22_fac476f60b.png","1"\r\n"70","Samsung Galaxy S23 5G 256GB","Samsung","14990000","20",,"2023","https://cdn2.fptshop.com.vn', 6, 102, 3, '2023-06-22 23:37:23.000000', 5),
	(69, 'Samsung Galaxy S23 5G 256GB', 14990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/samsung_galaxy_s23_591dfc2c85.png', 6, 29, 1, '2023-07-04 13:45:33.000000', 25),
	(70, 'iPhone 15 Pro 256GB', 28390000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_15_pro_thumb_0900bfe015.png', 1, 109, 1, '2023-02-13 11:41:19.000000', 20),
	(71, 'TECNO POVA 6 8GB-256GB', 5690000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/tecno_pova_6_green_45a85635c5.png', 16, 24, 8, '2023-01-30 22:43:59.000000', 13),
	(72, 'Realme Note 60 4GB 64GB', 3090000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/realme_note_60_xanh_4_1e436a334b.jpg', 12, 193, 4, '2023-06-29 14:43:55.000000', 8),
	(73, 'OPPO A17k 3GB-64GB', 2690000, 'Điện thoại thông minh với thiết kế thời thượng, hiệu năng ổn định.', 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2022_12_20_638071502453762468_oppo-a17k-dd.jpg', 11, 93, 8, '2023-08-06 03:18:35.000000', 1),
	(74, 'Samsung Galaxy A04s', 2990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2023_5_23_638204394272841272_samsung-galaxy-a04s-dd.jpg', 6, 87, 6, '2023-11-26 02:17:58.000000', 12),
	(75, 'OPPO A78 8GB-256GB', 6490000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2023_7_5_638241536485031136_oppo-a78-den-dd.jpg', 11, 156, 7, '2023-10-10 13:54:14.000000', 28),
	(76, 'Samsung Galaxy S23 FE 5G 128GB', 9890000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_3_28_638472366121294617_samsung-galaxy-s23--fe-den-AI.jpg', 6, 117, 5, '2023-07-30 03:28:45.000000', 15),
	(77, 'Samsung Galaxy A05 128GB', 2790000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2023_10_4_638320083060239206_samsung-galaxy-a05-xanh-3.jpg', 6, 116, 2, '2023-12-30 12:58:15.000000', 19),
	(78, 'OPPO A17 4GB-64GB', 2990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2022_12_20_638071513576393682_oppo-a17-dd.jpg', 11, 29, 7, '2023-09-19 23:08:09.000000', 20),
	(79, 'iPhone 14 Plus 128GB', 19690000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/iphone_14_plus_e0b62eddcf.png', 1, 196, 10, '2023-09-02 10:50:33.000000', 15),
	(80, 'Samsung Galaxy A23 5G', 4490000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_3_4_638451444037915753_samsung-galaxy-a23-5g-dd.jpg', 6, 72, 1, '2023-10-13 04:22:34.000000', 4),
	(81, 'Xiaomi Redmi Note 14 6GB 128GB', 4990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/256x0/filters:quality(100)/xiaomi_redmi_note_14_pro_plus_1_b559d13982.jpg', 10, 84, 7, '2023-07-27 07:03:51.000000', 2),
	(82, 'Samsung Galaxy A05 128GB', 2790000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2023_10_4_638320083060239206_samsung-galaxy-a05-xanh-3.jpg', 6, 4, 2, '2023-10-07 22:49:57.000000', 1),
	(83, 'Xiaomi Redmi Note 14 Pro Plus 5G 8GB 256GB', 10990000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/256x0/filters:quality(100)/xiaomi_redmi_note_14_pro_plus_1_b559d13982.jpg', 10, 166, 9, '2023-06-16 10:14:40.000000', 28),
	(84, 'Tecno Spark Go 2024 4GB 64GB', 2090000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_4_24_638495503532379537_tecno-spark-go-trang-4.jpg', 16, 16, 7, '2023-10-07 13:09:06.000000', 18),
	(85, 'realme C51 4GB-128GB', 2890000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2023_8_23_638283976760946791_realme-c51-dd.jpg', 12, 183, 7, '2023-06-11 13:40:51.000000', 5),
	(86, 'Tecno Camon 30 8GB-256GB', 5690000, NULL, 'https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/2024_5_23_638520614162799377_tecno-camon-30-dd.jpg', 16, 68, 3, '2023-07-10 21:34:15.000000', 2),
	(87, 'Vivo V40 5G 12GB/256GB', 12990000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/331985/vivo-v40-5g-cam-hong-thumb-600x600.jpg', 3, 191, 4, '2023-12-05 22:43:08.000000', 28),
	(88, 'Vivo V40 Lite 8GB/256GB', 8490000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/329959/vivo-v40-lite-bac-thumb-600x600.jpg', 3, 151, 1, '2023-12-12 21:31:19.000000', 11),
	(89, 'Vivo Y100', 7690000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/302197/vivo-y100-xanh-thumb-1-600x600.jpg', 3, 181, 3, '2023-08-23 12:26:53.000000', 5),
	(90, 'Vivo Y03', 3290000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/322996/vivo-y03-xanh-thumb-1-600x600.jpg', 3, 103, 4, '2023-12-01 05:27:05.000000', 0),
	(91, 'Vivo Y28', 5790000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg', 3, 167, 9, '2023-05-22 06:14:39.000000', 26),
	(92, 'OnePlus Nord CE 3 Lite', 5690000, NULL, 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/e/d/edobfefy.jpg', 13, 128, 1, '2023-02-19 21:34:46.000000', 12),
	(93, 'OnePlus Nord 3 5G 16GB 256GB', 11950000, NULL, 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/n/oneplus-nord-3.png', 13, 137, 10, '2023-02-02 17:48:50.000000', 14),
	(94, 'Google Pixel 8 Pro', 16299000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/10_2023/thumbs/(600x600)_crop_google-pixel-8-pro-800.jpg', 4, 99, 3, '2023-06-13 00:15:03.000000', 3),
	(95, 'Google Pixel 8', 12690000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/10_2023/thumbs/(600x600)_crop_google-pixel-8-xtmobile_1.png', 4, 83, 5, '2023-09-17 12:26:31.000000', 2),
	(96, 'Google Pixel 6 Pro 5G (12GB|128GB)', 5499000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/12_2022/thumbs/(600x600)_crop_google-pixel-6a-6gb-128gb-likenew.jpg', 4, 119, 7, '2023-06-18 18:08:24.000000', 5),
	(97, 'Google Pixel 6a (6GB|128GB)', 4199000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/12_2022/thumbs/(600x600)_crop_google-pixel-6a-6gb-128gb-likenew.jpg', 4, 144, 10, '2023-05-24 16:41:09.000000', 16),
	(98, 'Vivo Y19s', 4290000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/331200/vivo-y19s-bac-thumb-600x600.jpg', 3, 164, 7, '2023-04-19 09:46:19.000000', 7),
	(99, 'Vivo V30e 5G', 10490000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/325136/vivo-v30e-nau-thumb-1-600x600.jpg', 3, 186, 3, '2023-02-21 11:29:44.000000', 19),
	(100, 'Vivo Y18', 3990000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/327254/vivo-y18-nau-thumb-600x600.jpg', 3, 96, 4, '2023-05-18 00:28:01.000000', 7),
	(101, 'Vivo V30 5G 12GB/512GB', 13990000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/319214/vivo-v30-5g-xanh-thumb-600x600.jpg', 3, 53, 3, '2023-12-19 18:24:56.000000', 29),
	(102, 'Google Pixel 9 Pro XL (16GB|128GB)', 23999000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/06_2024/thumbs/(600x600)_crop_google-pixel-9-pro-xtmobile.jpg', 4, 176, 2, '2023-12-10 09:41:37.000000', 3),
	(103, 'Google Pixel 9 (12GB|256GB)', 212999000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/06_2024/thumbs/(600x600)_crop_Google-pixel-9-xtmobile_1.jpg', 4, 119, 1, '2023-03-13 18:26:22.000000', 18),
	(104, 'Google Pixel 9 Pro XL (16GB|512GB)', 30499000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/06_2024/thumbs/(600x600)_crop_google-pixel-9-pro-xl-xtmobile.jpg', 4, 66, 9, '2023-04-03 23:06:29.000000', 23),
	(105, 'LG Velvet 5G (8GB|128GB) G900EM', 3599000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_lg-velvet_1.jpg', 5, 173, 2, '2023-01-20 09:06:02.000000', 3),
	(106, 'Google Pixel 7A 5G (8GB|128GB)', 6299000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/06_2024/thumbs/(600x600)_crop_Google-pixel-7-pro-xtmobile.jpg', 4, 67, 10, '2023-09-26 12:56:23.000000', 3),
	(107, 'Google Pixel 8a (8GB|128GB)', 9499000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/06_2024/thumbs/(600x600)_crop_Google-pixel-8a-8gb-128gb-cu-99-xtmobile.jpg', 4, 13, 6, '2023-06-28 19:57:03.000000', 9),
	(108, 'LG Velvet 5G (8GB|128GB) G900EM', 3899000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_lg-velvet_1.jpg', 5, 66, 10, '2023-09-08 22:36:34.000000', 4),
	(109, 'LG V60 ThinQ 5G (8GB|128GB)', 3599000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/01_2023/thumbs/(600x600)_crop_lgv60_1.jpg', 5, 91, 9, '2023-08-25 10:01:21.000000', 24),
	(110, 'LG Wing 5G (8GB|256GB)', 5599000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/06_2024/thumbs/(600x600)_crop_Lg-wing-5g-8gb-256gb-nobox-xtmobile.jpg', 5, 8, 5, '2023-11-09 21:45:56.000000', 26),
	(111, 'Sony Xperia 5 (6GB|64GB) J9210-J8210', 2799000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/05_2022/thumbs/(600x600)_crop_sony-xperia-5-nhat-cu-xtmobile.jpg', 7, 68, 6, '2023-12-20 03:02:00.000000', 13),
	(112, 'Sony Xperia 1 (6GB|64GB) J8110, J8170', 3499000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_sony-xperia-1.jpg', 7, 119, 5, '2023-09-22 05:44:50.000000', 16),
	(113, 'Sony Xperia 5 Mark 3 (8GB|128GB)', 4399000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/01_2024/thumbs/(600x600)_crop_sony-xperia-5-mark-3-8gb-128gb-ban-my-cu-99-xtmobile.jpg', 7, 188, 3, '2023-01-10 09:53:51.000000', 10),
	(114, 'Sony Xperia 1 Mark 3 (12GB|256GB)', 6699000, NULL, 'https://cdn.xtmobile.vn/vnt_upload/product/01_2024/thumbs/(600x600)_crop_sony-xperia-1-mark-3-12gb-256gb-nhat-cu.jpg', 7, 184, 3, '2023-12-25 16:19:35.000000', 5),
	(115, 'iPhone 12', 11590000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg', 1, 156, 6, '2023-06-14 05:07:38.000000', 25),
	(116, 'iPhone 11', 8990000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-den-600x600.jpg', 1, 28, 8, '2023-09-19 22:28:49.000000', 20),
	(117, 'iPhone 13', 13290000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-midnight-2-600x600.jpg', 1, 72, 1, '2023-07-15 20:58:59.000000', 27),
	(118, 'HONOR Magic V3 5G 12GB/512GB', 39990000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/332255/honor-magic-v3-green-thumb-600x600.jpg', 2, 74, 2, '2023-10-05 04:21:30.000000', 14),
	(119, 'HONOR X6b', 369000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/327258/honor-x6b-purple-thumb-600x600.jpg', 2, 154, 5, '2023-08-17 13:57:36.000000', 21),
	(120, 'HONOR 200 5G', 12490000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/329133/honor-200-black-thumb-600x600.jpg', 2, 66, 7, '2023-12-28 16:39:35.000000', 11),
	(121, 'HONOR X5b series', 2190000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/333834/honor-x5b-xanh-thumb-600x600.jpg', 2, 94, 3, '2023-07-03 10:23:41.000000', 16),
	(122, 'HONOR X5 Plus 4GB/64GB', 2090000, NULL, 'https://cdn.tgdd.vn/Products/Images/42/313306/honor-x5-plus-xanh-thumb-600x600.jpg', 2, 71, 5, '2023-08-28 23:33:41.000000', 20),
	(123, 'TCL 40 NXTPAPER 8GB 256GB', 3990000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/TCL%2040%20NXTPAPER%20T612B%208256GB.jpeg', 9, 74, 3, '2023-12-10 18:06:56.000000', 22),
	(124, 'TCL 40SE 6GB 256GB', 3490000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/TCL-40-SE-pur1.jpg', 9, 156, 10, '2023-12-15 12:08:47.000000', 19),
	(125, 'TCL 40SE 4GB 128GB', 3390000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/TCL-40-SE-gry1.jpg', 9, 158, 9, '2023-09-01 19:44:29.000000', 0),
	(126, 'ĐTDĐ TCL 406S (4+64GB)', 1990000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/TCL-406S-ble1.jpg', 9, 121, 5, '2023-02-09 01:46:14.000000', 3),
	(127, 'TCL 505 4GB 128GB', 2690000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/TCL-505-Ble1.jpg', 9, 130, 10, '2023-01-17 23:58:04.000000', 14),
	(128, 'ZTE Nubia V60 Design 6GB 256GB', 3090000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/V60.Ble1965095797.jpg', 8, 89, 4, '2023-11-11 07:27:22.000000', 3),
	(129, 'Zte Blade A55 4GB 64GB', 2090000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/ZTE-A55-BLK.jpg', 8, 51, 7, '2023-12-20 21:57:30.000000', 2),
	(130, 'OPPO Find N3 16GB 256GB', 44990000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/Find-N3-blk1.jpg', 11, 192, 1, '2023-12-09 22:20:31.000000', 5),
	(131, 'OPPO A18 4GB 128GB', 3290000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/OPPO-A18-ble1.jpg', 11, 192, 9, '2023-11-02 09:34:06.000000', 21),
	(132, 'OPPO A58 8GB 128GB', 4990000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/OPPO-A58-blk1.jpg', 11, 186, 1, '2023-06-24 04:43:12.000000', 1),
	(133, 'OPPO Find X8', 22990000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/Find-X8.UI.Blk1.jpg', 11, 150, 10, '2023-07-19 03:34:03.000000', 2),
	(134, 'realme 11 Pro 5G 8GB 256GB', 8990000, NULL, 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/Realme-11-Pro-grn1.jpg', 12, 193, 6, '2023-02-06 01:18:10.000000', 8),
	(135, 'OnePlus 13 5G (Snapdragon 8 Elite)', 16450000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/10/w250/oneplus-13-xanh.jpg.webp', 13, 115, 10, '2023-12-21 16:38:55.000000', 2),
	(136, 'OnePlus Ace (Dimensity 8100-Max, sạc 150W)', 5950000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2022/04/w250/oneplus-ace-den-1.jpg.webp', 13, 196, 3, '2023-07-22 16:35:50.000000', 19),
	(137, 'OnePlus Nord CE 4 Lite 5G (Màn AMOLED - Sạc 80W)', 6590000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/06/w250/oneplus-nord-ce-4-lite-5g-xanh-duong.jpg.webp', 13, 33, 3, '2023-10-17 21:30:38.000000', 28),
	(138, 'OnePlus Nord N30 5G (Snapdragon 695 5G)', 6950000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2023/06/w250/oneplus-nord-n30.jpg.webp', 13, 179, 6, '2023-02-06 19:19:44.000000', 25),
	(139, 'OnePlus Ace 3 5G (Snapdragon 8 Gen 2)', 8990000, NULL, 'ages/2024/01/w250/oneplus-ace-3-aston-gold.jpg.webp', 13, 193, 8, '2023-09-24 05:39:15.000000', 11),
	(140, 'OnePlus Ace 5s (Dimensity 9300 Plus)', 9950000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/12/w250/oneplus-ace-5s-minh-hoa-1-jp.jpg.webp', 13, 166, 7, '2023-03-07 05:04:37.000000', 15),
	(141, 'OnePlus Nord 4 5G (Snapdragon 7+ Gen 3)', 9950000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/07/w250/oneplus-nord-4-5g-bac.jpg.webp', 13, 142, 1, '2023-07-09 23:13:04.000000', 18),
	(142, 'OnePlus 11R (Snapdragon 8+ Gen 1)', 11050000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2023/01/w250/oneplus-11r-snapdragon-8-plus-gen-1-minh-hoa-den.jpg.webp', 13, 13, 5, '2023-04-11 11:26:56.000000', 16),
	(143, 'OnePlus Ace 3 Pro 5G (Snapdragon 8 Gen 3)', 11450000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/06/w250/oneplus-ace-3-pro-5g-trang.jpg.webp', 13, 37, 1, '2023-07-23 08:34:03.000000', 28),
	(144, 'OnePlus 12R 5G (Snapdragon 8 Gen 2)', 11450000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/01/w250/oneplus-12r-xanh.jpg.webp', 13, 147, 1, '2023-02-10 11:44:35.000000', 0),
	(145, 'OnePlus Nord 3 5G (Chính hãng - Dimensity 9000)', 11590000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2023/07/w250/oneplus-nord-3-xanh.jpg.webp', 13, 21, 8, '2023-02-10 02:00:44.000000', 8),
	(146, 'Meizu 21 Note 5G', 9150000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/05/w250/meizu-21-note-den.jpg.webp', 14, 65, 8, '2023-02-02 04:32:49.000000', 9),
	(147, 'Meizu 20 5G (Snapdragon 8 Gen 2)', 10250000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2023/04/w250/meizu-20-hong.jpg.webp', 14, 61, 7, '2023-09-07 20:16:49.000000', 21),
	(148, 'Meizu 20 Classic 5G (RAM 16GB)', 10450000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2023/10/w250/meizu-20-classic-xam.jpg.webp', 14, 108, 10, '2023-03-06 08:24:21.000000', 20),
	(149, 'Meizu 21 5G (Snapdragon 8 Gen 3)', 11750000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2023/11/w250/meizu-21-tim.jpg.webp', 14, 159, 9, '2023-03-22 01:11:13.000000', 7);

-- Dumping structure for table bayastore.product_reviews
CREATE TABLE IF NOT EXISTS `product_reviews` (
  `reviewID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `productID` int(11) DEFAULT NULL,
  `rating` int(11) NOT NULL,
  `comment` tinytext NOT NULL,
  `phoneNumber` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fullname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`reviewID`) USING BTREE,
  KEY `fk_productID` (`productID`) USING BTREE,
  CONSTRAINT `FK_product_reviews_products` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.product_reviews: ~0 rows (approximately)

-- Dumping structure for table bayastore.promotions
CREATE TABLE IF NOT EXISTS `promotions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT '',
  `description` tinytext DEFAULT NULL,
  `discountValue` decimal(10,2) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.promotions: ~0 rows (approximately)

-- Dumping structure for table bayastore.promotion_products
CREATE TABLE IF NOT EXISTS `promotion_products` (
  `id` int(11) NOT NULL,
  `promotionID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `promotionID` (`promotionID`) USING BTREE,
  KEY `productID` (`productID`) USING BTREE,
  CONSTRAINT `FK__promotions` FOREIGN KEY (`promotionID`) REFERENCES `promotions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_promotion_products_products` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table bayastore.promotion_products: ~0 rows (approximately)

-- Dumping structure for table bayastore.role
CREATE TABLE IF NOT EXISTS `role` (
  `roleID` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`roleID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `role` (`roleID`, `name`, `description`)
VALUES (1, 'Admin', 'Quản trị viên hệ thống');

INSERT INTO `role` (`roleID`, `name`, `description`)
VALUES (2, 'User', 'Người dùng thông thường');

INSERT INTO `role` (`roleID`, `name`, `description`)
VALUES (3, 'Staff', 'Nhân viên quản lý');

-- Dumping data for table bayastore.role: ~0 rows (approximately)

-- Dumping structure for table bayastore.users
CREATE TABLE IF NOT EXISTS `users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `phoneNumber` int(11) DEFAULT NULL,
  `roleID` int(11) NOT NULL DEFAULT 1,
  `createAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`userID`) USING BTREE,
  KEY `FK_user_role` (`roleID`) USING BTREE,
  KEY `userID` (`userID`) USING BTREE,
  KEY `userID_2` (`userID`) USING BTREE,
  KEY `userID_3` (`userID`) USING BTREE,
  CONSTRAINT `FK_user_role` FOREIGN KEY (`roleID`) REFERENCES `role` (`roleID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;
INSERT INTO `users` (`fullName`, `email`, `password`, `phoneNumber`, `roleID`, `createAt`) VALUES
('Nguyen Van A', 'a.nguyen@gmail.com', 'password1', 912345678, 1, NOW()),
('Tran Thi B', 'b.tran@gmail.com', 'password2', 912345679, 2, NOW()),
('Le Van C', 'c.le@gmail.com', 'password3', 912345680, 1, NOW()),
('Ket Lieu Di', 'd.pham@gmail.com', 'password4', 912345681, 3, NOW()),
('Bay Cho Siu', 'e.hoang@gmail.com', 'password5', 912345682, 2, NOW()),
('Ruoi Bau', 'f.bui@gmail.com', 'password6', 912345683, 1, NOW()),
('Nguoi Ganh Team', 'g.do@gmail.com', 'password7', 912345684, 1, NOW()),
 ('Dang Van Tran', 'h.dang@gmail.com', 'password8', 912345685, 2, NOW()),
('Ngo Thua Au', 'i.ngo@gmail.com', 'password9', 912345686, 3, NOW()),
('Vu Thi Tuyet Linh', 'j.vu@gmail.com', 'password10', 912345687, 1, NOW()),
('Nguyen Cao Long Thanh', 'k.phan@gmail.com', 'password11', 912345688, 2, NOW()),
('Nguyen Minh Nhut', 'l.cao@gmail.com', 'password12', 912345689, 1, NOW()),
('To Hoai Vu', 'm.mai@gmail.com', 'password13', 912345690, 3, NOW()),
('Tran Chi Trung', 'tt@gmail.com', 'password14', 912345691, 1, NOW()),
('Quach Thi Man', 'canMan@gmail.com', 'password15', 912345692, 2, NOW());


-- Dumping data for table bayastore.users: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
