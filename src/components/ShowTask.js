/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleEdit = (id)=>{
        const selectedTask =taskList.find((t) => t.id === id)
        setTask(selectedTask)
    }
    const handleDelete = (id)=>{
        const updatedTask = taskList.filter((t)=> t.id !== id)
        setTaskList(updatedTask)
        console.log(updatedTask);
    }
  return (
    <>
    <section className="bg-gray-200 p-4 my-4 max-w-screen-xl mx-auto">
      <div className="flex justify-between p-2 bg-blue-500 items-center">
        <span>Count-{taskList.length}</span>
        <button
        onClick={() => setTaskList([])}
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Clear All
        </button>
      </div>
      <div className="flex justify-center items-center my-4 flex-wrap gap-2">
        {taskList &&
          taskList.map((task) => (
            <div key={task.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h4>{task.name}</h4>
              <p className="my-3">{task.time}</p>
              <div className="flex justify-between items-center">
                <span>{task.cat}</span>
                <ion-icon onClick={() => handleEdit(task.id)} name="create-outline"></ion-icon>
                <ion-icon onClick={()=> handleDelete(task.id)} name="trash-outline"></ion-icon>
              </div>
            </div>
          ))}
      </div>
    </section>
    </>
  );
};
