 
const handlerException = (err, req, res, next) => {
    return res.status(400).json({
        success: false,
        message: 'Ha ocurrido un error'
    });
};
export default handlerException;