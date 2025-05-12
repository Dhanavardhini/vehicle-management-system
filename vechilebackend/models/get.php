<?php
include_once '../../../../config/database.php';

class Get
{ 
    public $conn;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }

    // Function to handle errors and send response
    private function handleResponse($statusCode, $message) 
    {
        http_response_code($statusCode);
        echo json_encode(['error' => $message]);
        exit();
    }

    

   
    //Module:Admin
    //SubModule:Achievement->View
    public function four() 
    {
        
        $query = "SELECT * FROM fourwheel";
        
     
        $stmt = mysqli_prepare($this->conn, $query);
        
        if (!$stmt) {
            $this->handleResponse(500, 'Failed to prepare statement');
            return;
        }
        mysqli_stmt_execute($stmt);
        
        if (mysqli_stmt_errno($stmt)) {
            $this->handleResponse(500, 'Internal server error');
            return;
        }
        
        $result = mysqli_stmt_get_result($stmt);
    
        // Process the result
        if (mysqli_num_rows($result) > 0) {
            $achievementContent = mysqli_fetch_all($result, MYSQLI_ASSOC);
            mysqli_free_result($result);
            mysqli_stmt_close($stmt);
            return $achievementContent;
        } else {
            mysqli_stmt_close($stmt);
            return ['error' => 'No Details Found'];
        }
    }





    public function two() 
    {
        
        $query = "SELECT * FROM twowheelerbook";
        
     
        $stmt = mysqli_prepare($this->conn, $query);
        
        if (!$stmt) {
            $this->handleResponse(500, 'Failed to prepare statement');
            return;
        }
        
       
        // mysqli_stmt_bind_param($stmt, 'i', $id);
        
     
        mysqli_stmt_execute($stmt);
        
        if (mysqli_stmt_errno($stmt)) {
            $this->handleResponse(500, 'Internal server error');
            return;
        }
    
        
        $result = mysqli_stmt_get_result($stmt);
    
        // Process the result
        if (mysqli_num_rows($result) > 0) {
            $achievementContent = mysqli_fetch_all($result, MYSQLI_ASSOC);
            mysqli_free_result($result);
            mysqli_stmt_close($stmt);
            return $achievementContent;
        } else {
            mysqli_stmt_close($stmt);
            return ['error' => 'No Details Found'];
        }
    }


    public function twoimage() 
    {
        
        $query = "SELECT * FROM image";
        
     
        $stmt = mysqli_prepare($this->conn, $query);
        
        if (!$stmt) {
            $this->handleResponse(500, 'Failed to prepare statement');
            return;
        }
        
       
        // mysqli_stmt_bind_param($stmt, 'i', $id);
        
     
        mysqli_stmt_execute($stmt);
        
        if (mysqli_stmt_errno($stmt)) {
            $this->handleResponse(500, 'Internal server error');
            return;
        }
    
        
        $result = mysqli_stmt_get_result($stmt);
    
        // Process the result
        if (mysqli_num_rows($result) > 0) {
            $achievementContent = mysqli_fetch_all($result, MYSQLI_ASSOC);
            mysqli_free_result($result);
            mysqli_stmt_close($stmt);
            return $achievementContent;
        } else {
            mysqli_stmt_close($stmt);
            return ['error' => 'No Details Found'];
        }
    }

    public function fourimage() 
    {
        
        $query = "SELECT * FROM fourimage";
        
     
        $stmt = mysqli_prepare($this->conn, $query);
        
        if (!$stmt) {
            $this->handleResponse(500, 'Failed to prepare statement');
            return;
        }
        
       
        // mysqli_stmt_bind_param($stmt, 'i', $id);
        
     
        mysqli_stmt_execute($stmt);
        
        if (mysqli_stmt_errno($stmt)) {
            $this->handleResponse(500, 'Internal server error');
            return;
        }
    
        
        $result = mysqli_stmt_get_result($stmt);
    
        // Process the result
        if (mysqli_num_rows($result) > 0) {
            $achievementContent = mysqli_fetch_all($result, MYSQLI_ASSOC);
            mysqli_free_result($result);
            mysqli_stmt_close($stmt);
            return $achievementContent;
        } else {
            mysqli_stmt_close($stmt);
            return ['error' => 'No Details Found'];

  


   












}}}
    
?>

