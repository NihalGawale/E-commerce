const getAllProducts = async(req,res) => {
    res.status(200).send("GetAllProducts function is called");
}

module.exports = {getAllProducts};