//@ts-check
import { Schema, model } from "mongoose";

export const UserModel = model(
  "users" /* nombre de la coleccion donde se va hacer el crud */,
  /* OBLIGAR A C(create) y el U(update) a seguir esta arquitectura  */
  new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
  })
);