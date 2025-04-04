const asyncHandler = (requestHandler) => {
    (err, req, res, next) => {
        Promise.resolve(requestHandler(err, req, res, next)).catch((error) => next(error))
    }
}

export {asyncHandler}

// const asyncHandler = (fn) => async (err, req, res, next) => {
//     try {
//         await fn(err, req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }
