import React from "react";

const RecordDetail = ({ record, onEditRecord }) => {
  return (
    <div className="row">
      <div className="col">{record.genre}</div>
      <div className="col">{record.movie}</div>
      <div className="col">{record.director}</div>
      <button onClick={onEditRecord} type="submit">
        Edit
      </button>
    </div>
  );
};

export default RecordDetail;
