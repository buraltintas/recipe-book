import React from "react";
import HTMLFlipBook from "react-pageflip";
import classes from "./Book.module.css";

function Book(props) {
  const meals = props.meals;

  return (
    <div className={classes.container}>
      <HTMLFlipBook
        showCover={true}
        width={350}
        height={550}
        className={classes.bookContainer}
      >
        <div className={classes.cover}>
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
              <p>Kitab??m</p>
            </div>
          </div>
        </div>

        {meals.map((meal) => (
          <section className={classes.page} key={meal.id}>
            <div className={classes.pageHeader}>
              <img src={meal.image} alt="meal" />
              <h2>{meal.title}</h2>
            </div>
            <div className={classes.author}>
              <h4>Kimden: </h4>
              <h4>{meal.name}</h4>
              <h4 className={classes.category}>Kategori: </h4>
              <h4>{meal.category}</h4>
            </div>
            <div className={classes.pageContainer1}>
              <div className={classes.ingredients}>
                <h3>Malzemeler:</h3>
                <p>{meal.ingredients}</p>
              </div>
            </div>
            <div className={classes.howToCook}>
              <h3>Nas??l pi??irilir:</h3>
              <p>{meal.description}</p>
            </div>
          </section>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default Book;
