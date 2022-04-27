const conn = require('../dbConnection')

const viewProduct = async (req, res,next) => {
    conn.execute('SELECT *FROM home_product' , function (err, product) {
        if (err) throw err;
        return res.status(200).json({products : product})      
        
        //console.log(result);
    })
}

const ViewProductByUserId = async (req, res) => {
    const user_id = req.params.user_id;
    conn.execute('SELECT * FROM `home_product` WHERE user_id="' + user_id + '"', function (err,result) {
        if (err){
            console.log(err)
        }
        else{
            console.log(result)
        return res.status(200).json({ products: result })
       
        }
    })
}
module.exports = { viewProduct ,ViewProductByUserId}