<?php

$db = new SQLite3('database/database.sqlite');

$result = $db->query("SELECT * FROM p_o_entries");


while ($row = $result->fetchArray()) {
    if ($row["date"]) {
        if (strlen($row["date"]) === 24) {
            $new_value = substr($row["date"], 0, 10);
            $currentOrder = $row["orderNumber"];
            $update_string = "UPDATE p_o_entries SET date = '{$new_value}' WHERE orderNumber = {$currentOrder};";
            $db->exec($update_string);
        }
    }
    if ($row["deliveryDate"]) {
        if (strlen($row["deliveryDate"]) === 24) {
            $new_value = substr($row["deliveryDate"], 0, 10);
            $currentOrder = $row["orderNumber"];
            $update_string = "UPDATE p_o_entries SET deliveryDate = '{$new_value}' WHERE orderNumber = {$currentOrder};";
            $db->exec($update_string);
        }
    }
    if(strlen($row["created_at"]) === 24) {
        $new_date = substr($row["created_at"], 0 , 10);
        $new_time = substr($row["created_at"], 11 , 8);
        $currentOrder = $row["orderNumber"];
        $update_string = "UPDATE p_o_entries SET created_at = '{$new_date} {$new_time}' WHERE orderNumber = {$currentOrder};";
        $db->exec($update_string);
    }
    if(strlen($row["updated_at"]) === 24) {
        $new_date = substr($row["updated_at"], 0 , 10);
        $new_time = substr($row["updated_at"], 11 , 8);
        $currentOrder = $row["orderNumber"];
        $update_string = "UPDATE p_o_entries SET updated_at = '{$new_date} {$new_time}' WHERE orderNumber = {$currentOrder};";
        $db->exec($update_string);
    }
}
