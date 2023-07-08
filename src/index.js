import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { PostProvider } from "./context/PostsContext";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import BookmarkPage from "./pages/BookmarkPage";
import { BookmarkProvider } from "./context/BookmarkContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      
     
    <PostProvider>
    <UserProvider>
    <BookmarkProvider>
    <App />
    </BookmarkProvider>
    </UserProvider>
    </PostProvider>

    </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
