import React from 'react';

const CardItems = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 text-red-500 shadow  rounded-lg">
      <h3 className="text-gray-700 dark:text-gray-300 text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</p>
    </div>
  );
};

export default CardItems;
