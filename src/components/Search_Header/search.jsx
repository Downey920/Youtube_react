import React, { memo, useRef } from "react";
import styles from "./search.module.css";

const Search = memo(props => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    props.onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.input}
        ref={inputRef}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="./images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
});

export default Search;
