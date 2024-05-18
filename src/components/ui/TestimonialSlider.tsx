"use client"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SwirlArrowIcon } from "@/assets/icons/SwirlArrow";

const testimonialData: Testimonial[] = [
    {
        name: "John Doe",
        company: "ABC Inc.",
        text: "Working with this team has been a fantastic experience. They are highly professional and deliver outstanding results.",
        image: "john_doe.jpg"
    },
    {
        name: "Jane Smith",
        company: "XYZ Corporation",
        text: "I couldn't be happier with the service provided by this company. They exceeded my expectations in every way.",
        image: "jane_smith.jpg"
    },
    {
        name: "David Johnson",
        company: "123 Industries",
        text: "This company is the best in the business. I've seen significant growth in our revenue since partnering with them.",
        image: "david_johnson.jpg"
    },
    {
        name: "Emily Brown",
        company: "Tech Solutions Co.",
        text: "Absolutely impressed with their innovative approach and attention to detail. Highly recommend their services.",
        image: "emily_brown.jpg"
    },
    {
        name: "Michael Lee",
        company: "Global Ventures",
        text: "Working with them has been a game-changer for our business. They understand our needs and deliver exceptional results.",
        image: "michael_lee.jpg"
    },
    {
        name: "Sarah Wilson",
        company: "Sunshine Marketing",
        text: "The team at this company is dedicated and responsive. They helped us launch our campaign successfully.",
        image: "sarah_wilson.jpg"
    },
    {
        name: "Alex Carter",
        company: "Smart Solutions Ltd.",
        text: "I'm impressed with their professionalism and expertise. They helped us achieve our goals effectively.",
        image: "alex_carter.jpg"
    },
    {
        name: "Laura Davis",
        company: "Innovative Designs Inc.",
        text: "Their creative ideas transformed our project. We are grateful for their collaboration.",
        image: "laura_davis.jpg"
    },
    {
        name: "Chris Evans",
        company: "Eagle Enterprises",
        text: "They are responsive, proactive, and deliver exceptional quality work. A pleasure to work with!",
        image: "chris_evans.jpg"
    }
];

interface Testimonial {
    name: string;
    company: string;
    text: string;
    image: string;
}

export const TestimonialSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 2,
            spacing: 15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true);
        }
    })

    return (
        <div className="lg:px-10 py-4 lg:w-4/5 m-auto font-Poppins">
            <section className="hidden lg:grid grid-cols-2 items-center justify-center">
                <div className="flex gap-4">
                    <h5 className="text-3xl font-Hallelujah"><span className="text-[#ffc9c9]">Testimonios</span> de<br />Clientes</h5>
                    <SwirlArrowIcon className="w-[98px] h-[74px]"/>
                </div>
                <div>
                    <div className="mt-6 h-4 rounded-xl w-4/5 bg-[rgba(0,0,0,0.2)] border border-2">
                            {/*style={{ width: (100 / ((testimonialData.length - 1) / 2)) * currentSlide + "%" }}*/}
                            {(loaded && instanceRef.current) && 
                            <div
                            className="h-full rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500"
                            style={{width: `${(100 / (instanceRef.current?.track.details.slides.length - 1)) * currentSlide}%`}}
                            ></div>

                            }
                    </div>
                    <div className="lg:mt-8 lg:flex lg:gap-4 mb-6">
                        <Button
                            onClick={() => { instanceRef.current?.prev() }}
                            isIconOnly
                            className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500
                    hover:scale-110 text-white">
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-7 rtl:rotate-180"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </Button>

                        <Button
                            onClick={() => { instanceRef.current?.next() }}
                            isIconOnly
                            className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500
                    hover:scale-110 text-white">
                            <svg
                                className="size-7 rtl:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M9 5l7 7-7 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </section>

            <div ref={sliderRef} className="keen-slider">
                {
                    testimonialData.map((item) => (
                        <figure key={item.name} className="keen-slider__slide w-48 shrink-0 relative bg-white py-6 px-4
                        font-Poppins rounded-xl drop-shadow-md border">
                            <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-200">
                                <path
                                    d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                </path>
                            </svg>
                            <blockquote className="relative">
                                <p className="text-lg tracking-tight text-slate-900 font-[400]">
                                    {item.text}
                                </p>
                            </blockquote>
                            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />
                            <figcaption className="relative flex items-center justify-between">
                                <div>
                                    <div className="font-display text-base text-slate-900">{item.name}</div>
                                    <div className="text-sm text-slate-500">{item.company}</div>
                                </div>
                                <div className="overflow-hidden rounded-full bg-slate-50">
                                    <img alt={item.name} src={item.image} className="h-12 w-12 object-cover" loading="lazy" width="46" height="46" />
                                </div>
                            </figcaption>
                        </figure>
                    ))
                }
            </div>

        </div >
    )
}
