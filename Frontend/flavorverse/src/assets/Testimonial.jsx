const Testimonial = ({ img_link, info }) => {
    return (
        <div className="testimonial-card bg-white  p-5 rounded-lg md:my-0 my-5 md:mx-0 mx-10 shadow-xl">
            <div className="testimonial-text mb-5 md:text-lg">
                <p className="text-sm">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus quod saepe, nam reprehenderit porro, quibusdam explicabo suscipit earum alias illo esse, accusantium ducimus eum? Architecto eius distinctio adipisci non!
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