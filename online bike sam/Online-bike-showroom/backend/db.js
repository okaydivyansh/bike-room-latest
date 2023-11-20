const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://samriddhitiwari2021:somikhushiyash@cluster0.6izo9av.mongodb.net/bikeshowroom?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        const fetched_data = await mongoose.connection.db.collection("bikes").find({}).toArray();
        const bike_type = await mongoose.connection.db.collection("bike_type").find({}).toArray();

        global.bikes = fetched_data;
        global.bike_type = bike_type;
    } catch (err) {
        console.error(err);
    }
};

module.exports = mongoDB;
