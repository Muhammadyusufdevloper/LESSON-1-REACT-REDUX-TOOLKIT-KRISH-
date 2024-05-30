import Mains from "../mains"
import Plus from "../plus"
import Reset from "../reset"
import Result from "../result"
import "./Hero.scss"
const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__wrapper">
                    <div>
                        <Plus />
                        <Result />
                        <Mains />
                    </div>
                    <Reset />
                </div>
            </section>
        </>
    )
}

export default Hero