import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Badge = () => {
  const data = useSelector((state) => state.todo);

  return (
    <>
      <div id="badge" className="float-end">
        <span className="badge bg-secondary mx-2">Completed</span>
      </div>
    </>
  );
};

export default Badge;
