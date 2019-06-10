-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: techshot
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.19.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CategoriaTechshot`
--

DROP TABLE IF EXISTS `CategoriaTechshot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CategoriaTechshot` (
  `Id_Cat` varchar(100) NOT NULL,
  `Name_Cat` varchar(100) DEFAULT NULL,
  `CreatedDate` date DEFAULT NULL,
  PRIMARY KEY (`Id_Cat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CategoriaTechshot`
--

LOCK TABLES `CategoriaTechshot` WRITE;
/*!40000 ALTER TABLE `CategoriaTechshot` DISABLE KEYS */;
INSERT INTO `CategoriaTechshot` VALUES ('1','Repositorio de codigo','2019-06-08');
/*!40000 ALTER TABLE `CategoriaTechshot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Techshot`
--

DROP TABLE IF EXISTS `Techshot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Techshot` (
  `Id_Tec` varchar(100) NOT NULL,
  `Titulo_Tec` varchar(100) DEFAULT NULL,
  `Descricao_Tec` varchar(100) DEFAULT NULL,
  `Palestrante_Tec` varchar(100) DEFAULT NULL,
  `CreatedBy_Tec` varchar(100) DEFAULT NULL,
  `CreatedDate` date DEFAULT NULL,
  `IdCat_Tec` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id_Tec`),
  KEY `Techshot_User_FK` (`CreatedBy_Tec`),
  KEY `Techshot_CategoriaTechshot_FK` (`IdCat_Tec`),
  CONSTRAINT `Techshot_CategoriaTechshot_FK` FOREIGN KEY (`IdCat_Tec`) REFERENCES `CategoriaTechshot` (`Id_Cat`),
  CONSTRAINT `Techshot_User_FK` FOREIGN KEY (`CreatedBy_Tec`) REFERENCES `User` (`Id_User`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Techshot`
--

LOCK TABLES `Techshot` WRITE;
/*!40000 ALTER TABLE `Techshot` DISABLE KEYS */;
INSERT INTO `Techshot` VALUES ('4e2da370-8b27-11e9-8a2c-771fc9913198','GitLab','Repositorio de codigos','Rommel Carneiro','cd8ef620-8b25-11e9-adef-c15edb0db71b','2019-06-09','1');
/*!40000 ALTER TABLE `Techshot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TypeUser`
--

DROP TABLE IF EXISTS `TypeUser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TypeUser` (
  `Id_TypeUser` varchar(100) NOT NULL,
  `Name_TypeUser` varchar(100) DEFAULT NULL,
  `CreatedDate` date DEFAULT NULL,
  PRIMARY KEY (`Id_TypeUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TypeUser`
--

LOCK TABLES `TypeUser` WRITE;
/*!40000 ALTER TABLE `TypeUser` DISABLE KEYS */;
INSERT INTO `TypeUser` VALUES ('1','Administrador','2019-05-26'),('2','Comum','2019-05-26');
/*!40000 ALTER TABLE `TypeUser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `Id_User` varchar(100) NOT NULL,
  `Name_User` varchar(100) DEFAULT NULL,
  `Email_User` varchar(100) DEFAULT NULL,
  `Password_User` varchar(100) DEFAULT NULL,
  `Type_User` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id_User`),
  KEY `User_TypeUser_FK` (`Type_User`),
  CONSTRAINT `User_TypeUser_FK` FOREIGN KEY (`Type_User`) REFERENCES `TypeUser` (`Id_TypeUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('53349870-89e6-11e9-ae39-716427d46e6d','Eduardo Reis','edsilveira.reis@gmail.com','123','1'),('cd8ef620-8b25-11e9-adef-c15edb0db71b','Geraldo A.','geraldoA@yahoo.com.br','1','2');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Votacao`
--

DROP TABLE IF EXISTS `Votacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Votacao` (
  `Id_Vot` varchar(100) NOT NULL,
  `IdTec_Vot` varchar(100) DEFAULT NULL,
  `IdUser_Vot` varchar(100) DEFAULT NULL,
  `CreatedDate` date DEFAULT NULL,
  PRIMARY KEY (`Id_Vot`),
  KEY `Votacao_User_FK` (`IdUser_Vot`),
  KEY `Votacao_Techshot_FK` (`IdTec_Vot`),
  CONSTRAINT `Votacao_Techshot_FK` FOREIGN KEY (`IdTec_Vot`) REFERENCES `Techshot` (`Id_Tec`),
  CONSTRAINT `Votacao_User_FK` FOREIGN KEY (`IdUser_Vot`) REFERENCES `User` (`Id_User`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Votacao`
--

LOCK TABLES `Votacao` WRITE;
/*!40000 ALTER TABLE `Votacao` DISABLE KEYS */;
INSERT INTO `Votacao` VALUES ('3d132b90-8b28-11e9-be7b-0f661cbc0e9a','4e2da370-8b27-11e9-8a2c-771fc9913198','cd8ef620-8b25-11e9-adef-c15edb0db71b','2019-06-09'),('3de08db0-8b28-11e9-be7b-0f661cbc0e9a','4e2da370-8b27-11e9-8a2c-771fc9913198','cd8ef620-8b25-11e9-adef-c15edb0db71b','2019-06-09'),('cc33e810-8b27-11e9-a3a7-838108631260','4e2da370-8b27-11e9-8a2c-771fc9913198','cd8ef620-8b25-11e9-adef-c15edb0db71b','2019-06-09'),('d0ef7450-8b27-11e9-a3a7-838108631260','4e2da370-8b27-11e9-8a2c-771fc9913198','cd8ef620-8b25-11e9-adef-c15edb0db71b','2019-06-09');
/*!40000 ALTER TABLE `Votacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'techshot'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-09 23:35:30
