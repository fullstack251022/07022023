const knex = require('knex').knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'admin1234',
        database: 'classicmodels'
    }
});

(async () => {
    // try {
    //     const query = knex.select('*').where("city","=","NYC").from("customers").toQuery();
    //     console.log(query)
    //     // const customer = await knex.select('*').where("city","=","NYC").from("customers");
    //     // console.log(customer);
    // } catch (error) {
    //     console.log(error)
    // }

    try {
        
        const userId = await knex('customers').insert({
            customerNumber: 1000,
            customerName: "Sarah",
            contactLastName: "Sarah Sarah",
            contactFirstName: "Sarahhh",
            phone: 05050506451,
            addressLine1: "5557 North Pendale",
            city: "San Rafael",
            state: "CA",
            postalCode: 21240,
            country: "USA"
        })

        console.log('userId: ',userId)
    } catch (error) {
        console.log(error)
    }

  



})()