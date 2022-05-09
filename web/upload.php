<script>

let submit = document.getElementById("submitForm")
submit.addEventListener('click',  function ()  {
    const formData = new FormData();
    const fileField = document.getElementById("image");

    const productName = document.getElementById("name");
    const productDescription = document.getElementById("description");

    formData.append('name', productName.value);
    formData.append('description', productDescription.value);
    formData.append('immagine', fileField.files[0]);

    console.log(formData)
    for (var [key, value] of formData.entries()) { 
  console.log(key, value);
}

    fetch('http://localhost:3000/user/62682a9f98f812fe85ffa7c5/product/file', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(result => {
    console.log('Success:', result);
    })
    .catch(error => {
    console.error('Error:', error);
    });
})

    
</script>