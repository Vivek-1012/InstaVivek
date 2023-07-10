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
    userPic:`https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Girl-1.jpeg`,
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"life full of wonders",
    website:"happines.com",
  },
  {
    _id: uuid(),
    firstName:"Vivek",
    userPic:`https://i.pinimg.com/736x/d1/58/7f/d1587f704853ad5358aaf214779dee9d.jpg`,
    lastName: "Kumar",
    username: "VivekKumar",
    password: "vivekkumar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"happy life",
    website:"happines.com",
  },
  {
    _id: uuid(),
    firstName: "Harshit",
    userPic:`https://i.pinimg.com/474x/94/f1/c2/94f1c21e7e57eb2beb87aa70fe35c231.jpg`,
    lastName: "Yadav",
    username: "harshityadav",
    password: "harshityadav123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Honesty Is the best policy",
    website:"happines.com",
  },
  {
    _id: uuid(),
    firstName: "Parul",
    userPic:`https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Girl-5.jpeg`,
    lastName: "Arya",
    username: "parularya",
    password: "parularya123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Queen Of my World",
    website:"happines.com",
  },
];
