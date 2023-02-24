

delimiter //

create trigger  onet
before insert on orders
for each row
begin
if new.o_id>0 then set new.order_date=now();
end if;
end

//

delimiter ;

drop trigger onet;

delimiter //
create procedure a(name varchar(30))
begin 
select * from orders;
end
//
delimiter ;


drop procedure a;

call a('1');







select  * from `user`  u cross join orders o  on u.u_id=o.u_id; 


select  WEEKOFMONTH(current_date());



















