import React, { useEffect, useState } from "react";
import axios from "axios"

const Searchresults = () => {

  const [response, setResponse] = useState("");
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setResponse(JSON.stringify(res.data,undefined, 2)))
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="card mb-5">
            <div className="card-body">
                <pre>
                    {response}
                </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchresults;
