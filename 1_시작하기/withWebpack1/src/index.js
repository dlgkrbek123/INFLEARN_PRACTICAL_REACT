import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const Container = () => {
  return (
    <div>
      <p>버튼을 클릭해 주세요.</p>
      <Button label="좋아요" />
      <Button label="싫어요" />
    </div>
  );
};

const domContainer = document.getElementById("root");
ReactDOM.render(<Container />, domContainer);
