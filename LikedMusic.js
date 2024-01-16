import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function LikedMusic({ music }) {
  const [likedMusic, setLikedMusic] = useState([]);
  const navigate = useNavigate();

  const deleteAllLikedMusic = () => {
    localStorage.setItem("likedMusic", "[]");
    navigate("/");
  };

  useEffect(() => {
    const localLikedMusic = JSON.parse(localStorage.getItem("likedMusic")) || [];
    console.log(localLikedMusic);
    setLikedMusic(localLikedMusic);
  }, []);

  return (
    <div>
      {likedMusic.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="py-5 text-center">
                You don't have any liked music yet!
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-danger text-center py-3">
            Your Liked Music <i className="bi bi-heart-fill text-danger"></i>
          </h1>
        </div>
      )}

      <div className="container">
        <div className="row">
          {likedMusic.map((element) => {
            return <Card key={element.id} element={element} />;
          })}
        </div>
        <div className="row">
          <div className="col">
            {likedMusic.length === 0 ? (
              <div className="text-center">
                <i className="bi bi-emoji-frown fs-1"></i>{" "}
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center mt-3">
                <button
                  onClick={deleteAllLikedMusic}
                  className="btn btn-outline-danger me-2"
                >
                  Delete All Liked Music
                </button>
                <i className="bi bi-music-note-fill fs-2 text-success"></i>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikedMusic;
