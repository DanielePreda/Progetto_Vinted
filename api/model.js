const { MongoClient, ObjectId } = require("mongodb")

let client = null;

const getClient = async () => {
    if (client != null) {
        return client;
    }
     client = new MongoClient("mongodb://root:root@localhost:27017/?maxPoolSize=20&w=majority")
    try {
          client.connect()
    } catch (error) {
        
    }
    await client.connect();
    return client;
}

const getCollectionUsers = async () => {
    client = await getClient();
    const collection = await (await client.db("vinted")).collection("users");
    return collection;
}

const getCollectionProducts = async () => {
    client = await getClient();
    const collection = await (await client.db("vinted")).collection("prodotti");
    return collection;
}

const getProductsList = async (categoria) => {
    const collection = await getCollectionProducts()
    if (categoria == null) {
        return  collection.find({}).toArray()
    } else {
        return  collection.find({
            categoria: categoria
        }).toArray()
    }
}


const getProducts = async (idProdotto) => {
    const collectionProducts = await getCollectionProducts()

    const result = await collectionProducts.find({_id: new ObjectId(idProdotto)});
    const array = await result.toArray()
    const book = array[0];
    return book;
}

const getUser = async (idUtente) => {
    const collection = await getCollectionUsers()

    let res = await collection.find({ _id: new ObjectId(idUtente)});
    console.log(res)
    let array = await res.toArray();
    console.log(array)
    let user = array[0];
    return user;
}

const createProduct = async (idUtente, prodotto) => {
    const collectionProducts = await getCollectionProducts();

    let user = await getUser(idUtente);

    if(user == null)
    {
        //errore
        return null;
    }

    return await collectionProducts.insertOne(
        {
            ...prodotto,
            owner : new ObjectId(idUtente)
        }
    );
}

const createUser= async (user)=>{
    const collection = await getCollectionUsers()
    return await collection.insertOne(user)
}

const finishLoan = async (id,idLibro)=>{
    const collection = await getCollectionUsers()
    const collectionBooks = await getCollectionProducts();

    const user = await getUser(id);
    const loans = user["prestiti"];

    let mioPrestito = null;
    loans.forEach(l => {

        if(l["_id"].toString() == idLibro) {
            mioPrestito = l;
        }

    });

    //non esiste il prestito
    if(mioPrestito == null)
    {
        return null;
    }

    await collectionBooks.updateOne({ _id: new ObjectId(idLibro) }, { $set: { disponibile: true }});

    return collection.updateOne({ _id : new ObjectId(id) },
        {
            $pull: {
                prestiti: mioPrestito
            }
        }
    )
}


const showProducts = async()=>{
    const collectionProducts = await getCollectionProducts();
    let res = await collectionProducts.find({});
    let array = await res.toArray();
    return array;
}

const showUsers = async()=>{
    const collection = await getCollectionUsers();
    let res = await collection.find({});
    let array = await res.toArray();
    return array;
}




module.exports = {
    createProduct,
    getUser,
    getCollectionProducts,
    getProductsList,
    createUser
}