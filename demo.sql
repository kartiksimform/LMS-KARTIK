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




select `name` from customerdetails,customeraddress where customerdetails.c_id =customeraddress.c_id ;


create table `customer`.`studen`(`t_id` int  not null auto_increment primary key,`name` varchar(45));

alter table studen rename  to student;

alter table student rename column t_id to s_id;


-- alter table student add column c_ic ;


insert into student select c_id,name from customerdetails;

select * from teacher;

create table `customer`.`teacher`(`t_id` int  not null auto_increment primary key,`name` varchar(45));

insert into teacher value(1,'t1');
insert into teacher value(2,'t2');
insert into teacher value(3,'t3');


create table `customer`.`class`(`c_id` int  not null auto_increment primary key,`name` varchar(45),s_id int not null,t_id int not null ,foreign key(t_id) references teacher(t_id),foreign key(s_id) references student(s_id) );
alter table class rename column name to class_name;

insert into class value(1,'8th',1,1);
insert into class value(2,'8th',2,2);
insert into class value(3,'8th',3,3);

insert into class value(4,'9th',4,1);
insert into class value(5,'9th',5,2);
insert into class value(6,'9th',6,3);

select * from student ;
select * from class ;
select * from teacher ;

desc class;

desc student;

use customer;
select student.name from class natural join student; 

select student.name from class natural join student where class.class_name like '8%'; 


select distinct c1.t_id  from class AS c1,class as c2  where c1.t_id=c2.t_id and c1.s_id<>c2.s_id;






select * from class right outer join student on class.s_id = student.s_id; 

select * from class left outer join student on class.s_id = student.s_id; 
