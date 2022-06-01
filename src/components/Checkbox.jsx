import React from "react";
import checkBoxData from "./checkBoxData";

const Checkbox = () => {
  //   console.log("grid created");
  return (
    <div className="overflow-y-auto overflow-x-hidden h-[100%] bg-white">
      {checkBoxData.map((e) => {
        // console.log(e);
        return <Check key={e.id} e={e}></Check>;
      })}
    </div>
  );
};

const Check = ({ e }) => {
  // console.log(end);
  return (
    <div>
      <div className="checkbox text-left p-4">
        <h3 className="text-left font-bold mb-2">{e.head}</h3>
        {e.categories.map((val) => {
          return (
            <div className="flex w-64">
              <div className="flex-1">
                <input type="checkbox" />
                <span className="tag text-sm text-blue-600 "> {val} </span>
              </div>
              <div className="flex-none  text-center bg-blue-100 w-5 m-1 rounded shadow-lg text-sm">
                {Math.floor(Math.random() * 100)}
              </div>
            </div>
          );
        })}
        {/* <div className="flex w-64">
          <div className="flex-1">
            <input type="checkbox"/> part time jobs 
          </div>
          <div className="flex-none  text-center bg-blue-100 w-5 m-1 rounded shadow-lg text-sm">{Math.floor(Math.random()*100)}</div>

        </div>
        <div className="flex w-64">
          <div className="flex-1">
            <input type="checkbox"/> Remote jobs 
          </div>
          <div className="flex-none  text-center bg-blue-100 w-5 m-1 rounded shadow-lg text-sm">{Math.floor(Math.random()*100)}</div>

        </div>
        <div className="flex w-64">
          <div className="flex-1">
            <input type="checkbox"/> contract 
          </div>
          <div className="flex-none  text-center bg-blue-100 w-5 m-1 rounded shadow-lg text-sm">{Math.floor(Math.random()*100)}</div>

        </div>
        <div className="flex w-64">
          <div className="flex-1">
            <input type="checkbox"/> Training Jobs 
          </div>
          <div className="flex-none text-center bg-blue-100 w-5 m-1 rounded shadow-lg text-sm">{Math.floor(Math.random()*100)}</div>

        </div> */}
      </div>
    </div>
  );
};

export default Checkbox;
