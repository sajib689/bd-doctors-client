import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import dr from '../../src/assets/images/dr.webp'

const About = () => {
  return (
   <div>
    <Navbar></Navbar>
     <div className="bg-gray-100 p-4 mt-20 mb-20">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={dr}// Replace with your image URL
          alt="Doctor's Image"
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />
        <h1 className="text-3xl font-semibold mb-2">Dr. Quddus</h1>
        <p className="text-gray-600">Specialty: MBBS (CMC), DTCD (BSMMU)</p>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          feugiat lectus. Nullam tristique, justo at bibendum auctor, dolor
          sem laoreet tortor.
        </p>
      </div>
    </div>
    <Footer></Footer>
   </div>
  );
};

export default About;
