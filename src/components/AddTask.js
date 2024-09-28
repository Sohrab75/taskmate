import React, { useState } from "react";
import { Category } from "./Category";

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const [category, setCategory] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();

    if (task.id) {
      const updatedTask = taskList.map((t) =>
        t.id === task.id
          ? {
              ...t,
              name: task.name,
              time: `${date.toLocaleDateString()} -${date.toLocaleTimeString()} `,
              cat: category.cat,
            }
          : t
      );
      setTaskList(updatedTask);
      setTask({});
    } else {
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleDateString()} -${date.toLocaleTimeString()} `,
        cat: category.cat,
      };
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  };

  return (
    <section className="flex gap-2 max-w-screen-xl mx-auto">
      <Category category={category} setCategory={setCategory}/>
      <form className="max-w-md mx-auto w-1/2" onSubmit={handleSubmit}>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Add a note
        </label>
        <textarea
          id="message"
          rows="4"
          name="task"
          value={task.name || ""}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
          placeholder="Add note..."
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        ></textarea>
        <button
          type="submit"
          className="text-white my-2 p-2 rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none"
        >
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};
