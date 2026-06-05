<?php
// file: test_db.php
$conn = mysqli_connect('localhost', 'root', '', 'yscellgadget_cms');

if (!$conn) {
    die('Database error: ' . mysqli_connect_error());
}

echo "<h2>Database Connected Successfully!</h2>";

$result = mysqli_query($conn, "SELECT COUNT(*) as total FROM berita");
$row = mysqli_fetch_assoc($result);
echo "Total Berita: " . $row['total'] . "<br>";

$result = mysqli_query($conn, "SELECT COUNT(*) as total FROM review");
$row = mysqli_fetch_assoc($result);
echo "Total Review: " . $row['total'] . "<br>";

$result = mysqli_query($conn, "SELECT COUNT(*) as total FROM trend");
$row = mysqli_fetch_assoc($result);
echo "Total Trend: " . $row['total'] . "<br>";

mysqli_close($conn);
?>