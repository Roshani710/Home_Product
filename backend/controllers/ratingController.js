const conn = require('../dbConnection')

const ratings = async (req, res) => {
    const product_id = req.params.product_id;
    let sqll = `select * from home_product where product_id=${product_id}`;
    conn.query(sqll, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            const review_description = req.body.review_description;
            const review_star = req.body.review_star;
            const user_id = req.body.user_id;
            const product_id = result[0].product_id
            const user_name = req.body.user_name;
            console.log(product_id)
            let query = "INSERT INTO `home_review`(`user_id`, `user_name`, `product_id`, `review_star`, `review_description`) VALUES (?, ?, ?, ?, ?)";
            conn.query(query, [user_id, user_name, product_id, review_star, review_description], (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(404).json({
                        status: 0,
                        message: "Not Found.",
                    });
                }
                else {
                    return res.status(200).json({
                        status: 1,
                        message: "Successfully inserted.",
                    });
                }

            });
        }
    })
}

const review = async (req, res) => {
    const product_id = req.params.product_id;
    const user_id = req.params.user_id;
    let query = "SELECT * FROM `home_review` where (product_id = ?)"
    conn.query(query, [product_id, user_id], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(404).json({
                status: 0,
                message: "Not Found.",
            });
        }
        else {
            //console.log(result)
            return res.status(200).json({
                response: result
            });
        }
    });
}

const randReview = async (req, res) => {
    const product_id = req.params.product_id;
    let query = "SELECT * FROM home_review WHERE product_id=? ORDER BY RAND() LIMIT 3"
    conn.query(query, [product_id], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(404).json({
                status: 0,
                message: "Not Found.",
            });
        }
        else {
            //console.log(result)
            return res.status(200).json({
                response: result
            });
        }
    });
}

module.exports = { ratings, review, randReview }
