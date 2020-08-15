// CRUD
/* const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID */

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
/* console.log(id)

console.log(id.getTimestamp()) */


MongoClient.connect(connectionURL, { useNewUrlParser: true,  useUnifiedTopology: true  }, (error, client)=>{
    if(error){
        return console.log('Unable to connect')
    }

    const db = client.db(databaseName)
    
   /*  db.collection('users').findOne({ name: 'Angeloni Cuesta' }, (error, user) => {
        if(error){
            return console.log('No se pudo encontrar')
        }

        console.log(user)
    }) */

    db.collection('users').find({ age: 22 }).toArray((error, users)=>{
        console.log(users)
    })

})