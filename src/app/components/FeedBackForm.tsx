
import { useState } from "react";
import StarRating from "./StarRating";

export default function FeedbackForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);


interface FeedbackData {
    name: string;
    email: string;
    description: string;
    rating: number;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const feedbackData: FeedbackData = { name, email, description, rating };
    console.log(feedbackData);
    alert("Feedback submitted!");
    onClose();
};

  return (
    <>
      <h3 className="text-xl font-bold mb-4">Send us your feedback</h3>
      <form onSubmit={handleSubmit} className=" space-y-4 ">
        <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div >
          <label className=" block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            placeholder="Enter your feedback here"
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows={3}
            required
          />
        </div>
       
        <div className="flex  items-center justify-between  space-x-2">
        <StarRating rating={rating} setRating={setRating} />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md "
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}