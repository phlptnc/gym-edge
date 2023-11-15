import React from "react"
import PageTitle from "../components/Title/PageTitle"
import aboutImg from "../../public/assets/about.png"
import { FaCheck } from "react-icons/fa6"
import Testimonial from "../components/Testimonial"

function About() {
    return (
        <>
            <PageTitle title="About Us" />
            <div className="container flex flex-col min-[900px]:flex-row justify-between gap-10 pt-[6rem] px-10 lg:px-0">
                {/* Left */}
                <div className="min-[900px]:w-[60%] w-full flex flex-col gap-5">
                    <h2 className="min-[450px]:text-[2.5rem] text-[2rem] h-[7.5rem] min-[376px]:h-[5rem] font-bold uppercase relative after:content-[''] after:bg-[#fb5b21] after:w-[80px] after:h-[3px] after:absolute after:left-0 after:bottom-0 ">
                        About <span className="text-[#fb5b21]">G</span>ym{" "}
                        <span className="text-[#7b7b7b]">Edge</span>
                    </h2>
                    <p className="leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam nostrum numquam molestiae placeat amet
                        consequuntur, earum obcaecati repellendus sed veritatis
                        iste! Quidem deleniti provident possimus incidunt cumque
                        sit sed ducimus tenetur, tempore culpa. Ullam nam omnis,
                        quasi perspiciatis incidunt illum nihil commodi est
                        quisquam laborum esse, atque eligendi amet dolores eaque
                        a in quae ducimus necessitatibus molestias facilis fugit
                        et. Earum hic maxime dolore repudiandae in pariatur id,
                        eius similique, dicta distinctio laudantium veritatis
                        blanditiis dolor minus officia eum. Quas ex, quae
                        officiis quia nisi quasi dicta a aut eligendi magni
                        alias nobis impedit. Magni perspiciatis rerum veniam
                        quidem cupiditate optio sint quae corrupti ea cum sed
                        esse dolorem nostrum maxime quaerat facilis nihil
                        repellendus aut placeat eveniet fugit tenetur, accusamus
                        amet quibusdam. Voluptate eos accusamus deserunt placeat
                        quae, delectus ipsum, alias saepe quod praesentium odit
                        ullam nobis possimus labore laborum! Mollitia
                        perferendis facilis sequi beatae laudantium, impedit
                        voluptas ipsum!
                    </p>
                    <div className="flex flex-col gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <FaCheck size={30} color="#fb5b21" />
                                <h3 className="font-bold text-[1.3rem]">
                                    We have Gym Trainer
                                </h3>
                            </div>
                            <p className="ml-11 leading-7">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quam rerum soluta modi nulla,
                                veritatis odio itaque quia quibusdam velit
                                assumenda porro nam fuga. Magnam dicta
                                dignissimos qui fuga sunt voluptates?
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <FaCheck size={30} color="#fb5b21" />
                                <h3 className="font-bold text-[1.3rem]">
                                    Modern Gym & Fitness Facilities
                                </h3>
                            </div>
                            <p className="ml-11 leading-7">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quam rerum soluta modi nulla,
                                veritatis odio itaque quia quibusdam velit
                                assumenda porro nam fuga. Magnam dicta
                                dignissimos qui fuga sunt voluptates?
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className="min-[900px]:w-[35%] min-[500px]:w-[50%] mx-auto">
                    <img
                        src={aboutImg}
                        alt=""
                        className="min-[500px]:w-[95%] w-full"
                    />
                </div>
            </div>
            <Testimonial />
        </>
    )
}

export default About
