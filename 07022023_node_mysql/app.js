// NODE MYSQL

//TARGIL: get customer with customerNumber 114

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin1234',
    database: 'classicmodels'
});



const getCustomerByCountryOrCity = (country, city) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM customers where country = ? or city = ? ;`, [country, city], (error, results) => {
            if (error) {
                reject(error)
            } else {
                // return results; //not good
                // console.log(results)
                resolve(results)
            }
        })

    })
}


(async() => {
    try {
        const user = await getCustomerByCountryOrCity('France', 'NYC');
        console.log(user)        
    } catch (error) {
        console.log(error)
    }
})()



// getCustomerByCountryOrCity('France', 'NYC')
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err)
//     })



// const getCustomerByCountryOrCity = (country, city, cb) => {

//     connection.query(`SELECT * FROM customers where country = ? or city = ? ;`, [country, city], (error, results) => {
//         if (error) {
//             console.log(error)
//         } else {
//             // return results; //not good
//             // console.log(results)
//             cb(results)
//         }
//     })
// }

// getCustomerByCountryOrCity('France', 'NYC', (result) => {
//     console.log(result)
// });




// const getAllFromProvidedTable = (table) => {
//     connection.query(`SELECT * FROM ${table};`, (error, results) => {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log(results)
//         }
//     })
// }

// getAllFromProvidedTable('offices');




// const getCustomerById = (id) => {
//     connection.query(`SELECT * FROM customers where customernumber = ?;`, [id] , (error, results) => {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log(results)
//         }
//     })
// }

// getCustomerById(119)



// //javascript programmer way
// connection.query("SELECT * FROM customers;", (error, results) => {
//     if (error) {
//         console.log(error)
//     } else {
//         // console.log(results)
//        for (const customer of results) {
//             if(customer.customerNumber === 114){
//                 console.log(customer);
//             }
//        }
//     }
// })



// connection.query("SELECT * FROM customers;", (error, results) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(results)
//     }
// })

