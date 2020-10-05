import { MongoClient } from "mongodb";

const connectDb = async () => {
  var client = await MongoClient.connect(
    "mongodb+srv://functions:hestehest1234@cluster0-bau6k.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

  return client.db("lysthusdata");
};

export default connectDb;
