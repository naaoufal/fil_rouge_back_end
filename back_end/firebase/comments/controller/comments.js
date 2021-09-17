require('dotenv').config();
const firestore = require('firestore');
const admin = require("firebase-admin");
const functions = require('firebase-functions');

const serviceAccount = require("../servicesKeys/comments-56966-firebase-adminsdk-urzz3-cc99802f45.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://comments-56966-default-rtdb.firebaseio.com/"
});
//console.log(admin);
admin.firestore();


const addComment = async (req, res) => {
    // via firestore :
    admin.firestore().collection("comments").add({
        // idComment : Math.random() * (1 - 100) + 1,
        userID : req.body.userID,
        name : req.body.name,
        articleID : req.body.articleID,
        comment : req.body.comment,
        dateComment : new Date()
    })

    // via real time database :
    const db = admin.database().ref("saving-data/posts")
    const userRef = db.child("comments")
    userRef.set({
        userID : req.body.userID,
        name : req.body.name,
        articleID : req.body.articleID,
        comment : req.body.comment,
        dateComment : new Date()
    })
}

const getComment = async (req, res) => {
    
    res.send("work")
    
    // via firestore :
    // try {
    //     const comments = admin.firestore().collection("comments")
    //     const snapShot = await comments.get()

    //     snapShot.forEach(doc => {
    //         console.log(doc.data())
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
}

module.exports = {
    addComment,
    getComment
}