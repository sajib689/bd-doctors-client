import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    const {_id,name,title,job,college,visting,call,img}= category
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-[250px]">
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
        <p>{job}</p>
        <p>{college}</p>
        <p>Visting Hours: {visting}</p>
        <p>Phone: {call}</p>
        <div className="card-actions justify-start">
          <Link to={`/appointment/${_id}`} className="btn btn-primary">Appointment Now</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
