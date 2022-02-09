const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    distance: { type: Number, required: true },
    desc: { type: String, required: true },
    photoUrl: { type: String, required: true },
    featured: { type: String, required: true },
});

const Services = mongoose.model('Services', ServicesSchema);

module.exports = Services;

