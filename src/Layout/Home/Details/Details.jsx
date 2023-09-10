import img from "../../../assets/images/dr.jpg";
const Details = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="w-1/2 ms-5">
            <h1 className="text-5xl font-bold">Your Smile, Our Care</h1>
            <p className="py-6">
              At Healthy Living Dental, we believe in creating beautiful smiles
              while prioritizing your overall well-being. Our dedicated team of
              experienced dentists and professionals is committed to providing
              top-notch dental care in a warm and friendly environment. From
              routine check-ups to advanced treatments, we are here to address
              all your dental needs. Experience the difference of a dental
              practice that puts your health and comfort first. Schedule your
              appointment today and discover the path to a healthier, happier
              smile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
