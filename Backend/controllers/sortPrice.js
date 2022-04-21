const conn = require('../dbConnection')


exports.sortPrice = async (req, res) => {
    const price = req.params.product_price;
    if (price === '10') {
        let sqll = `select * from home_product WHERE product_price <= 10`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })

    }
    else if (price === '10_50') {
        let sqll = `select * from home_product WHERE product_price >=10 && product_price <= 50`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })

    }
    else if (price === '50') {
        let sqll = `select * from home_product WHERE product_price >= 50`;
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
