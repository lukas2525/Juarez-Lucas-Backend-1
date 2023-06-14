//@ts-check
import express from 'express';
import { UserModel } from '../models/users.models.js';
export const routerUsers = express.Router();

routerUsers.get('/', async (req, res) => {
  try {
    // YA ESTA AISLADO EN SU CAPA
    const users = await UserModel.find();
    return res.status(200).json({
      status: 'success',
      msg: 'listado de usuarios',
      data: users,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      status: 'error',
      msg: 'something went wrong :(',
      data: {},
    });
  }
});
