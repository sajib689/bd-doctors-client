import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Error404 from './Error404/Error404';

const Error = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Error404></Error404>
           <Footer></Footer>
        </div>
    );
};

export default Error;