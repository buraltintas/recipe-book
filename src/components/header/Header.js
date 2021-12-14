import React, { useState } from "react";
import classes from "./Header.module.css";

import AddRecipe from "../add-recipe/AddRecipe";

const Header = (props) => {
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const showAddRecipeHandler = () => {
    setShowAddRecipe(!showAddRecipe);
  };

  const showMainHandler = () => {
    props.showMain();
    setShowAddRecipe(false);
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
        <div className={classes.logo}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="#868e96"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="96"
                y1="16"
                x2="96"
                y2="48"
                fill="none"
                stroke="#fa5252"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="128"
                y1="16"
                x2="128"
                y2="48"
                fill="none"
                stroke="#fa5252"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="160"
                y1="16"
                x2="160"
                y2="48"
                fill="none"
                stroke="#fa5252"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <path
                d="M48,80H208a8,8,0,0,1,8,8v96a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V88A8,8,0,0,1,48,80Z"
                fill="none"
                stroke="#868e96"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
              <line
                x1="248"
                y1="96"
                x2="216"
                y2="120"
                fill="none"
                stroke="#868e96"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="8"
                y1="96"
                x2="40"
                y2="120"
                fill="none"
                stroke="#868e96"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
            </svg>
          </div>
          <div className={classes.logoP}>
            <p>Tarif</p>
            <p>Kitabım</p>
          </div>
        </div>
        <div>
          {props.showBook && (
            <button onClick={showMainHandler} className={classes.addButton}>
              Anasayfaya Git
            </button>
          )}
          {props.showHomePage && (
            <button onClick={showMainHandler} className={classes.addButton}>
              Anasayfaya Git
            </button>
          )}
          {props.showBook && (
            <button
              className={classes.addButton}
              onClick={showAddRecipeHandler}
            >
              {!showAddRecipe ? "Yeni Tarif Ekle" : "Formu Kapat"}
            </button>
          )}
          {props.showHomePage && (
            <button
              className={classes.addButton}
              onClick={showAddRecipeHandler}
            >
              {!showAddRecipe ? "Yeni Tarif Ekle" : "Formu Kapat"}
            </button>
          )}
        </div>
      </div>
      {showAddRecipe && <AddRecipe />}
    </React.Fragment>
  );
};

export default Header;
