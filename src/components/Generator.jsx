import React, { useState } from "react";
import { CircularIndeterminate } from "../loadingAnimation";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth, db, storage } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const API_TOKEN = "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";

const Generator = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [prompt, setPrompt] = useState(null);
  const [dImage, setDImage] = useState(null);

  const [user] = useAuthState(Auth);
  const postRef = collection(db, "post");

  const uploadImage = async () => {
    if (prompt != null && dImage != null) {
      const imageRef = ref(storage, `images/${dImage.name + v4()}`);
      uploadBytes(imageRef, dImage)
        .then(() => {
          getDownloadURL(imageRef).then((url) => {
            addDoc(postRef, {
              prompt: prompt,
              image: url,
              logo: user.photoURL,
              user: user.displayName,
            });
            alert("posted")
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setDImage(new File([blob], "art.png", { type: "image/png" }));
    setLoading(false);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = output;
    link.download = "art.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mt-3 imageGen al-c">
      <h1>
        Stable <span>Diffusion</span>
      </h1>
      <p>
        Pellentesque vulputate dignissim enim, et sollicitudin massa
        pellentesque ut. Proin luctus dui ut sem varius eleifend.
      </p>
      <form className="generate-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          placeholder="type your prompt here..."
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      <div>
        {loading && (
          <div className="loading">
           <img src="https://i.pinimg.com/originals/88/1e/97/881e975af06ff67857544c7b64e65cbc.gif" alt="loading" />
          </div>
        )}
        {!loading && output && (
          <div className="result-image">
            <img src={output} alt="art" />
            <div className="action">
              <button onClick={downloadImage}>
                <DownloadIcon />{" "}
              </button>
              {user && (
                <button onClick={uploadImage}>
                  <ShareIcon />{" "}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generator;
