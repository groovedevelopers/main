import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import { authState } from "rxfire/auth";
import { collectionData, docData } from "rxfire/firestore";
import { } from "firebase/functions";
import {  refCount, shareReplay, publishReplay, switchMap } from "rxjs/operators";
import { of } from "rxjs";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyDDJ0nDDnh8Cg1_8ZkLxGwcTURUz_fyI6s",
    authDomain: "gdmain-4ee33.firebaseapp.com",
    projectId: "gdmain-4ee33",
    storageBucket: "gdmain-4ee33.appspot.com",
    messagingSenderId: "615923323653",
    appId: "1:615923323653:web:ccebbb35bac7563e659d6c",
    measurementId: "G-TPZXFK8258"
  };




firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const fireAuthState = authState(auth).pipe(
  shareReplay(1)
);




export const firebaseFunctions = firebase.functions();


//Settings
export const getsettings=() => {
  const ref = db.doc(`settings/XHvdaE1UmpOkTcD5uYbu`)
  return docData(ref)
}


  // get all blogs from database
export const getAllBlog =() => {
    const ref = db.collection('blog')
    return collectionData(ref, "id")
  }

  //get just one blog
export const getOneBlogFromFirebase =  (id) => {
    const ref = db.doc(`blog/${id}`)
    return docData(ref, "id")
  };

  //get blog category
export const getBlogCategoriesFromFirebase =() => {
    const ref = db.collection('blogCategory')
    return collectionData(ref, "id")
  }

  // get all digital from database
export const getAllDigital =() => {
    const ref = db.collection('digital')
    return collectionData(ref, "id")
  }

  // get all eventsfrom database
export const getAllEvent =() => {
    const ref = db.collection('events')
    return collectionData(ref, "id")
  }
  
