import React from 'react';

const TodoForm = ({ handleSubmit, setTitle, setDescription, setStatus, title, desc, status, buttonText }) => {
    return (
        <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="inputGroup grid">
                <label htmlFor="todo">Enter todo title</label>
                <input
                    type="text"
                    className="p-3 rounded-md border"
                    placeholder="Enter todo title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            {/* Description */}
            <div className="inputGroup grid my-3">
                <label htmlFor="desc">Description</label>
                <input
                    type="text"
                    className="p-3 rounded-md border"
                    placeholder="Enter todo description"
                    value={desc}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            {/* Status */}
            <div className="inputGroup">
                <label htmlFor="status">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border w-full p-3 rounded-md"
                >
                    <option value="">Select status</option>
                    <option value="NOTSTARTED">Not started</option>
                    <option value="INPROGRESS">In progress</option>
                    <option value="COMPLETED">Completed</option>
                </select>
            </div>

            {/* Submit Button */}
            <div className="submitBtn my-3">
                <button className="bg-blue-600 px-8 py-3 text-white rounded-md font-bold hover:bg-blue-500 transition shadow-md">
                    {buttonText}
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
