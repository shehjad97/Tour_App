'use client'

import { useFirebaseInfo } from "@/providers/FirebaseProvaider";
import { useAddCommentsMutation } from "@/redux/feature/comment/commentApi";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Comment = ({ service }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [addComments, { isError }] = useAddCommentsMutation()
    const { user } = useFirebaseInfo()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (rating === null) {
            return alert('please add a rating')
        }
        const comment = event.target.comment.value;
        const review = {
            productId: service._id,
            rating, comment,
            photo: user.photoURL,
            displayName: user.displayName,
        }
        addComments(review)

        if (!isError) {
            event.target.reset()
            setRating(null)
        }
    };
    return (
        <form onSubmit={handleSubmit} className="p-4">
            <div className="flex items-center gap-4">
                <div className="text-xl font-bold">
                    <p>Rate this tour</p>
                </div>
                <div className="flex">
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={i} className="">
                                <input
                                    className="hidden"
                                    required
                                    name="rating"
                                    defaultValue={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                />
                                <FaStar
                                    className="duration-300"
                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    size={20}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        )
                    }
                    )}
                </div>
            </div>
            <div className="mt-5 flex items-center gap-4">
                <input
                    name="comment"
                    required
                    maxLength={50}
                    className="textarea textarea-bordered w-full" placeholder="Your thought"></input>
                <button className="btn btn-primary ">Submit</button>
            </div>
        </form>
    );
};

export default Comment;
