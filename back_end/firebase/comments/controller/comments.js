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
    // const db = admin.database().ref("saving-data/posts")
    // const userRef = db.child("comments")
    // userRef.set({
    //     userID : req.body.userID,
    //     name : req.body.name,
    //     articleID : req.body.articleID,
    //     comment : req.body.comment,
    //     dateComment : new Date()
    // })
}

const getComment = async (req, res) => {
    //res.send("work")
    const all = []
    // via firestore :
    try {
        const comments = await admin.firestore().collection("comments").get()
        

        comments.docs.map(com => {
            all.push(com.data())
        })

        res.json(all)

    } catch (error) {
        // console.log(error)
        return error;
    }

    // via real time database :
    // const db = admin.database()
    // const ref = db.ref('saving-data/posts/comments')

    // ref.on('value', (snapShot) => {
    //     //console.log(snapShot.val())
    //     res.json(snapShot.val())
    //     return snapShot.val();
    // })
}

module.exports = {
    addComment,
    getComment
}