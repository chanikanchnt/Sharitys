use master
go

create database db_testing
go

create table shorttest(
    num INT,
    word varchar(10)
)
go

insert into shorttest values(0,'zero'),
(1,'one'),
(2,'two'),
(3,'three'),
(10,'ten')
go

ALTER TABLE shorttest
ADD pjstatus varchar(30);

select * from shorttest
