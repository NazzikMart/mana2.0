-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Час створення: Січ 30 2024 р., 19:39
-- Версія сервера: 5.7.36
-- Версія PHP: 8.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `mana_shop`
--

-- --------------------------------------------------------

--
-- Структура таблиці `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `counter` int(11) DEFAULT NULL,
  `producer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `heading` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `model`, `category`, `counter`, `producer`, `heading`, `img`) VALUES
(1, 'Чайник', '1100.00', 'SilverCrest', 'Kettle', 1, 'Poco', 'phone', NULL),
(2, 'Телефон', '5600.00', 'SilverCrest', 'telephone', 1, 'Poco', 'phone', NULL),
(3, 'Гриль', '1100.00', 'SilverCrest', 'Grill', 1, 'Poco', 'phone', NULL),
(4, 'Мікрохвильовка', '1100.00', 'SilverCrest', 'Microwave', 1, 'Poco', 'phone', NULL),
(5, 'Пилосос', '1100.00', 'SilverCrest', 'VacuumCleaner', 1, 'Poco', 'phone', NULL),
(6, 'Термокружка', '1100.00', 'SilverCrest', 'ThermalMug', 1, 'Poco', 'phone', NULL),
(7, 'Термокружка', '1100.00', 'SilverCrest', 'ThermalMug', 1, 'Poco', 'phone', NULL),
(8, 'Термокружка', '1100.00', 'SilverCrest', 'ThermalMug', 1, 'Poco', 'phone', NULL),
(9, 'Термокружка', '1100.00', 'SilverCrest', 'ThermalMug', 1, 'Poco', 'phone', NULL),
(10, 'Термокружка', '1100.00', 'SilverCrest', 'ThermalMug', 1, 'Poco', 'phone', NULL);

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
