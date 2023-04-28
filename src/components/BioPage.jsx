import React from "react";
import Card from "react-bootstrap/Card";
import { Carddata } from "./data";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate, useParams } from "react-router-dom";
import user from "../icons/corporate-user-icon.svg";
import BioParagraph from "./BioParagraph";
import CardTile from "./CardTile";
const BioPage = () => {
  const { id } = useParams();
  const card = Carddata.find((card) => card.id === parseInt(id));
  const history = useNavigate();
  const goBack = () => {
    history("/");
  };
  return (
    <div className="biopage">
      <header>
        <div className="back-btn" onClick={goBack}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            fade
            style={{ marginRight: "10px" }}
          />
          Back
        </div>
        <div className="header-pic">
          <img
            src={user}
            style={{ border: "solid grey", borderRadius: "7px" }}
          />
          <div className="user-handle">
            <p>{card.title}</p>
            <div>@handle_user{card.id}</div>
          </div>
        </div>
      </header>
      <main>
        <BioParagraph
          title="Bio"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <BioParagraph title="Works at" text="Lorem ipsum dolor sit amet." />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
          }}
        >
          <BioParagraph title="Repositories" text="52" />
          <BioParagraph title="Followers" text="259" />
        </div>
        <div className="repo">
          <h5>Pinned Repositories</h5>
          {Array.from({ length: 3 }).map((_, idx) => (
            <div style={{ marginBottom: "10px", width: "100%" }}>
              <CardTile
                title="username/reponame"
                description=" Description about Repo"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BioPage;
