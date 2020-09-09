import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../store/actions/alertActions";
import { getCoin, setLoading } from "../store/actions/coinActions";

interface SearchProps {
  text: string;
}

const Search: FC<SearchProps> = ({ text }) => {
  const dispatch = useDispatch();
  const [currsymbol, setCurrsymbol] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCurrsymbol(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currsymbol.trim() === "") {
      return dispatch(setAlert("Cryptocurrency symbol is required"));
    }

    dispatch(setLoading());
    dispatch(getCoin(currsymbol));
    setCurrsymbol("");
  };

  return (
    <div className="hero has-text-centered">
      <div className="hero-body">
        <div className="container">
          <form className="py-5" onSubmit={submitHandler}>
            <input
              type="text"
              className="input has-text-centered has-background-dark has-text-light mb-4"
              placeholder={text}
              style={{ maxWidth: 400, height: 50 }}
              value={currsymbol}
              onChange={changeHandler}
            />
            <button
              className="button is-primary is-fullwidth"
              style={{ maxWidth: 400, height: 50, margin: "0 auto" }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
