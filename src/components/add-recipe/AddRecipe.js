import React, { useRef, useState } from "react";
import classes from "./AddRecipe.module.css";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onImageChange = (e) => {
    setImage(e.target.value);
  };

  const onIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const nameRef = useRef("");
  const titleRef = useRef("");
  const imageRef = useRef("");
  const ingredientsRef = useRef("");
  const descriptionRef = useRef("");

  async function postRecipeHandler(meals) {
    const response = await fetch(
      "https://what-a-recipe-book-default-rtdb.firebaseio.com/meals.json",
      {
        method: "POST",
        body: JSON.stringify(meals),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const addRecipeHandler = (e) => {
    e.preventDefault();

    const recipeData = {
      title: titleRef.current.value,
      name: nameRef.current.value,
      image: imageRef.current.value,
      ingredients: ingredientsRef.current.value,
      description: descriptionRef.current.value,
      id: Math.random(),
    };

    postRecipeHandler(recipeData);

    setName("");
    setDescription("");
    setImage("");
    setIngredients("");
    setTitle("");

    setDone(true);

    setTimeout(() => {
      setDone(false);
    }, 2000);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classes.AddRecipeContainer}>
      {!done ? (
        <form className={classes.form} onSubmit={addRecipeHandler}>
          <label htmlFor="name">İsminiz</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            ref={nameRef}
            value={name}
            onChange={onNameChange}
          />
          <label htmlFor="title">Yemeğin adı</label>
          <input
            type="text"
            required
            name="title"
            ref={titleRef}
            value={title}
            onChange={onTitleChange}
          />
          <label htmlFor="image">Yemeğin resmi (URL)</label>
          <input
            type="url"
            name="image"
            className={classes.upload}
            ref={imageRef}
            value={image}
            onChange={onImageChange}
          />
          <div className={classes.descAndCook}>
            <div className={classes.ingcontainer}>
              <label htmlFor="ingredients">Malzemeler</label>
              <textarea
                type="text"
                id="ingredients"
                className={classes.ingredients}
                required
                ref={ingredientsRef}
                value={ingredients}
                onChange={onIngredientsChange}
              />
            </div>
            <div className={classes.descontainer}>
              <label htmlFor="description">Nasıl pişirilir?</label>
              <textarea
                type="text"
                id="description"
                className={classes.description}
                required
                ref={descriptionRef}
                value={description}
                onChange={onDescriptionChange}
              />
            </div>
          </div>
          <div>
            <button className={classes.addButton}>Tarifi Ekle</button>
            <button
              type="button"
              className={classes.addButton}
              onClick={reloadPage}
            >
              Kitabı Güncelle
            </button>
          </div>
        </form>
      ) : (
        <div className={classes.added}>
          <h1>Tarifiniz eklendi!</h1>
        </div>
      )}
    </div>
  );
};

export default AddRecipe;
