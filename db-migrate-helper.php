<?php

$json_string = file_get_contents("po_entries.json");
$json_decoded = json_decode($json_string);

$db = new SQLite3('database/database.sqlite');

foreach ($json_decoded as $value) {
    [
        'orderNumber' => $orderNumber,
        'user' => $user
    ] = get_object_vars($value);

    $update_string = "UPDATE p_o_entries SET userId = {$user} WHERE orderNumber = {$orderNumber};";
    $db->exec($update_string);
}

$extra_entries = [244 => 1, 245 => 3, 246 => 3, 247 => 3, 248 => 3, 249 => 3, 250 => 3, 251 => 3, 252 => 3, 253 => 3, 254 => 3, 255 => 1, 256 => 4, 257 => 1, 258 => 1,];

foreach ($extra_entries as $orderNumber => $userId) {
    $update_string = "UPDATE p_o_entries SET userId = {$userId} WHERE orderNumber = {$orderNumber};";
    $db->exec($update_string);
}
