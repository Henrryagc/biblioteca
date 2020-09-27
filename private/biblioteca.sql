-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 17-09-2020 a las 01:28:23
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `idAdministrador` int(11) NOT NULL,
  `nombres` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `dni` int(11) NOT NULL,
  `correo` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `celular` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`idAdministrador`, `nombres`, `apellidos`, `dni`, `correo`, `celular`) VALUES
(1, 'Henrry', 'Gutierrez', 75456954, 'henrry12', 123456);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `idEstudiante` int(11) NOT NULL,
  `nombres` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `celular` int(11) NOT NULL,
  `idUsuarioEstudiante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `idLibro` int(11) NOT NULL,
  `titulo` varchar(90) COLLATE utf8_spanish_ci NOT NULL,
  `autor` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `idioma` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `editorial` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `paginas` int(11) NOT NULL,
  `isbn` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `idTipoMateria` int(11) NOT NULL,
  `fechaRegistro` datetime NOT NULL DEFAULT current_timestamp(),
  `codLibro` varchar(60) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`idLibro`, `titulo`, `autor`, `idioma`, `editorial`, `paginas`, `isbn`, `idTipoMateria`, `fechaRegistro`, `codLibro`) VALUES
(5, 'El compromiso racionalista', 'Gaston Bachelard', 'Español', 'Editorial Minerva', 176, '958-23-06728', 1, '2020-08-30 00:00:00', 'BachelardGastonElCompromisoRacionalista.pdf'),
(17, 'Neutrino', 'Frank Close', 'Español', 'Budapest', 250, 'ePub', 5, '2020-08-30 00:00:00', 'NeutrinoCloseFrank.pdf'),
(28, 'Epistolario 1521-1527', 'Nicolas Maquiavelo', 'Español', 'Fondo de cultura economica', 497, '978-607-16-3211-1', 4, '2020-08-30 00:00:00', 'MaquiaveloNicolasEpistolario15121527.pdf'),
(29, 'Introduccion a la ingenieria de sistemas', 'Pilar Alexandra Moreno', 'Español', 'Editorial Universidad Avbierta y a Distancia', 131, 'ePub', 1, '2020-08-30 00:00:00', 'MorenoPilarAlexandraIntroduccionALaIngenier.pdf'),
(30, 'Algebra Lineal y Geometria I', 'Alfonso Romero Sarabia', 'Español', 'Editorial La Madrasa', 416, 'ePub', 2, '2020-08-30 00:00:00', 'AlfonsoAlgebraLinealYGeometriaI.pdf'),
(49, 'The ways of the planets', 'Martha Evans Martin', 'Ingles', 'Free Editorial', 103, 'ePub', 5, '2020-09-15 17:00:16', 'thewaysoftheplanets.pdf'),
(50, 'Historia de la Filosofia Medieval', 'Mauricio Beuchot', 'Español', 'Primera edicion electronica 2013', 578, '978-607-16-1487-2', 5, '2020-09-15 17:30:00', 'beuchotmauriciohistoriadelafil.pdf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libroRegistrado`
--

CREATE TABLE `libroRegistrado` (
  `idLibroRegistrado` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idLibro` int(11) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoMateria`
--

CREATE TABLE `tipoMateria` (
  `idTipoMateria` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `fechaRegistro` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipoMateria`
--

INSERT INTO `tipoMateria` (`idTipoMateria`, `nombre`, `fechaRegistro`) VALUES
(1, 'Filosofia', '2020-09-16 07:35:34'),
(2, 'Matematica', '2020-09-16 07:35:34'),
(3, 'Biologia', '2020-09-16 07:35:34'),
(4, 'Historia', '2020-09-16 07:35:34'),
(5, 'Fisica', '2020-09-16 07:35:35'),
(6, 'Comunicacion', '2020-09-16 07:35:35'),
(7, 'Arte', '2020-09-16 07:35:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `usuario` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `contrasena` varchar(90) COLLATE utf8_spanish_ci NOT NULL,
  `idAdministrador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `usuario`, `contrasena`, `idAdministrador`) VALUES
(1, 'henrry12', '123456', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarioEstudiante`
--

CREATE TABLE `usuarioEstudiante` (
  `idUsuarioEstudiante` int(11) NOT NULL,
  `usuario` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `contrasena` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarioEstudiante`
--

INSERT INTO `usuarioEstudiante` (`idUsuarioEstudiante`, `usuario`, `contrasena`) VALUES
(1, 'henrry', '123456');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`idAdministrador`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`idEstudiante`),
  ADD KEY `fkUsuarioEstudiante` (`idUsuarioEstudiante`);

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`idLibro`),
  ADD KEY `fk_idTipoMateria` (`idTipoMateria`);

--
-- Indices de la tabla `libroRegistrado`
--
ALTER TABLE `libroRegistrado`
  ADD PRIMARY KEY (`idLibroRegistrado`),
  ADD KEY `fk_idUsuario` (`idUsuario`),
  ADD KEY `fk_idLibro` (`idLibro`);

--
-- Indices de la tabla `tipoMateria`
--
ALTER TABLE `tipoMateria`
  ADD PRIMARY KEY (`idTipoMateria`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `fk_idAdministrador` (`idAdministrador`);

--
-- Indices de la tabla `usuarioEstudiante`
--
ALTER TABLE `usuarioEstudiante`
  ADD PRIMARY KEY (`idUsuarioEstudiante`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `idAdministrador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `idEstudiante` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
  MODIFY `idLibro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `libroRegistrado`
--
ALTER TABLE `libroRegistrado`
  MODIFY `idLibroRegistrado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipoMateria`
--
ALTER TABLE `tipoMateria`
  MODIFY `idTipoMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarioEstudiante`
--
ALTER TABLE `usuarioEstudiante`
  MODIFY `idUsuarioEstudiante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `fkUsuarioEstudiante` FOREIGN KEY (`idUsuarioEstudiante`) REFERENCES `usuarioEstudiante` (`idUsuarioEstudiante`);

--
-- Filtros para la tabla `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `fk_idTipoMateria` FOREIGN KEY (`idTipoMateria`) REFERENCES `tipoMateria` (`idTipoMateria`);

--
-- Filtros para la tabla `libroRegistrado`
--
ALTER TABLE `libroRegistrado`
  ADD CONSTRAINT `fk_idLibro` FOREIGN KEY (`idLibro`) REFERENCES `libro` (`idLibro`),
  ADD CONSTRAINT `fk_idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_idAdministrador` FOREIGN KEY (`idAdministrador`) REFERENCES `administrador` (`idAdministrador`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
