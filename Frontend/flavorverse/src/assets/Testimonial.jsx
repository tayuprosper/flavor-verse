const Testimonial = ({ img_link, info }) => {
    return (
        <div className="testimonial-card bg-white p-5 rounded-lg shadow-xl">
            <div className="testimonial-text mb-5 text-lg">
                <p>
                    "Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Mollitia libero inventore
                    adipisci, dignissimos provident cupiditate dicta
                    natus quis consequatur iusto minima hic ea distinctio 
                    animi ipsum a perferendis labore sequi impedit rerum!"
                </p>
            </div>
            <div className="profile-info flex items-center gap-4">
                <div className="avatar border-2 rounded-full p-1">
                    <img src="user-black.svg" alt="" className="w-10" />
                </div>
                <div className="personal-info">
                    <p className="name font-bold">John Doe</p>
                    <p className="occupation text-gray-500 font-semibold">Full time chef - Bureau</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;