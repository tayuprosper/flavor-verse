import { useEffect } from "react";
import MainCTA from "../components/MainCTA";
import NavBar from "../components/NavBar";
import Testimonials from "../components/Testimonials";
import Trusted from "../components/Trusted";
import { fetchaiapi } from "../payment-test/payment_link_test";

const LandingPage = () => {
 
    return (
        <>
            <NavBar/>
            <MainCTA/>
            <Trusted/>
            <Testimonials/>
        </>

    )
}

export default LandingPage;