

delimiter //

create trigger  onet
after insert on orders
for each row
begin
if new.o_id>0 then set new.delivery_date=now();
end if;
end

//

delimiter ;



delimiter //

create procedure a(name varchar(30)
)


//
delimiter ;