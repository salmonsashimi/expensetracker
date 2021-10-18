import { initializeApp } from "@firebase/app";
import { getDatabase, ref, get, once, set, remove, update, onValue, push } from "@firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIRE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);











export default database;
// push(ref(database, 'expenses'), {
//     description: 'Gas Bill',
//     amount: 30,
//     note: 'Gas for home.',
//     createdAt: 12031023,
// })

// onValue(ref(database, 'expenses'), (snapshot) => {
//     const expenses = [];
//     // console.log(snapshot.val())
//     snapshot.forEach((childSnapshot) => {
//         // console.log(childSnapshot.val())
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })


// // setup expenses with 3 items: desc, note, amount, createdAt


// // onValue(ref(database), (snapshot) => {
// //     const value = snapshot.val();
// //     console.log(`${value.name} is a ${value.job.title}.`)
// // })

// // setTimeout(() => {
// //     update(ref(database), {
// //         name: 'whaeoifsdnviowaensfo'
// //     }), 9000
// // })
// // setTimeout(() => {
// //     update(ref(database), {
// //         name: 'asdfhiashdfoihaiwe'
// //     }), 12000
// // })

// // set(ref(database), {
// //     name: 'samuel cheung',
// //     age: 27,
// //     stressLevel: 7,
// //     job: {
// //         title: 'software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'San Francisco',
// //         country: 'United States'
// //     }
// // // })
// // stress levle 9
// // company to amazon
// // city to seattle


// // update(ref(database), {
// //     stressLevel: 9,
// //     'job/company': 'Google'
// // })


// // set(ref(database, 'attributes'), {
// //     height: 1.01021021,
// //     weight: 1000
// // }).then(() => {
// //     console.log('data is saved')
// // }).catch((e) => {
// //     console.log('something went wrong', e)
// // })

// // update(ref(database), {
// //     location: { country: 'malaysia' }
// // })
// // remove(ref(database, 'isSingle'))
// //     .then(() => {
// //         console.log('successfully removed`')
// //     })
// //     .catch((e) => {
// //         console.log('somethign went wrong', e)
// //     })
// console.log('request was sent to update data')
