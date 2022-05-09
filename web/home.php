<?php 
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client([
    // Base URI is used with relative requests
    'base_uri' => 'https://jsonplaceholder.typicode.com',
    // You can set any number of default request options.
    'timeout'  => 5.0,
]);

$response = $client->request('GET', '/todos/1');

var_dump($response)


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
    
        <div class="d-flex align-items-center justify-content-center vh-20">
            <form id="myForm" action="upload.php">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="name" name="name" class="form-control" id="name">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" name="text" class="form-control" id="description">
                </div>
                <div class="form-group">
                    <label for="image">image</label>
                    <input type="file" name="image" class="form-control"  id="image">
                </div>
                <br>
                <button type="button" id="submitForm" class="btn btn-primary">Submit</button>
            </form>
        </div>

        <div class="container">
            <footer class="pt-5 my-5 text-muted border-top">
                <p>E-commerce</p>
            </footer>
        </div>
        
    </div>
</body>

</html>
