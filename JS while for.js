// let age_1 = 10 
// let age_2 = 18
// let age_3 = 60

// if (age_1 < age_2) {
//     console.log("You don’t have access cause your age is " + age_1 + ". It’s less then")
// } else {
//     console.log("Technical work")
// }

// if (age_1 >= age_2 && age_1 < age_3) {
//     console.log("Welcome!")
// } else {
//     console.log("Technical work")
// }

// if (age_1 > age_3) {
//     console.log("Keep calm and look Culture channel")
// } else {
//     console.log("Technical work")
// }

// console.log(true && true);
// console.log(true && false);

let item1 = 0;

// if(item1 > 3 && item2 == 109 || item3 == 50) {
//     console.log("Idi kyshat")
// } else {
//     console.log("Hodi golodniy")
// }


// let temperarure = 0

// while(temperarure < 40) {

//     if (temperarure < 10) {
//         console.log("temp =", temperarure, "holodno")
//     } else if (temperarure >=10 && temperarure < 30) {
//         console.log ("temp =", temperarure, "norm")
//     } else {
//         console.log("temp =", temperarure, "kapec")
//     }
//     temperarure++
// }


// for (let temperarure = 0; temperarure < 10; temperarure += 3) {
//     if (temperarure < 3) {
//                 console.log("temp =", temperarure, "holodno")
//             } else if (temperarure >=3 && temperarure < 7) {
//                 console.log ("temp =", temperarure, "norm")
//             } else {
//                 console.log("temp =", temperarure, "kapec")
//             }
// }



let names = ['Alex',
            'Marina',
            'Victor',
            'Tommy',
            'Anna',
            'Vika',
            'Nika',
            'Elena',
            'Tonny',
            'Mke',
            'Glebb',
            'Stiven',
            'Jhonny',
            'Jimmy']

for (let item1 in names) {
    if (item1 % 2 == 0) {
    console.log(item1, names[item1] )
}
}

let items = names.length;
console.log(items)