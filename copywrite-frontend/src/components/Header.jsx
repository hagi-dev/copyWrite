import React from "react";
import { getReponse } from "../redux/slice";
import { useDispatch } from "react-redux";

const Header = () => {
    const [getData, setData] = React.useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getReponse(getData));
        setData("");
    }
    const handleOnChange= (e)=>{
        let text = e.target.value;
        setData(text);
    }
  return (
    <nav className="navbar bg-danger w-100" style={{ height: "65px" }}>
      <form  onSubmit={handleSubmit} className="form-inline w-100 d-flex justify-content-center">
        <input
          style={{ width: "600px" }}
          className="form-control mr-sm-2 w-200px mx-2"
          type="search"
          onChange={handleOnChange}
          value={getData}
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success border-primary text-light bg-primary my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;
