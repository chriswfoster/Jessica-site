DELETE FROM shopitems
where item_id = $1
return (SELECT * from shopitems)