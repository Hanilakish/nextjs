import React from "react";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
  let { id } = useParams();

  return (
    <>
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <div className="p-10 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Post Detail</h1>
          <p className="text-lg text-gray-800 mb-2">Viewing details for post ID: {id}</p>
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;
