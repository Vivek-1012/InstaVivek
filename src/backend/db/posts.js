import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Hello i am Adarsh",
      userPic:`https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Girl-1.jpeg`,
       postPic:`https://images.unsplash.com/photo-1613323593608-abc90fec84ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`,
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"life full of wonders",
    website:"happines.com",
    
  },
  {
    _id: uuid(),
    content:
      "Hello i am vivek",
      userPic:`https://i.pinimg.com/736x/d1/58/7f/d1587f704853ad5358aaf214779dee9d.jpg`,

      likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "VivekKumar",
    createdAt: formatDate(),
    bio:"happy life",
    website:"happines.com",
    updatedAt: formatDate(),
  },
  
  {
    _id: uuid(),
    content:
      "Hie i am vivek",
    userPic:`https://i.pinimg.com/736x/d1/58/7f/d1587f704853ad5358aaf214779dee9d.jpg`,
 postPic:`https://i.pinimg.com/474x/69/44/39/694439b3031503a7564eda9e24f673eb.jpg`,
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "VivekKumar",
    createdAt: formatDate(),
    bio:"happy Life",
    website:"happines.com",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    userPic:`https://i.pinimg.com/474x/94/f1/c2/94f1c21e7e57eb2beb87aa70fe35c231.jpg`,
    
    content:
      "Hello i am Harshit",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "harshityadav",
    createdAt: formatDate(),
    bio:"Honesty Is the best policy",
    website:"happines.com",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Hello i am Parul",
      userPic:`https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Girl-5.jpeg`,
      postPic:`https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg`,
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "parularya",
    createdAt: formatDate(),
    bio:"Queen Of my World",
    website:"happines.com",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "happy",
      userPic:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlUMPqVhHgyPKKgMrM5dOdhhRDNeYcjgZwg&usqp=CAU`,
      postPic:`https://blog.hubspot.com/hubfs/image-png-Jun-15-2023-03-13-10-6051-PM.png`,
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Jameshill",
    createdAt: formatDate(),
    bio:"Life is strange",
    website:"happines.com",
    updatedAt: formatDate(),
  }
];
