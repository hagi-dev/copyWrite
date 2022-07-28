import React from "react";
import { useSelector} from "react-redux";

const Body = () => {
  const style = {
    width: "400px",
    paddingLeft: "10px",
  };
  const response = useSelector(state => state.text.response);
  const error = useSelector(state => state.text.error);

  return (
    <div
      className=" bg-white mx-auto mt-5  px-5 py-5"
      style={{ height: "500px", width: "900px" }}
    >
        {console.log("respuesta de server",response[0])}
      <h3 className="mb-5">Results:</h3>
      <p style={{textAlign:"center"}}>{error}</p>
      <div  className={`row-response ${error!==""?"d-none":""} px-5 d-flex flex-wrap justify-content-center`}>
        <input
          className="row border border-secondary pl-4 rounded"
          placeholder="result 3"
          value={response[2]}
          disabled="true"
          style={style}
        />
        <input
          className="row border border-secondary pl-4 mt-2 rounded"
          placeholder="result 2"
          value={response[1] }
          style={style}
          disabled="true"
        />
        <input
          className="row border border-secondary pl-4 mt-2 rounded"
          placeholder="result 1"
          value={response[0]}
          style={style}
          disabled="true"
        />
      </div>
    </div>
  );
};

export default Body;
