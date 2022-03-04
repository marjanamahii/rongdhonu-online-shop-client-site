import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviews, setReview] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:7000/reviews`)
            .then(res => res.json())
            .then(data => setReview(data))
            .finally(() => setSpinner(false));
    }, [reviews])

    return {
        reviews,
        spinner
    }
};

export default useReviews;