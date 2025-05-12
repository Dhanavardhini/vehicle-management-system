<?php

// Define file paths
$modelsPath = '../../../../models/put.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleResponse(500, 'Required files are missing');
}

// Include necessary files
require_once $modelsPath;
require_once $headersPath;

// Function to handle errors and send response
function handleResponse($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}

// Decode incoming JSON data
$data = json_decode(file_get_contents('php://input'));

// Check if the required fields are provided
if (!isset($data->id) || !isset($data->name) || !isset($data->email) || !isset($data->number_of_days) || !isset($data->pickup_location) || !isset($data->from_date) || !isset($data->to_date) || !isset($data->status)) {
    handleResponse(400, 'All required fields (id, name, email, number_of_days, pickup_location, from_date, to_date) are required');
}


$obj = new Put();

$data = json_decode(file_get_contents('php://input'));
if (isset($data->id, $data->name, $data->email, $data->phone, $data->number_of_days, $data->pickup_location, $data->from_date, $data->to_date,$data->status,$data->price)) {
    $result = $obj->update4UserDetails(
        $data->id, 
        $data->name, 
        $data->email, 
        $data->phone, 
        $data->number_of_days, 
        $data->pickup_location, 
        $data->from_date, 
        $data->to_date,
        $data->status,
        $data->price
    );
    echo json_encode($result);
} else {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input"]);
}



echo json_encode($result);
?>
