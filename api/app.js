const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express();
const cors = require('cors');

const {
    createProduct,
    getUser,
    getProductsList,
    getCollectionProducts,
    createUser
} = require('./model.js');


app.use(express.json())
app.use(cors())

app.post('/user/:id/product', upload.single('immagine'), async (req, res) => {
    var idUtente = req.params.id;
    var prodotto = req.body;
    
    var user = await getUser(idUtente)
    console.log(user)

    var tipoImmagine=req.file.mimetype;
    var percorso= req.file.destination + req.file.filename;

    var result = await createProduct(idUtente, {...prodotto, tipoImmagine, percorso})
    res.json(result);
});


//prova
app.post('/image', async (req, res) => {
    res.status(200).json({ msg: "test"});
}) 


app.get("/products", async (req, res) => {
    console.log("Richiesta ricevuto /products");

    var product = await getProductsList()
    res.json(product);
})

app.post("/users", async (req,res)=>{
    console.log(req.body)
    var users= await createUser(req.body)
    res.json(users);
})

var server = app.listen(3000, () => {
    console.log('Server avviato..');
});