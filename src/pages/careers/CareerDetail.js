import { useLoaderData, useParams } from "react-router-dom";

const CareerDetail = () => {
    const career = useLoaderData()
    return ( 
        <div className="career-details">
            <h2>Career details for {career.title}</h2>
            <p>Starting Salary {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
            </div>
        </div> 
    );
}
 
export default CareerDetail;