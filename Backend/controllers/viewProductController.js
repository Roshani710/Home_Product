const conn = require('../dbConnection')

const viewProduct = async (req, res,next) => {
    conn.execute('SELECT * FROM home_product' , function (err, product) {
        if (err) throw err;
        return res.status(200).json({products : product})      
        
        //console.log(result);
    })
}

module.exports = { viewProduct }