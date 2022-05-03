const conn = require('../dbConnection')
/* 
const getVendorID = async (req, res) => {
    const vendor = req.params.vendor_id;
    const query = conn.execute('SELECT user_id from home_product where product_id="' + vendor_id + '"', function(err,result){
        if (err){
                    console.log(err)
                }
                else{
                    console.log(result[0].user_id)
                return res.status(200).json({ vendor: result[0].user_id })
               
                }
    })  */
    /* const query3=conn.execute('INSERT INTO `orders`(vendor_id) VALUES (?)',[
        vendor
    ],
    (error, results) => {
        if (error) {
             console.log(error)
            //return error
            return res.status(404).json({
                status: 0,
                message: "Not Found.",
            });

        }
        else(null, results)
        {
            return res.status(201).json({
                status: 1,
                message: "inseted.",
            }); 
        }
    }
    )  
}*/
/* const ViewUsers = async(req,res)=>{
    conn.execute('SELECT orders.user_name,orders.product_price ,orders.payment_status FROM orders INNER JOIN home_product ON orders.vendor_id=home_product.vendor_id ', function (err,result) {
        if (err){
            console.log(err)
        }
        else{
        //console.log(result[0].user_name )
        const name=result[0].user_name
        const price=result[0].product_price
        const status=result[0].payment_status
        return res.status(200).json({name,price,status})
       
        }
    })
} */

const ViewUsers = async(req,res)=>{
    const vendor_id = req.params.vendor_id;
    conn.execute('SELECT * FROM `orders` WHERE vendor_id="' + vendor_id + '"', function (err,result) {
        if (err){
            console.log(err)
        }
        else{
            console.log(result)
        return res.status(200).json({ products: result })
       
        }
    })
}
module.exports = {ViewUsers}