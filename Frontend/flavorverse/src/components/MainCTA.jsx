import ButtonNext from "../assets/ButtonNext";
import ButtonPrimary from "../assets/ButtonPrimary"
import { generate_payment_link } from "../payment-test/payment_link_test";

const MainCTA = ()=>{

    const startPay = async ()=>{
        await generate_payment_link();
    }

    return (
        <div className="cta flex justify-center my-30 mx-40  items-center">
            <div className="text-content">
                <div className="text">
                    <h1 className="text-5xl font-bold">
                        <span className="text-important">Explore</span>, Learn and 
                        <span className="text-important"> Share</span> your favourite recipes all in one place
                        <span className="text-important"> Easy</span> and <span className="text-important">Fast</span>
                    </h1>
                    <p className="font-bold text-xl my-5">Your Favourite all in one place to share recipes with the
                        world. Take the advantage and share your cultural inhertance and
                        make the world a little less hungry.
                    </p>
                </div>
                <div className="ctabtn">
                    <ButtonNext label={"Explore Now"} onclick={startPay}/>
                </div>
            </div>
            <div className="side-image w-[100vw] flex justify-center">
                <img src="salad.svg" alt="" className="w-[50%]"/>
            </div>
        </div>
    )
}

export default MainCTA;