<?php

$db = new SQLite3('database\database.sqlite');

// $results = $db->query('select * from g_r_n_entries');

// while ($row = $results->fetchArray()) {
//     echo $row["remarks"];
//     echo "\n";
// }

// $stmt = $db->exec("INSERT INTO p_o_entries (company, supplier,priceIncludesVat) VALUES ('PHP company', 'Supplier PHP', 'YES')");
// $result = $stmt->execute();

// var_dump($result->fetchArray());

$company = 'Marsovin Viticulture Ltd';
$date = '2024-05-22T00:00:00.000Z';
$supplier = 'Some Sup';
$supplierAddress = 'Triq Xismu';
$supplierCode = '';
$deliveryDate = '2024-05-22T00:00:00.000Z';

$oneOrderLine = "{\"product\":\"Bolts\",\"supplierRef\":\"BLT010\",\"quantity\":\"6\",\"unitPrice\":\"30.99\",\"totalPrice\":\"\"}";
//$orderLines = "[{\"product\":\"Bolts\",\"supplierRef\":\"BLT010\",\"quantity\":\"6\",\"unitPrice\":\"30.99\",\"totalPrice\":\"\"},{\"product\":\"Rivets\",\"supplierRef\":\"RVT999\",\"quantity\":\"13.55\",\"unitPrice\":\"69\",\"totalPrice\":\"\"}]";

$product = 'Some prod';
$supplierRef = '';
$quantity = '5.55';
$unitPrice = '50.5';
$totalPrice = '69.69';

$orderLine = "{\"product\":\"{$product}\",\"supplierRef\":\"{$supplierRef}\",\"quantity\":\"{$quantity}\",\"unitPrice\":\"{$unitPrice}\",\"totalPrice\":\"{$totalPrice}\"}";

$orderLines = "[{$orderLine},{$oneOrderLine}]";

$paymentTerms = '30 days';
$otherRemarks = 'Consumables';
$discount = null;
$netTotalValue = 111.55;
$priceIncludesVat = 'No';
$createdAt = '2024-07-17T12:08:34.442Z';
$updatedAt = '2024-07-17T12:08:34.442Z';
$insert_string = "INSERT INTO p_o_entries (company, date, supplier, supplierAddress, supplierCode, deliveryDate, orderLines, paymentTerms, otherRemarks, discount, netTotalValue, priceIncludesVat, created_at, updated_at) VALUES ('{$company}', '{$date}', '{$supplier}', '{$supplierAddress}', '{$supplierCode}', '{$deliveryDate}', '{$orderLines}', '{$paymentTerms}', '{$otherRemarks}', '{$discount}', {$netTotalValue}, '{$priceIncludesVat}', '{$createdAt}', '{$updatedAt}')";

$db->exec($insert_string);

// $stmt = $db->prepare("INSERT INTO p_o_entries (company, date, supplier,supplierAddress, supplierCode, deliveryDate, paymentTerms, otherRemarks, discount, netTotalValue, priceIncludesVat, created_at, updated_at) VALUES ('?', '2024-05-22T00:00:00.000Z', 'Orttt', 'Triq Qormi', '', '2024-05-22T00:00:00.000Z', '30 days', 'Consumables', null, 575.39, 'No', '2024-07-17T12:08:34.442Z', '2024-07-17T12:08:34.442Z')", ($company));
// $stmt->bindValue(':company', $company);
// $stmt->execute();

// $name = "Maria";
// $info["last_name"] = "Warner";

// echo "Hello {$name} {$info["last_name"]}";

// (company, date, supplier,supplierAddress, supplierCode, deliveryDate, paymentTerms, otherRemarks, discount, netTotalValue, priceIncludesVat, createdAt, updatedAt)
// ('Marsovin Viticulture Ltd', '2024-05-22T00:00:00.000Z', 'Ortis Ltd', 'Triq L-Industrija, Hal-Qormi', '', '2024-05-22T00:00:00.000Z', '30 days', 'Consumables', null, 575.39, 'No', '2024-07-17T12:08:34.442Z', '2024-07-17T12:08:34.442Z')
