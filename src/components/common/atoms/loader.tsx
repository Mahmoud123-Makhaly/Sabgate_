import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
const Loading = () => {
  return (
    <div className="flex-col loader">
      <ProgressSpinner />
    </div>
  );
};

export default Loading;
