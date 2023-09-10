import banner from '../../../assets/images/d.webp'
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className='space-y-5 w-1/2'>
            <h1 className="text-6xl font-bold">Welcome to </h1>
            <br />
            <span className='text-7xl font-[800]'>Mr. DR</span> 
            <br />
           <h1 className='text-6xl font-bold'> Website!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
