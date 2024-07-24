import React from 'react';
import "./Skeleton.css";

export const SkeletonCard = ({ width, height }) => {
  return (
    <div className="skeleton-card" style={{ width, height }}>
      <div className="skeleton-image" />
      <div className="skeleton-title" />
      <div className="skeleton-text" />
    </div>
  );
};
