create database eCommerce
use eCommerce
drop database eCommerce
create  table dbo.Users(
	UserId int primary key identity(1,1),
	Name varchar(50),
	LastName varchar(50),
	Email varchar(50),
	UserName varchar(50),
	Password varchar(50),
	Address varchar(50),
	City varchar(50),
	Province varchar(50),
	Country varchar(50),
	PostalCode varchar(50),
	DNI bigint,
	Birtdate date
)

create table dbo.Products(
	ProductId int primary key identity(1,1),
	ProductCode int,
	ProductName varchar(50),
	ProductDescription varchar(200),		
	ProductPrice float,
	ProductImage varchar(50),
	ProductStock int
)

create table dbo.Charts(
	ChartId int primary key identity(1,1),    
    TotalChart float,
    DeliveryCost float
)

create table dbo.ChartLines(
	ChartLineId int primary key identity(1,1),
	ChartId int not null,
	ProductName varchar(50),
    ProductPrice float,
    Quantity int,
    TotalLine float,
	CONSTRAINT FK_Chart
		FOREIGN KEY (ChartId) 
		REFERENCES Charts(ChartId)
)

create table dbo.Tickets(
	TicketId int primary key identity(1,1),    
    TotalTicket float,
    DeliveryCost float
)

create table dbo.TicketLines(
	TicketLineId int primary key identity(1,1),
	TicketId int not null,
	ProductName varchar(50),
    ProductPrice float,
    Quantity int,
    TotalLine float,
	CONSTRAINT FK_Ticket
		FOREIGN KEY (TicketId) 
		REFERENCES Tickets(TicketId)
)

insert into dbo.Products values
	(123,
	'Pantalón',
	'Pantalon de jean verde',
	1550,
	'',
	50);

select * from dbo.Products