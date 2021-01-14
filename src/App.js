import { useState } from "react";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

import "./App.css";
import Message from "./Image/me.png";
import Close from "./Image/c.png";
import Send from "./Image/se.png";

function App() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  return (
    <div className="App">
      <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl fredericka text-indigo-700 font-black  tracking-wider text-center m-6 underline ">
        SearchingYard
      </h1>
      <div className="w-8 fixed  lg:fixed md:fixed xl:fixed 2xl:fixed bottom-3 right-4 lg:right-8 md:right-8 xl:right-8 2xl:right-8 lg:right-8 cursor-pointer ">
        {display ? (
          <Rotate>
            <div>
              <img src={Close} alt="X" onClick={handleDisplay} />
            </div>
          </Rotate>
        ) : (
          <Rotate>
            <div>
              <img
                src={Message}
                alt="M"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={handleDisplay}
              />
            </div>
          </Rotate>
        )}
      </div>
      <div>
        <Fade bottom big>
          <div
            className="w-56 h-2/5  bg-gray-100 absolute  lg:absolute md:absolute xl:absolute 2xl:absolute bottom-12 right-4 lg:right-8 md:right-8 xl:right-8 2xl:right-8 lg:right-8 ring-4 ring-indigo-700 ring-opacity-50 ring-offset-2 shadow-2xl border rounded-lg"
            style={{ display: display ? "block" : "none" }}
          >
            <div className="w-full bg-indigo-700 h-8 border rounded-md ">
              <h1 className="text-center pt-1 text-white">SearchingYard</h1>
            </div>

            <div className="absolute bottom-0  flex ml-1  mb-1 ">
              <input
                className="pr-4 pl-2 border border-indigo-700 rounded-lg"
                type="text"
                placeholder="Enter your Message"
              />
              <img
                src={Send}
                alt=">>"
                className="w-6  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;
