-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Okt 2020 pada 06.31
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blanja`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `address`
--

CREATE TABLE `address` (
  `user_id` int(11) DEFAULT NULL,
  `save_address` varchar(255) DEFAULT NULL,
  `recipient_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city_of_subdistrict` varchar(255) DEFAULT NULL,
  `recipient_telp_number` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `address`
--

INSERT INTO `address` (`user_id`, `save_address`, `recipient_name`, `address`, `city_of_subdistrict`, `recipient_telp_number`, `postal_code`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`category_id`, `category`) VALUES
(1, 'T-Shirt'),
(2, 'Shorts'),
(3, 'Jacket'),
(4, 'Pants'),
(5, 'Shoes'),
(6, 'Cap'),
(7, 'Wristwatch'),
(8, 'Handbag'),
(9, 'Bagpack'),
(10, 'Socks'),
(11, 'Glasses'),
(12, 'Tie'),
(13, 'Dress'),
(14, 'Formal suit'),
(15, 'Accessories'),
(22, 'High Heels');

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `customer`
--

INSERT INTO `customer` (`id`, `name`, `email`, `password`, `avatar`, `phone_number`, `gender`, `dob`) VALUES
(1, 'Taufiq Widi', 'taufiq@gmail.com', '$2b$10$67sp9DLaRRk9DMloFYMOJ.CVugMVhbNCyNKp8ql.hfjnn1jwacska', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `qty` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `added_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `seller_id`, `name`, `brand`, `price`, `category_id`, `qty`, `status`, `description`, `added_at`) VALUES
(22, 1, 'adidas Men Running Nova Run Shoes', 'Adidas', '1200000', 5, '20', 'Baru', 'adidas Men Running Nova Run Shoes merupakan running shoes berbahan mesh upper didesain trendy dengan detail neat stiching, eyelate dan outsole yang nyaman saat digunakan. ', '2020-10-14 14:00:56'),
(23, 1, 'AC Milan Track Top 20/21', 'Adidas', '1000000', 3, '10', 'Baru', 'AC MILAN HOME STADIUM PREMATCH TRACK TOP 2020/21', '2020-10-14 14:02:51'),
(24, 1, 'MILLS Garuda Caps Red', 'Mills', '199000', 6, '8', 'Baru', 'MILLS \"Your Next Level Apparel\" 100 % ORIGINAL Product', '2020-10-14 14:06:32'),
(25, 1, 'MILLS Liquid Running Short Black', 'Mills', '199000', 2, '4', 'Baru', 'MILLS \"Your Next Level Apparel\" 100 % ORIGINAL Product', '2020-10-14 14:11:01'),
(26, 1, 'adidas Arsenal Home Football Jersey Atasan Sepakbola Pria', 'Adidas', '199000', 1, '4', 'Baru', 'Short sleeve t-shirt berbahan poliester hasil daur ulang yang didesain sporty dengan round neckline yang nyaman saat digunakan. Klub yang dibangun dari fondasi paling kokoh. Style Art Deco yang mencolok dari East Stand di Highbury yang ikonis menginspiras', '2020-10-14 14:21:13'),
(27, 1, 'adidas Manchester United Away Football Jersey', 'Adidas', '800000', 1, '1', 'Baru', 'Short sleeve t-shirt berbahan poliester hasil daur ulang yang didesain sporty dengan round neckline yang nyaman saat digunakan. Klub yang dibangun dari fondasi paling kokoh. Style Art Deco yang mencolok dari East Stand di Highbury yang ikonis menginspiras', '2020-10-14 14:22:26'),
(28, 1, 'adidas Men Football FEF Spanyol Home Jerseys', 'Adidas', '500000', 1, '3', 'Baru', 'adidas Men Football FEF Spanyol Home Jerseys [FR8361] merupakan short sleeve jerseys berbahan 51% polyester, 49% recycled polyester doubleknit didesain sporty dengan detail round neckline sehingga nyaman digunakan saat berolahraga.', '2020-10-14 14:24:46'),
(29, 1, 'NIKE Men Football Barcelona Breathe Stadium Jersey Home 19/20', 'Nike', '550000', 1, '22', 'Baru', 'Short sleeve jersey terbuat dari bahan polyester yang didesain sporty dengan V-neckline dan lattering printing. Ideal digunakan untuk menunjang aktivitas olahraga Anda.', '2020-10-14 14:29:44'),
(30, 1, 'Nike Women Running Legend React 2 Shield', 'Nike', '905000', 5, '7', 'Baru', 'Nike Women Running Legend React 2 Shield, shoes berbahan textile yang didesain trendy dengan neat stitching, eyelets dan outsole yang nyaman saat digunakan.', '2020-10-14 14:38:17'),
(31, 1, 'adidas Adicolor Classic Originals Bag', 'Adidas', '410000', 9, '7', 'Baru', 'Anda tahu bahwa setiap pilihan berarti. Karena itu Anda lebih memilih mengisi botol minum Anda sendiri di rumah dibandingkan minuman kemasan. Jadikan pilihan Anda berarti dengan tas ransel adidas ini. Dibuat dari material hasil daur ulang, sehingga Anda d', '2020-10-14 14:48:30'),
(32, 1, 'adidas Mid Cut Crew 3-Pairs Originals Socks', 'Adidas', '200000', 10, '7', 'Baru', 'Dulunya, kaos kaki merupakan simbol dari status sosial dan kekayaan. Dengan tiga pasang kaos kaki mid-cut dari adidas ini, Anda akan merasa layaknya kaum kelas atas. Dengan tiga pasang, Anda dapat pakai, bagikan, atau punya cadangan kaos kaki.', '2020-10-14 14:50:45'),
(33, 1, 'Tas Ortuseight Hand Bag Black - Original', 'Ortuseight', '100000', 8, '9', 'Baru', 'Tas Ortuseight Hand Bag - Original', '2020-10-14 14:55:14'),
(34, 1, 'Sneakers Running Ortuseight Harvard', 'Ortuseight', '260000', 5, '2', 'Baru', 'SNEAKERS RUNNING ORTUSEIGHT HARVAR\n100% ORIGINAL, GARANSI UANG KEMBALI', '2020-10-14 14:59:13'),
(35, 1, 'NIKE Wild Run Flex Stride Short Pant', 'Nike', '415000', 4, '5', 'Baru', ' NIKE Wild Run Flex Stride Short Pant Dijamin 100% Original short pant berbahan polyester yang didesain sporty dalam full print pattern dengan elastic waistband, side pocket, dan back zipper pocket.Dijamin Original. ', '2020-10-14 15:05:23'),
(36, 1, 'Apple Watch Series 5 40mm Aluminum Case with Sport Band Smartwatch - Silver', 'Apple', '5900000', 7, '2', 'Baru', 'Apple Watch Series 5 40mm Aluminum Case with Sport Band Smartwatch - Silver [GPS] merupakan smartwatch yang dibekali dengan sistem operasi WatchOS 6, S5 with 64-bit dual-core processor, dan W3 Apple wireless chip. Dilengkapi dengan GPS, Wi-Fi (802.11b/g/n', '2020-10-14 15:08:48'),
(37, 1, 'Nike Kacamata Pria', 'Nike', '2400000', 11, '2', 'Baru', 'Nike eyewear exudes vitality, excellence and performance, and an invitation to kick up your heels--styles that suitable for any venue and yet maintain their individuality and their quality are the main stays of the collection. Nike eyewear continues to be', '2020-10-14 15:13:32'),
(38, 1, 'VM Dasi Slim Merah - Slim Red Tie ', 'VM', '69500', 12, '8', 'Baru', 'VM Dasi Slim Merah - Slim Red Tie adalah dasi pria berbahan polykatun yang didesain elegant dalam stripes pattern sehingga cocok digunakan untuk acara formal maupun nonformal.', '2020-10-14 15:16:07'),
(39, 1, 'Logo 72006L2LL Candeza Dress Wanita - Light Blue ', 'Logo', '129000', 13, '4', 'Baru', 'Dress wanita berbahan chambray yang didesain trendy dengan front button opening dan self tie ribbon sehingga cocok digunakan untuk acara formal maupun non formal.', '2020-10-14 15:18:58'),
(40, 1, 'Nikayu Semi Formal New Dylan Style Jas Pria', 'Nikayu', '255000', 14, '4', 'Baru', 'Nikayu Semi Formal New Dylan Style Jas Pria - Black merupakan long sleeve blazer berbahan high twist yang didesain slim fit dengan notch lapel, button opening, left chest pocket, dan 2 front pockets. Cocok digunakan untuk acara formal dan semi formal Anda', '2020-10-14 15:23:26'),
(41, 1, 'Gelang Nike 2 warna', 'Nike', '9000', 15, '50', 'Baru', 'Gelang Nike Import, bahan silicone, size ukuran 19cm', '2020-10-14 15:27:23'),
(42, 1, 'Yongki Komaladi Salsa High Heels Wanita - Black ', 'Yongki Komaladi', '250000', 22, '2', 'Baru', 'Yongki Komaladi Salsa High Heels Wanita - Black merupakan high heel berbahan lax syhnthetic yang didesain casual dengan detail neat stitching, pointed toe dan outsole yang nyaman pada saat digunakan. Cocok digunakan pada acara formal dan informal. ', '2020-10-14 15:35:16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product_img`
--

CREATE TABLE `product_img` (
  `product_id` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product_img`
--

INSERT INTO `product_img` (`product_id`, `img`) VALUES
(NULL, NULL),
(NULL, NULL),
(NULL, NULL),
(NULL, NULL),
(NULL, 'image1'),
(NULL, 'image2'),
(NULL, 'image3'),
(NULL, 'image4'),
(NULL, 'image1'),
(NULL, 'image2'),
(NULL, 'image3'),
(NULL, 'image4'),
(NULL, 'image1'),
(NULL, 'image2'),
(NULL, 'image3'),
(NULL, 'image4'),
(NULL, '/images/1602683654164-img.jpg'),
(NULL, '/images/1602683654166-img.jpg'),
(NULL, '/images/1602683654167-img.jpg'),
(NULL, '/images/1602683654169-img.jpg'),
(NULL, '/images/1602683654170-img.jpg'),
(NULL, '/images/1602683720525-img.jpg'),
(NULL, '/images/1602683720526-img.jpg'),
(NULL, '/images/1602683720527-img.jpg'),
(NULL, '/images/1602683720528-img.jpg'),
(NULL, '/images/1602683720529-img.jpg'),
(22, '/images/1602684056227-img.jpg'),
(22, '/images/1602684056228-img.jpg'),
(22, '/images/1602684056229-img.jpg'),
(22, '/images/1602684056231-img.jpg'),
(22, '/images/1602684056233-img.jpg'),
(23, '/images/1602684171361-img.jpg'),
(23, '/images/1602684171362-img.jpg'),
(23, '/images/1602684171367-img.jpg'),
(24, '/images/1602684392395-img.jpg'),
(24, '/images/1602684392396-img.jpg'),
(24, '/images/1602684392397-img.jpg'),
(25, '/images/1602684661408-img.jpg'),
(25, '/images/1602684661410-img.jpg'),
(25, '/images/1602684661413-img.jpg'),
(25, '/images/1602684661415-img.jpg'),
(26, '/images/1602685273786-img.jpg'),
(26, '/images/1602685273791-img.jpg'),
(27, '/images/1602685346541-img.jpg'),
(28, '/images/1602685486925-img.jpg'),
(28, '/images/1602685486927-img.jpg'),
(28, '/images/1602685486929-img.jpg'),
(29, '/images/1602685784943-img.jpg'),
(29, '/images/1602685784944-img.jpg'),
(30, '/images/1602686297736-img.jpg'),
(30, '/images/1602686297737-img.jpg'),
(30, '/images/1602686297739-img.jpg'),
(30, '/images/1602686297742-img.jpg'),
(31, '/images/1602686910189-img.jpg'),
(31, '/images/1602686910195-img.jpg'),
(31, '/images/1602686910199-img.jpg'),
(32, '/images/1602687045034-img.jpg'),
(32, '/images/1602687045036-img.jpg'),
(33, '/images/1602687314178-img.jpg'),
(34, '/images/1602687553020-img.jpg'),
(34, '/images/1602687553023-img.jpg'),
(34, '/images/1602687553025-img.jpg'),
(34, '/images/1602687553028-img.jpg'),
(35, '/images/1602687923399-img.jpg'),
(35, '/images/1602687923401-img.jpg'),
(36, '/images/1602688128782-img.jpg'),
(36, '/images/1602688128784-img.jpg'),
(36, '/images/1602688128785-img.jpg'),
(37, '/images/1602688412749-img.jpg'),
(38, '/images/1602688567685-img.JPG'),
(39, '/images/1602688738303-img.jpg'),
(39, '/images/1602688738304-img.jpg'),
(39, '/images/1602688738307-img.jpg'),
(40, '/images/1602689005998-img.jpg'),
(41, '/images/1602689243906-img.jpg'),
(41, '/images/1602689243907-img.jpg'),
(42, '/images/1602689716662-img.jpg'),
(42, '/images/1602689716663-img.jpg'),
(42, '/images/1602689716664-img.jpg'),
(42, '/images/1602689716667-img.jpg'),
(42, '/images/1602689716668-img.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `seller`
--

CREATE TABLE `seller` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `store_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `store_desc` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `seller`
--

INSERT INTO `seller` (`id`, `name`, `email`, `phone_number`, `store_name`, `password`, `avatar`, `store_desc`) VALUES
(1, 'Bang Best', 'best@gmail.com', '0819687277777', 'Best Sport', '$2b$10$Cvfii6x8KIMU9r2Ldk6wl.q4PCEApNknKlR2N5b2oKup8cbVW/wEm', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaction`
--

CREATE TABLE `transaction` (
  `id` int(255) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transaction`
--

INSERT INTO `transaction` (`id`, `customer_id`, `seller_id`, `amount`, `payment_method`, `address`, `date`) VALUES
(123456, 1, 1, '20000', 'visa', 'your heart', '2020-10-13 17:00:00'),
(199825, 1, 1, '20000', 'visa', 'your heart', '2020-10-13 17:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `trans_pvt`
--

CREATE TABLE `trans_pvt` (
  `transaction_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `qty` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `trans_pvt`
--

INSERT INTO `trans_pvt` (`transaction_id`, `product_id`, `qty`) VALUES
(123456, NULL, 2),
(123456, NULL, 6),
(199825, NULL, 2),
(199825, NULL, 6);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `address`
--
ALTER TABLE `address`
  ADD KEY `id` (`user_id`);

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `seller_id` (`seller_id`);

--
-- Indeks untuk tabel `product_img`
--
ALTER TABLE `product_img`
  ADD KEY `id` (`product_id`);

--
-- Indeks untuk tabel `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeks untuk tabel `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `seller_id` (`seller_id`);

--
-- Indeks untuk tabel `trans_pvt`
--
ALTER TABLE `trans_pvt`
  ADD KEY `transaction_id` (`transaction_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT untuk tabel `seller`
--
ALTER TABLE `seller`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=199826;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `customer` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `product_img`
--
ALTER TABLE `product_img`
  ADD CONSTRAINT `product_img_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `trans_pvt`
--
ALTER TABLE `trans_pvt`
  ADD CONSTRAINT `trans_pvt_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transaction` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `trans_pvt_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
