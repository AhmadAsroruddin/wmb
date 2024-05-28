import Login from "../../authentication/components/login";
import AboutUs from "./aboutUs";
import ContactUs from "./contactUs";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Testimoni from "./testimoni";


const home = ()=>{
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs/>
            <Testimoni/>
            <ContactUs/>
            <Login/>
            <Footer/>
        </div>
    )
}

export default home;