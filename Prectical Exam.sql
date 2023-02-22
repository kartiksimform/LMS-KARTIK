-- user - user id, user_name, email, phone_number, address, pincode
-- order - order id, user_id, order_status, expected delivery date
-- order details - order id, 

create database online_delivery_system;


create database hemaxiordertab;

create table user (
`u_id` int not null auto_increment,
`name` varchar(30) not null,
`street_number` varchar(40) not null,
`address_line1` varchar(40) not null,
`address_line2` varchar(40) not null,
`city` varchar(40) not null,
`state` varchar(40) not null,
`country` varchar(40) not null,
`pincode` int not null,
primary key (u_id));


-- product - product id, product name, product price, description, quantity

create table product(
`p_id`int not null auto_increment,
`product_name` varchar(30) not null,
`price` varchar(30) not null,
`created_at` date default now() not null,
`updated_at` varchar(30) not null,


);


