import ButtonPrimary from "../assets/ButtonPrimary";

const PageNotfound = ()=>{
    return(
        <div className="not-found w-screen flex flex-col gap-10 items-center justify-center h-screen">
            <h1 className="font-bold text-4xl max-w-[50vw]">Opps!! <br /> The page you rquested is not found on our server</h1>
            <ButtonPrimary label={"Back to home"}/>
        </div>
    )
        
}

export default PageNotfound;