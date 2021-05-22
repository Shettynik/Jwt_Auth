
exports.getPrivateData = async (req, res, next) => {
    res.status(200).json({
        sucess: true,
        data: "You have got access to private route"
    })
}