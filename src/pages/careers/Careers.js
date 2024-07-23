import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
    const careers = useLoaderData();
    return (
        <div className="careers">
           {
            careers.map(career => <Link to={`${career.id}`} key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>)
           }
        </div>
    );
}
 
export default Careers;


