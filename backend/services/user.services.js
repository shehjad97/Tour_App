const User = require("../model/user.model")

const createUser = async (payload) => {
    const uid = payload.uid
    const isExist = await User.findOne({ uid })
    if (isExist) {
        return isExist
    }
    const data = await User.create(payload)
    if (!data) {
        throw new Error("user is not created")
    }
    return data
}
const getUsers = async () => await User.find({})

const getUser = async (payload) => {
    const data = await User.findById(payload)
    return data
}

module.exports = {
    createUser, getUser, getUsers
}