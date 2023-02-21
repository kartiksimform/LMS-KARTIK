 create database customer ;
 
 

-- CREATE TABLE `customer`.`new_table` (
--   `bfdbb` INT NOT NULL,
--   `new_tablecoldb` VARCHAR(45) NULL,
--   PRIMARY KEY (`bfdbb`));



create table `customer`.`customerdetails` (`id` int not null, `name` VARCHAR(45),primary key(`id`));

insert into customerdetails value(1,'kartik');
insert into customerdetails value(2,'deep');
insert into customerdetails value(3,'java');


alter table `customer`.`customerdetails` ADD (`dept` VARCHAR(45));

UPDATE `customer`.`customerdetails` SET dept ='php' where id>0;


alter table `customer`.`customerdetails` rename column id to c_id;



insert into customerdetails value(4,'drashan','php');
insert into customerdetails value(5,'noname','java');
insert into customerdetails value(6,'yash','html');
insert into customerdetails value(7,'krutika','css');
insert into customerdetails value(8,'jayesh','js');


select count(name),dept from customerdetails  group by dept having dept like "p%";


create table `customer`.`customeraddress` (`a_id` int not null , `address` VARCHAR(45) null, c_id int not null ,primary key (a_id) ,   FOREIGN KEY (c_id) REFERENCES  customerdetails(c_id) );

insert into customeraddress value(1,'luna',1);
insert into customeraddress value(2,'padra',2);
insert into customeraddress value(3,'vadodara',3);


select * from customeraddress ;




select * from customerdetails ;
