const router = require('express').Router()
const conn = require('./dbConnection')
const { body } = require('express-validator')
const { register } = require('./controllers/registerController')
const { login } = require('./controllers/loginController');
const { getUser } = require('./controllers/getUserController');
const { resetPassword } = require('./controllers/forgotController')
const { updatePassword } = require("./controllers/resetController");
const { upload, addProduct } = require("./controllers/productAddController");
const { viewProduct } = require("./controllers/viewProductController");
const { singleProduct } = require("./controllers/singleProductController");
const {authentication} = require("./middleware/authentication")
const vendorAddProduct = require('./controllers/productAddController');
const { sortPrice } = require('./controllers/sortPrice');
const { sortCategory } = require('./controllers/sortCategory');
const {ViewProductById,DeleteProduct,UpdateProduct} = require('./controllers/productViewController');
const {OrderHistorybyId} = require('./controllers/orderhistorybyid');
const { ratings, review } = require('./controllers/ratingController');
const {addCart, viewCart, deleteCart} =require('./controllers/cartController');
const validateReview  = require('./middleware/validateReview');



router.get("/isAuth",authentication, (req, res) => {
    res.send({ login: true, msg: "done" });
})

router.post('/register', [

    body('user_name', "The name must be of minimum 1 characters length")
         .notEmpty()
        .escape()
        .trim()
        .isLength({ min: 1 }),

    body('user_email', "Invalid email address")
        .notEmpty()
        .escape()
        .trim()
        .isEmail(),

    body('user_password', "The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),

    body('user_contact', "The number must be of minimum 10 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 10 }),

    body('user_address', "enter your address")
        .notEmpty()
        .escape()
        .trim(),

    body('user_role', "enter your role")
        .notEmpty()
        .escape()
        .trim(),
], register);

router.post('/login', [

    body('user_email', "Invalid email address")
        .notEmpty()
        .escape()
        .trim()
        .isEmail(),

    body('user_password', "The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
], login);

router.get('/getuser', authentication);

router.post("/resetPassword", [

    body('user_email', "Invalid email address")
        .notEmpty()
        .escape()
        .trim()
        .isEmail()
], resetPassword)

router.post('/updatePassword',[
    body('resetToken', "Invalid Token")
        .notEmpty()
        .isLength({ min: 4 }),

    body('user_password', "The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 })

], updatePassword)

router.post('/addProduct', upload.any('product_photo'), addProduct)

router.get("/viewProduct",authentication, viewProduct)
router.post("/viewProduct/:product_id", singleProduct)
router.get("/sort/:product_price",sortPrice)
router.get("/sortCat/:product_category",sortCategory)


router.get("/getaddress/:user_id",(req,res)=>{
    const user_id=req.params.user_id
    let sql=`select * from home_user where user_id=${user_id}`;
    conn.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

router.post("/orders", (req, res) => {
    const data={
        user_id:req.body.user_id,
        user_name:req.body.user_name,
        product_id:req.body.product_id,
        product:req.body.product,
        price:req.body.price,
        qty:req.body.qty,
        day:req.body.day, 
        payment_status: "Not paid"
    }
    let sql="INSERT INTO `orders` SET ?";
    conn.query(sql,data,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           
            res.send({msg:"Inserted Successfully"})

        }
    })
})

router.post("/changeStatus", (req, res) => {
    product_id=req.body.product_id
    let sql= `UPDATE orders SET payment_status='Paid' WHERE product_id=${product_id}`
    conn.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           
            res.send({msg:"Updated Successfully"})

        }
    })
})

router.get('/viewProduct/:id', ViewProductById)
router.delete('/deleteProduct/:id', DeleteProduct)
router.put('/updateProduct/:id', UpdateProduct)
router.get("/orderhistory/:user_id", OrderHistorybyId)
// User Product Review
router.post('/ratings', validateReview ,ratings)

// User View FeedBack
router.get('/review/:product_id', review)

// User Add Cart
router.post('/addcart', addCart)

// User View Cart
router.get('/viewcart/:user_id', viewCart)

// User delete cart
router.delete('/deleteCart/:user_id/:product_id', deleteCart)

module.exports = router;