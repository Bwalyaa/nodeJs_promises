import fs from "fs"
import { resolve } from "path"


// const lateVerdoppler = (number) => {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             if (number !== number) {
//                 reject(err)
//             } else {
//                 const zahlVerdoppeln = number * 2
//                 resolve(verdoppelteZahl)
//             }
//         })
//     }, 2000)
// } 

// const lateVerdoppler = (number) => {
//     return new Promise((resolve, reject)=> {
//         const sum = number * 2
//     })
// }

const lateVerdoppler = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number !== 'number') {
                reject(new Error("Ungültige Eingabe. Bitte geben Sie eine Zahl ein."));
            } else {
                const verdoppelteZahl = number * 2;
                resolve(verdoppelteZahl);
            }
        }, 2000);
    });
};


lateVerdoppler(10).then((result) => {
        console.log("Es hat funktioniert.", result);
    })