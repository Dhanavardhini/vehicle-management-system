<?php
include_once '../../../../config/database.php';

class Put
{
    public $conn;
    public $response;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }

  

    public function update4UserDetails($id, $name, $email, $phone, $number_of_days, $pickup_location, $from_date, $to_date, $status, $price)
    {
        $id = (int)$id; 
        $number_of_days = (int)$number_of_days;
    
        $checkUserQuery = "SELECT * FROM fourwheel WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        mysqli_stmt_bind_param($checkUserStmt, "i", $id); 
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        if (mysqli_num_rows($checkUserResult) == 1) {
            // User exists, proceed with update
            $updateQuery = "
                UPDATE fourwheel
                SET 
                    name = ?, 
                    email = ?, 
                    phone = ?, 
                    number_of_days = ?, 
                    pickup_location = ?, 
                    from_date = ?, 
                    to_date = ?, 
                    status = ? ,
                    price =?
                WHERE 
                    id = ?
            ";
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
    
            // Bind the parameters correctly
            mysqli_stmt_bind_param(
                $updateStmt, 
                "sssisssssi", // Correct parameter types: 7 strings + 1 integer
                $name, 
                $email, 
                $phone, 
                $number_of_days, 
                $pickup_location, 
                $from_date, 
                $to_date, 
                $status,
                $price,
                $id
            );
    
            if (mysqli_stmt_execute($updateStmt)) {
                http_response_code(200);
                return ["message" => "User details updated successfully"];
            } else {
                http_response_code(500);
                return ["error" => "Error updating user details"];
            }
        } else {
            http_response_code(404);
            return ["error" => "User not found"];
        }
    }


    
   
    
    public function update2UserDetails($id, $name, $email, $phone, $number_of_days, $pickup_location, $from_date, $to_date, $Status, $price)
    {
        $id = (int)$id; 
        $number_of_days = (int)$number_of_days;
    
        $checkUserQuery = "SELECT * FROM twowheelerbook WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        mysqli_stmt_bind_param($checkUserStmt, "i", $id); 
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        if (mysqli_num_rows($checkUserResult) == 1) {
            // User exists, proceed with update
            $updateQuery = "
                UPDATE twowheelerbook
                SET 
                    name = ?, 
                    email = ?, 
                    phone = ?, 
                    number_of_days = ?, 
                    pickup_location = ?, 
                    from_date = ?, 
                    to_date = ?, 
                    Status = ?,
                    price=? 
                WHERE 
                    id = ?
            ";
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
    
            // Bind the parameters correctly
            mysqli_stmt_bind_param(
                $updateStmt, 
                "sssisssssi", // Correct parameter types: 7 strings + 1 integer
                $name, 
                $email, 
                $phone, 
                $number_of_days, 
                $pickup_location, 
                $from_date, 
                $to_date, 
                $Status,
                $price,
                $id
            );
    
            if (mysqli_stmt_execute($updateStmt)) {
                http_response_code(200);
                return ["message" => "User details updated successfully"];
            } else {
                http_response_code(500);
                return ["error" => "Error updating user details"];
            }
        } else {
            http_response_code(404);
            return ["error" => "User not found"];
        }
    }
    


























    

    
   





     
}
?>