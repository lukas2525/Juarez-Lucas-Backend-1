// Mongoose

import { connect } from "mongoose";
export async function connectMongo() {
  try {
    await connect(
      "mongodb+srv://juarezlucasangel:usDQMDChSj0eHvDt@cluster0.cjvlnsd.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("plug to mongo!");
  } catch (e) {
    console.log(e);
    throw "can not connect to the db";
  }
}