const ApiError = require("../errors/ApiError")
const Services = require("../model/Service.model")

module.exports.createService = async (payload) => {
    const data = await Services.create(payload)
    if (!data) {
        throw new ApiError(400, "service is not created")
    }
    return data
}
module.exports.getAllServices = async (payload) => {
    const data = await Services.find({}).limit(payload)
    return data
}

module.exports.searchServices = async (payload) => {
    if (!payload.city && !payload.distance) {
        const data = await Services.find({})
        return data
    }
    if (payload.city && payload.distance) {
        const data = await Services.find({
            $and: [
                { city: payload.city, },
                { distance: payload.distance }]
        })
        return data
    } else {
        const data = await Services.find({
            $or: [
                { city: payload.city, },
                { distance: payload.distance }]
        })
        return data
    }
}


module.exports.getAServices = (payload) => {
    const data = Services.findById(payload)
    return data
}