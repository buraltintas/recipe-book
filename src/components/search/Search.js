import { useState } from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const [filterText, setFilterText] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const showInfoHandler = (e) => {
    console.log(e.currentTarget.title);
    setShowInfo(!showInfo);
  };

  const onFilterTextHandler = (e) => {
    setFilterText(e.target.value.toLocaleLowerCase());
  };

  const items = props.items;

  const filteredItems = items.filter(
    (item) =>
      item.description.toLocaleLowerCase().includes(filterText) ||
      item.title.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : items;

  return (
    <div>
      <div className={classes.searchBar}>
        <input
          type="text"
          placeholder="Tarif ara"
          className={classes.searchInput}
          value={filterText}
          onChange={onFilterTextHandler}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={classes.searchIcon}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {!filterText && (
        <div className={classes.emptyText}>
          Yazdığınızda çıkan tarife tıklayarak detayları açabilirsiniz.
        </div>
      )}

      {filterText &&
        itemsToDisplay.map((item) => (
          <div
            key={item.id}
            className={classes.mealContainer}
            onClick={showInfoHandler}
          >
            <img src={item.image} alt="meal" />
            <div className={classes.mealText}>
              <h3 className={classes.title}>{item.title}</h3>
              <p className={classes.category}>{item.category}</p>
            </div>
            {showInfo && (
              <div className={classes.info}>
                <div className={classes.ingredients}>
                  <h3>Malzemeler:</h3>
                  <p>{item.ingredients}</p>
                </div>
                <div className={classes.howToCook}>
                  <h3>Nasıl pişirilir:</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Search;
