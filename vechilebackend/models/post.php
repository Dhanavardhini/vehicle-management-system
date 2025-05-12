<?php
include_once '../../../../config/database.php';

class Post
{
    public $conn;
    public $response;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
    
    // Module: Admin
    // SubModule: Login -> Validate OTP
    

    // Module: Admin
    // SubModule: Login -> Validate OTP -> Insert Token
    
    
    // Module: Admin
    // SubModule: Notification -> Single Notification
    
    // SubModule: Achievement->Insert
    
    
    
    // Module: Admin
    // SubModule: Course->Insert
   

    //Module:Admin
    //SubModule: student/standard -> Add members
     

    //Module:Admin
    //SubModule: student/premium -> Add members
   
    //SubModule: insert plan -> Add plans
    public function A_InsertPlans($name,$password)
    {
        $insert = "INSERT INTO user(name, password) VALUES ( ?, ?)";
        $stmt = mysqli_prepare($this->conn, $insert);
    
        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
    
        mysqli_stmt_bind_param($stmt, "ss", $name,$password);
        $result = mysqli_stmt_execute($stmt);
    
        if ($result) {
            return ["message" => "Plan Added successful"];
        } else {
            return ["message" => "Plan Added failed: " . mysqli_error($this->conn)];
        }
    }
    public function A_InsertPlans2($name,$password)
    {
        $insert = "INSERT INTO admin(name, password) VALUES ( ?, ?)";
        $stmt = mysqli_prepare($this->conn, $insert);
    
        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
    
        mysqli_stmt_bind_param($stmt, "ss", $name,$password);
        $result = mysqli_stmt_execute($stmt);
    
        if ($result) {
            return ["message" => "Plan Added successful"];
        } else {
            return ["message" => "Plan Added failed: " . mysqli_error($this->conn)];
        }
    }
    public function twowheeler($name, $email, $phone, $number_of_days, $pickup_location, $from_date, $to_date,$Status,$price)
{
    $insert = "INSERT INTO twowheelerbook (name, email, phone, number_of_days, pickup_location, from_date, to_date,Status,price) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)";
    $stmt = mysqli_prepare($this->conn, $insert);

    if (!$stmt) {
        return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
    }

    // Correcting type specifiers based on expected data types
    mysqli_stmt_bind_param($stmt, "sssisssss", $name, $email, $phone, $number_of_days, $pickup_location, $from_date, $to_date,$Status,$price);
    $result = mysqli_stmt_execute($stmt);

    if ($result) {
        return ["message" => "Plan Added successfully"];
    } else {
        return ["message" => "Plan Added failed: " . mysqli_error($this->conn)];
    }
}
public function fourwheeler($name, $email, $phone, $number_of_days, $pickup_location, $from_date, $to_date, $status, $price)
{
    $insert = "INSERT INTO fourwheel (name, email, phone, number_of_days, pickup_location, from_date, to_date,status,price) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)";
    $stmt = mysqli_prepare($this->conn, $insert);

    if (!$stmt) {
        return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
    }

    // Correcting type specifiers based on expected data types
    mysqli_stmt_bind_param($stmt, "sssisssss", $name, $email, $phone, $number_of_days, $pickup_location, $from_date, $to_date,$status,$price);
    $result = mysqli_stmt_execute($stmt);

    if ($result) {
        return ["message" => "Plan Added successfully"];
    } else {
        return ["message" => "Plan Added failed: " . mysqli_error($this->conn)];
    }
}
public function images($name, $price, $brand, $file)
{
    $advertisementQuery = "INSERT INTO image (name, price, brand, file) VALUES (?, ?, ?, ?)";
    $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);

    if (!$stmtadvertisement) {
        return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
    }

    mysqli_stmt_bind_param($stmtadvertisement, 'ssss', $name, $price, $brand, $file);
    $advertisementExec = mysqli_stmt_execute($stmtadvertisement);

    if ($advertisementExec) {
        return "Two-wheeler added successfully";
    } else {
        return "Failed to insert data into database: " . mysqli_error($this->conn);
    }
}

public function fourimage($name, $price, $brand, $file)
{
    $advertisementQuery = "INSERT INTO fourimage (name, price, brand, file) VALUES (?, ?, ?, ?)";
    $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);

    if (!$stmtadvertisement) {
        return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
    }

    mysqli_stmt_bind_param($stmtadvertisement, 'ssss', $name, $price, $brand, $file);
    $advertisementExec = mysqli_stmt_execute($stmtadvertisement);

    if ($advertisementExec) {
        return "four-wheeler added successfully";
    } else {
        return "Failed to insert data into database: " . mysqli_error($this->conn);
    }
}























 





}
?> 
