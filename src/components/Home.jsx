import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import DisplayPost from "./DisplayPost";

const Home = () => {
  const [allPost, setAllPost] = useState([]);
  const [loading, setloading] = useState(true);
  const postRef = collection(db, "post");

  useEffect(() => {
    const getPost = async () => {
      // Use getDocs instead of getDoc to retrieve all documents from the collection
      const querySnapshot = await getDocs(postRef);
      const postList = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setAllPost(postList);
      setloading(false);
    };
    getPost();
  }, []);

  return (
    <div className="container p-2" >
        <div className={"flex justify-between my-2 items-center"}>
          <h1 className="text-xl font-bold">Community Posts</h1>
          <a href={"/login"} className="bg-orange-600 text-white rounded p-2">Create your post</a>
        </div>

        {loading ? (
          <div className="flex items-center justify-center m-10">
            <img
              className="h-[500px] rounded-full"
              src="https://i.pinimg.com/originals/88/1e/97/881e975af06ff67857544c7b64e65cbc.gif"
              alt=""
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 p-2" >{
            allPost && allPost.map((post) => <DisplayPost key={post.id} post={post} />)
          }</div>
        )}
    </div>
  );
};

export default Home;
