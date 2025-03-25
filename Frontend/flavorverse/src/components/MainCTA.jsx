import ButtonNext from "../assets/ButtonNext";
import ButtonPrimary from "../assets/ButtonPrimary"
import { generate_payment_link } from "../payment-test/payment_link_test";

const MainCTA = ()=>{

    const startPay = async ()=>{
        await generate_payment_link();
    }

    return (
        <div className="cta flex justify-center md:my-30 mx-10 my-10 md:mx-40  items-center">
            <div className="text-content">
                <div className="text">
                    <h1 className="md:text-5xl text-2xl font-bold">
                        <span className="text-important">Explore</span>, Learn and 
                        <span className="text-important"> Share</span> your favourite recipes all in one place
                        <span className="text-important"> Easy</span> and <span className="text-important">Fast</span>
                    </h1>
                    <p className="font-bold md:text-xl my-5">Your Favourite all in one place to share recipes with the
                        world. Take the advantage and share your cultural inhertance and
                        make the world a little less hungry.
                    </p>
                </div>
                <div className="ctabtn">
                    <ButtonNext label={"Explore Now"} onclick={startPay}/>
                </div>
            </div>
            <div className="side-image w-[100vw] hidden md:flex justify-center">
                <img src="salad.svg" alt="" className="w-[50%]"/>
            </div>
        </div>
    )
}

export default MainCTA;