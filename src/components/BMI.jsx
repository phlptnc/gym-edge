import React from "react"

function BMI() {
    return (
        <>
            <section className=" background bg-[url('../../assets/bmi-bg.jpg')] bg-center">
                <div className="container text-[#f5f5f5] flex flex-col min-[950px]:flex-row gap-9 min-[950px]:gap-0 py-[6rem] px-10 lg:px-0">
                    <div className="flex flex-col gap-5 me-auto">
                        <h2 className="text-[2rem] font-semibold">
                            Calculate your BMI
                        </h2>
                        <p className="text-[#c9c9c9]">
                            Easily determine your body mass index with our
                            accurate calculation tool.
                        </p>
                        <form className="mt-1">
                            <input
                                type="number"
                                placeholder="Weight / kg"
                                className="bg-black border-[1px]
                                rounded-full ps-4 py-2 w-[125px] me-3"
                            />
                            <input
                                type="number"
                                placeholder="Height / cm"
                                className="bg-black border-[1px]
                                rounded-full ps-4 py-2 w-[125px]"
                            />
                        </form>
                        <div className="flex flex-col min-[400px]:flex-row my-2">
                            <div className="w-full min-[400px]:w-1/2 font-semibold">
                                <p>
                                    Your BMI is:{" "}
                                    <span className="text-[#fb5b21]">18.5</span>
                                </p>
                            </div>
                            <div className="w-full min-[400px]:w-1/2 font-semibold">
                                <p>
                                    Your weight is:{" "}
                                    <span className="text-[#fb5b21]">
                                        Underweight
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-[150px] bg-[#fb5b21] py-[10px] rounded-full cursor-pointer hover:opacity-75 duration-300 ease-in-out"
                        >
                            CALCULATE
                        </button>
                    </div>
                    <div className="flex justify-end  min-[950px]:w-[500px]">
                        <table className="text-left font-semibold w-[100%] h-[280px]">
                            <tbody>
                                <tr className="text-[1.3rem]">
                                    <th>BMI</th>
                                    <th>Weight Status</th>
                                </tr>
                                <tr>
                                    <td>Below 18.5</td>
                                    <td>Underweight</td>
                                </tr>
                                <tr>
                                    <td>18.5 - 24.9</td>
                                    <td>Normal</td>
                                </tr>
                                <tr>
                                    <td>25 - 29.9</td>
                                    <td>Overweight</td>
                                </tr>
                                <tr>
                                    <td className="rounded-bl-[20px]">
                                        30 and above
                                    </td>
                                    <td className="rounded-br-[20px]">Obese</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div></div>
                </div>
            </section>
        </>
    )
}

export default BMI
