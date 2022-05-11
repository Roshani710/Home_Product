const conn = require('../dbConnection')


exports.sortCategory = async (req, res) => {
    const category = req.params.product_category;
    //console.log(category)
    if (category === "1") {
        let sqll = `select * from home_product WHERE product_category = '1'`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err) 
            }
            else {
                res.send(result)
            }
        })

    }
    else if (category === '2') {
        let sqll =  `select * from home_product WHERE product_category = "2"`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })

    }
    else if (category === '3') {
        let sqll =  `select * from home_product WHERE product_category = "3"`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })
    }
    else if (category === '4') {
        let sqll =  `select * from home_product WHERE product_category = "4"`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })
    }
    
}
