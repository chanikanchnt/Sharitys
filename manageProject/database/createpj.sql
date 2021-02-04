use master
go

create database sharitysdb
go

use sharitysdb
go

create table fundraiser(
    fdid INT IDENTITY(1,1) Primary Key NOT NULL,
    fdName VARCHAR(30) NOT NULL,
    fdSurname VARCHAR(30) NOT NULL,
    fdPhoneNo VARCHAR(10) NOT NULL,
    fdEmail VARCHAR(30) NOT NULL,
    fdAddress VARCHAR(150) NOT NULL
)
go

create table projectType(
    tyid INT IDENTITY(1,1) Primary Key NOT NULL,
    tyName VARCHAR(20) NOT NULL,
    tyDesc VARCHAR(500) NOT NULL
)
go

create table project(
    pjid INT IDENTITY(1,1) Primary Key NOT NULL,
    pjName VARCHAR(100) NOT NULL,   

    pjGoal VARCHAR(1000) NOT NULL,
    pjDesc VARCHAR(1000) NOT NULL,
    pjBenefit VARCHAR(1000) NOT NULL,

    pjBankType varchar(10) NOT NULL CHECK (pjBankType IN('scb', 'kbank', 'ktb','tmb','etc')), /* enum */ /*wait for mae which banks?*/
    pjBankNo VARCHAR(20) NOT NULL,

    pjStatus varchar(20) NOT NULL CHECK (pjStatus IN('pendingforap','fundraising','pendingforter','terminated')),
    pjStartDate DATETIME NOT NULL,
    pjEndDate DATETIME NOT NULL,
    pjAmount Float(10) NOT NULL,

    /* Check range of the possible hyperlink length again ?*/   
    pjFb  VARCHAR(50),
    pjTwt VARCHAR(50),
    pjIG  VARCHAR(50),

    /* Gift and Souvenir haven't added yet ? */

    pjOwnwerType varchar(5) NOT NULL CHECK (pjOwnwerType IN('ind', 'group', 'org')),
    pjOwnweName VARCHAR(100) NOT NULL,
    pjOwnweEmail VARCHAR(30) NOT NULL,

    recpId INT NOT NULL,
    fdid INT Foreign Key REFERENCES fundraiser(fdid) NOT NULL,
    tyid INT Foreign Key REFERENCES projectType(tyid) NOT NULL
 )
go
