import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  const myArray = [1, 2, [2.5, 2.7, 3], 4, 5];
  let [, , [third1, , third2], , forth] = myArray;

  const point = [1, 2];
  let [x, y] = point;
  [x, y] = [y, x];

  return (
    <div className="App">
      {`${third1} - ${third2} - ${forth}\n${x} - ${y}`}
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
