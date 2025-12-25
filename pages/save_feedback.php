<?php
// Database connection
$conn = new mysqli(
  "localhost",
  "YOUR_DB_USERNAME",
  "YOUR_DB_PASSWORD",
  "feedback_db"
);

if ($conn->connect_error) {
  echo json_encode(["success" => false]);
  exit;
}

// Read JSON from frontend
$data = json_decode(file_get_contents("php://input"), true);

$name = $conn->real_escape_string($data["name"]);
$message = $conn->real_escape_string($data["message"]);

// Insert into DB
$sql = "INSERT INTO feedback (name, message) VALUES ('$name', '$message')";

if ($conn->query($sql)) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["success" => false]);
}

$conn->close();
?>
