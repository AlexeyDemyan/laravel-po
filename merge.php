<?php

// $json_string = file_get_contents("../one-order.json");
$json_string = file_get_contents("../po-entries-backup.json");
$json_decoded = json_decode($json_string);

$db = new SQLite3('database\database.sqlite');

foreach ($json_decoded as $value) {
    [
        'company' => $company,
        'date' => $date,
        'supplier' => $supplier,
        'supplierAddress' => $supplierAddress,
        'supplierCode' => $supplierCode,
        'deliveryDate' => $deliveryDate,
        'orderLines' => $orderLines,
        'paymentTerms' => $paymentTerms,
        'otherRemarks' => $otherRemarks,
        'discount' => $discount,
        'netTotalValue' => $netTotalValue,
        'priceIncludesVat' => $priceIncludesVat,
        'createdAt' => $createdAt,
        'updatedAt' => $updatedAt
    ] = get_object_vars($value);

    if ($date) {
        ['$date' => $date_to_string] = get_object_vars(($date));
    } else {
        $date_to_string = "";
    };

    if ($deliveryDate) {
        ['$date' => $delivery_date_to_string] = get_object_vars(($deliveryDate));
    } else {
        $delivery_date_to_string = "";
    }

    if ($createdAt) {
        ['$date' => $created_at_to_string] = get_object_vars(($createdAt));
    } else {
        $created_at_to_string = "";
    }

    if ($updatedAt) {
        ['$date' => $updated_at_to_string] = get_object_vars(($updatedAt));
    } else {
        $updated_at_to_string = "";
    }

    $orderLinesAll = [];

    foreach ($orderLines as $value) {
        [
            "product" => $product,
            "supplierRef" => $supplierRef,
            "quantity" => $quantity,
            "unitPrice" => $unitPrice,
            "totalPrice" => $totalPrice
        ] = get_object_vars($value);

        $orderLine = "{\"product\":\"{$product}\",\"supplierRef\":\"{$supplierRef}\",\"quantity\":\"{$quantity}\",\"unitPrice\":\"{$unitPrice}\",\"totalPrice\":\"{$totalPrice}\"}";
        array_push($orderLinesAll, $orderLine);
    }

    $orderLinesImploded = (implode(",", $orderLinesAll));
    $orderLines = "[{$orderLinesImploded}]";

    $insert_string = "INSERT INTO p_o_entries (company, date, supplier, supplierAddress, supplierCode, deliveryDate, orderLines, paymentTerms, otherRemarks, discount, netTotalValue, priceIncludesVat, created_at, updated_at) VALUES ('{$company}', '{$date_to_string}', '{$supplier}', '{$supplierAddress}', '{$supplierCode}', '{$delivery_date_to_string}', '{$orderLines}', '{$paymentTerms}', '{$otherRemarks}', '{$discount}', '{$netTotalValue}', '{$priceIncludesVat}', '{$created_at_to_string}', '{$updated_at_to_string}')";

    // var_dump($insert_string);
    // echo "\n";

    $db->exec($insert_string);
}
