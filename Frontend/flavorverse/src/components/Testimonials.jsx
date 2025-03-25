import Testimonial from "../assets/Testimonial"

const  Testimonials = ()=>{
    return(
        <div className="testimonials flex md:flex-row flex-col md:px-10 py-20 gap-5 items-center justify-between">
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
        </div>
       
    )
}
export default  Testimonials;