import React, { useEffect, useState } from "react";
import Book from "./components/book/Book";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";
import image from "./menu.png";

import Header from "./components/header/Header";
import Search from "./components/search/Search";

function App() {
  const [showBook, setShowBook] = useState(false);
  const [mealList, setMealList] = useState([]);
  const [showHome, setShowHome] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  const showBookHandler = () => {
    setShowBook(!showBook);
  };

  const showMain = () => {
    setShowBook(false);
    setShowHome(true);
    setShowSearch(false);
  };

  const showSearchHandler = () => {
    setShowSearch(true);
    setShowHome(false);
  };

  function fetchMeals() {
    fetch("https://what-a-recipe-book-default-rtdb.firebaseio.com/meals.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const loadedMeals = [];

        for (const key in data) {
          loadedMeals.push({
            id: key,
            title: data[key].title,
            name: data[key].name,
            ingredients: data[key].ingredients,
            description: data[key].description,
            image: data[key].image,
            category: data[key].category,
          });
        }

        setMealList(loadedMeals);
      });
  }

  useEffect(() => {
    fetchMeals();
    return () => {};
  }, []);

  return (
    <div>
      <Header
        showMain={showMain}
        showBook={showBook}
        showHomePage={showSearch}
      />
      {!showBook && showHome && (
        <main className={classes.main}>
          <img
            src={image}
            className={classes.img}
            alt="a woman illustration looking to menu in kitchen"
          />
          <h1>Buse'nin yemek tarifi kitabına hoş geldiniz. </h1>
          <h3 className={classes.mainDesc}>
            Tariflere hızlıca ulaşabilir veya kitabın sayfalarında lezzetli bir
            gezintiye çıkabilirsiniz.
          </h3>
          <div className={classes.buttons}>
            <button
              onClick={showSearchHandler}
              className={classes.searchButton}
            >
              Hızlı Tarif Bul
            </button>
            <button onClick={showBookHandler} className={classes.bookButton}>
              Kitaba Git
            </button>
          </div>
        </main>
      )}
      {showSearch && <Search items={mealList} />}
      {showBook && <Book meals={mealList} />}
      <Footer />
    </div>
  );
}

export default App;
