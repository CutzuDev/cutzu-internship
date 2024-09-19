import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "../../css/styles/Skeleton.css";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div className="card-skeleton" key={index}>
        <div className="left-col">
          <Skeleton square height={120} />
        </div>
        <div className="circle__skeleton">
          <Skeleton circle width={40} height={40} />
        </div>
        <FaCheckCircle className="check-circle__skeleton" />
        <div className="name__skeleton">
          <Skeleton width={100} />
        </div>
        <div className="code__skeleton">
          <Skeleton width={80} />
        </div>
      </div>
    ));
};

export default CardSkeleton;
