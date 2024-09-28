import React from 'react';

export const Category = ({ category, setCategory }) => {
  const categories = [
    { id: 'react-option', value: 'Work', label: 'Work', icon: 'home-outline', bgColor: 'bg-lime-300', textColor: 'text-lime-800' },
    { id: 'grocery-option', value: 'Grocery', label: 'Grocery', icon: 'leaf-outline', bgColor: 'bg-green-300', textColor: 'text-green-800' },
    { id: 'sport-option', value: 'Sport', label: 'Sport', icon: 'baseball-outline', bgColor: 'bg-blue-300', textColor: 'text-blue-800' },
  ];

  return (
    <div>
      <h3 className="mb-5 text-md font-medium text-gray-900 dark:text-white">
        Choose category:
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-4">
        {categories.map((cat) => (
          <li key={cat.id}>
            <input
              type="radio"
              id={cat.id}
              value={cat.value}
              className="hidden peer"
              name="category"
              onChange={(e) => setCategory({ ...category, cat: e.target.value })}
            />
            <label
              htmlFor={cat.id}
              className={`inline-flex items-center justify-between w-full p-2 text-gray-500 ${cat.bgColor} border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50`}
            >
              <div className={`block ${cat.textColor}`}>
                <ion-icon name={cat.icon}></ion-icon>
                <div className="w-full text-sm font-semibold">{cat.label}</div>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
