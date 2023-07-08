import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vivek",
    lastName: "Kumar",
    username: "VivekKumar",
    password: "vivekkumar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Harshit",
    lastName: "Yadav",
    username: "harshityadav",
    password: "harshityadav123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Parul",
    lastName: "Arya",
    username: "parularya",
    password: "parularya123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
