create database online_delivery_system;
use online_delivery_system;


-- user - user id, user_name, email, phone_number, address, pincode;

create table `user` (
`u_id` int not null auto_increment,
`name` varchar(30) not null,
`street_number` varchar(40) not null,
`address_line1` varchar(40) not null,
`address_line2` varchar(40) not null,
`city` varchar(40) not null,
`state` varchar(40) not null,
`country` varchar(40) not null,
`pincode` int not null,
primary key (u_id)
);

 

-- product - product id, product name, product price, description, quantity;

create table product(
`p_id`int not null auto_increment,
`product_name` varchar(30) not null,
`price` varchar(30) not null,
`created_at` timestamp default current_timestamp(),
`updated_at` varchar(30),
primary key (p_id)
);
alter table product add column `quntity` int not null;



delimiter //
create trigger `update_before_product` 
before update on `product`
for each row
set new.updated_at=now();
end if;
// 
delimiter ; 





delimiter //

create procedure addproduct (in product_name varchar(30),in price int ,in quntity int)
 begin
insert into product (`product_name`,`price`,`quntity`)value(product_name,price,quntity);
-- select * from product;
end
//
delimiter  ;



  
  -- order - order id, user_id, order_status, expected delivery date;


create table orders (
o_id int auto_increment,
u_id int not null,
order_status varchar(20) not null ,
order_date timestamp default current_timestamp(),
delivery_date timestamp ,
constraint checkstatus check(order_status='delivered' or order_status='undelivered'),
primary key (o_id),
foreign key (u_id) references `user`(u_id)
);
alter table orders modify order_status varchar(20) not null default 'undelivered';
alter table orders add column delivery_date datetime generated always as (DATE_ADD(order_date, interval 7 DAY)) stored;



-- order details - order id,product_id,quntity,price;
create table order_details(
od_id int auto_increment,
o_id int not null,
p_id int not null,
quntity int not null,
price int ,
primary key (od_id),
foreign key (o_id) references orders(o_id),
foreign key (p_id) references product(p_id)
);


 delimiter //
create procedure userorder (user_id int,product_id int,now_quntity int)
begin
declare old_quntity int;
insert into orders (`u_id`) value(user_id);
insert into order_details (`o_id`,`p_id`,`quntity`,`price`) value((select last_insert_id()),product_id,now_quntity,(select price from product where `p_id`=product_id)*now_quntity);
select `quntity` into old_quntity from `product` where `p_id`=product_id ;
update `product` set `quntity`=old_quntity-now_quntity where  `p_id`=product_id;
end
//
delimiter ;


delimiter //
create procedure changestatus(order_id int)
begin
update  orders set  order_status='delivered' where o_id=order_id; 
end 
//
delimiter ;


-- inserting data in tables

insert into user (name,street_number,address_line1,address_line2,city,state,country,pincode)
values('deep',6,'suthar faliya','luna','padra','gujrat','india',391440);

insert into user (name,street_number,address_line1,address_line2,city,state,country,pincode)
values('kartik',5,'suthar faliya','luna','padra','gujrat','india',391440),
	  ('jayesh',8,'brahman faliya','vadodara','vadodara','gujrat','india',391450);
      
insert into user (name,street_number,address_line1,address_line2,city,state,country,pincode)
values     ("hemaxi","96","satyagrah soc","near iscon","ahmedabad","gujarat","india",396005),
      (
	"binal" , 
	"150",
	"satyagrah soc",
	"near iscon",
	"ahmedabad",
	"gujarat",
	"india",
	396005
	),(
"aayush" , 
"01",
"gulmohar park",
"near naherunagar",
"ahmedabad",
"gujarat",
"india",
396008
),(
"denish" , 
"08",
"santtukaram soc",
"palanpur jakatnaka",
"surat",
"gujarat",
"india",
396003
),(
"zaid" , 
"101",
"manmandir apartment",
"katargam char rasta",
"vadodara",
"gujarat",
"india",
300450
);
      


delete from product where p_id>0; 
insert into product (product_name,price,quntity)
value ('pen',20,50),
('pencil',10,100),
('book',100,50),
('watch',350,70),
('cup',170,400),('camera',50000,100);

call addproduct('lock',60,500);

-- userid,productid,quntity

call userorder(1,8,5);
call userorder(2,9,3);
call userorder(3,10,8);
call userorder(4,11,5);
call userorder(5,12,2);
call userorder(6,13,5);
call userorder(7,14,4);
call userorder(1,14,3);
call userorder(7,8,5);
call userorder(6,9,3);
call userorder(5,10,8);
call userorder(3,12,2);
call userorder(2,13,5);


call changestatus(18);
call changestatus(21);
call changestatus(22);
call changestatus(24);
call changestatus(26);
call changestatus(28);













select * from `user`;
select * from product;
select * from `orders`;
select * from order_details;




-- start queres


-- 1. Fetch all the User order list and include atleast following details in that.
-- - Customer name
-- - Product names
-- - Order Date
-- - Expected delivery date (in days, i.e. within X days)

select u.`name` , p.`product_name`, o.`order_date`,CONCAT( DATEDIFF(o.`delivery_date`, o.`order_date`) , ' Days') as 'Day left', o.`o_id` from  `user`  u   inner join `orders` o on u.u_id=o.u_id inner join order_details od on od.o_id=o.o_id inner join `product` p on p.p_id=od.p_id;


-- 2. Create summary report which provide information about
-- - All undelivered Orders

select u.`name` ,p.`product_name` from `user` u natural join orders o  natural join order_details od inner join product p on od.p_id=p.p_id where o.order_status like 'un%';  


-- 5 Most recent orders


select u.`name` ,p.product_name, o.order_date  from `user` u natural join orders o natural join order_details od inner join product p on od.p_id=p.p_id limit 5;

-- - Top 5 active users (Users having most number of orders)

select u.`u_id`,u.`name`,concat('Order ' ,count(u.u_id),' Times') from `user` u natural join orders o natural join order_details od inner join product p on od.p_id=p.p_id group by (u.u_id) order by count(u.u_id) desc  limit 5 ;


-- - Inactive users (Users who hasn’t done any order)

select  u.`u_id`,u.`name` from `user` u where u.u_id not in (select distinct u_id from orders)  ;

-- Top 5 Most purchased products ;

select * from order_details;

select p.product_name,sum(od.quntity) from product p inner join order_details od on od.p_id=p.p_id group by od.p_id order by  sum(od.quntity) desc limit 5;
  
  
  -- Most expensive orders.
select p.product_name , sum(od.price) from product p inner join order_details od on od.p_id=p.p_id group by od.p_id order by sum(od.price) desc limit 1;
-- ost chepest orders.
select p.product_name , sum(od.price) from product p inner join order_details od on od.p_id=p.p_id group by od.p_id order by sum(od.price) asc limit 1;
