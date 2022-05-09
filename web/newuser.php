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
                    <label for="description">Surname</label>
                    <input type="surname" name="surname" class="form-control" id="surname">
                </div>
                <div class="form-group">
                    <label for="image">email</label>
                    <input type="email" name="email" class="form-control"  id="email">
                </div>
                <br>
                <button type="button" id="submitForm" class="btn btn-primary">Submit</button>
            </form>
        </div>

       
        
    </div>
</body>

</html>
