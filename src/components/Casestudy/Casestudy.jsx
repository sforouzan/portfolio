"use client";

import { useState } from "react";
import { CarouselCustomNavigation } from "../Carousel/Carousel";
import Image from "next/image";
import classNames from "classnames";

const Casestudy = (props) => {
  const { title, type, programsUsed, projectRole, images, summary, slides, gallery } = props;
  const features = [
    {
      id: 1,
      title: "Crime Data Mapping",
      description:
        "Plan safer routes using real-time crime data, with AI highlighting potential risks to help users navigate confidently and securely. By continuously analyzing local crime patterns, Beep ensures users stay aware of their surroundings, prioritizing safety with every journey.",
      image: "/assets/images/beepfeature1.png",
    },
    {
      id: 2,
      title: "Real-Time Location Sharing",
      description:
        "Effortlessly share your real-time location with trusted contacts for added security, ensuring peace of mind, especially when traveling alone or navigating unfamiliar areas.",
      image: "/assets/images/beepfeature2.png",
    },
    {
      id: 3,
      title: "Emergency Alerts",
      description:
        "Activate a loud alarm to instantly alert nearby people in case of danger, drawing attention to your situation and providing immediate support while deterring potential threats.",
      image: "/assets/images/beepfeature3.png",
    },
    {
      id: 4,
      title: "Snap & Record",
      description:
        "Capture photos, videos, or audio of your surroundings to enhance your security, document incidents, and preserve evidence if needed for future reference or reporting.",
      image: "/assets/images/beepfeature4.png",
    },
  ];

  const [activeImage, setActiveImage] = useState("/assets/images/feature1.png");

  return (
    <div className="pt-[190px] pb-[55px] md:mb-60">
      <h1 className="text-[12vw] font-CocoGothic text-milk-white leading-[86%] uppercase">{title}</h1>
      <p className="font-VisbyCF uppercase text-[30px] pt-2">{type}</p>
      <p className="font-VisbyCF uppercase italic pt-2">Tools used: {programsUsed}</p>
      <p className="font-VisbyCF uppercase italic pb-[27px]">Project Role: {projectRole}</p>
      <Image
        src={images?.header || 'https://placehold.co/1140x450.svg'}
        alt="portfolio item"
        layout="responsive"
        width={1000}
        height={1000}
        className="rounded-[10px]"
      />
        <div>

            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-1 text-justify">
                    <h3 className="font-VisbyBold pt-[30px] pb-[9px] text-[30px] uppercase">WHAT IS BEEP?</h3>
                    <p className="font-VisbyCF flex flex-col gap-y-5">Beep is a safety app that offers real-time safety insights, location-sharing, and proactive emergency features to provide peace of mind - making it an ideal companion for everyone, especially women and female presenting users navigating alone. Built on the values of assurance, simplified safety, and trust, Beep aims to turn potentially stressful journeys into secure, confident experiences.</p>
                    <h3 className="font-VisbyBold pt-[30px] pb-[9px] text-[30px] uppercase">Target Audience</h3>
                    <p className="font-VisbyCF flex flex-col gap-y-5">Women, femme-identifying individuals, and anyone who values enhanced safety or feels at risk when navigating urban areas.</p>
                    <div className="flex pt-[50px]">
                        <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
                        <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
                        <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
                    </div>
                    <h3 className="font-VisbyBold pt-[30px] pb-[9px] text-[30px] uppercase">Problem Identification</h3>
                    <p className="font-VisbyCF">
                    Statistics from <a className="hover:text-[#F7185B] underline" href="https://www.endviolenceagainstwomen.org.uk/new-data-women-feel-unsafe-at-night/">End Violence Against Women Coalition</a> reveal the stark realities faced by women and vulnerable groups:</p>
                    <ul className="font-VisbyCF flex flex-col list-inside list-disc">
                        <li>1 in 2 women feel unsafe walking alone after dark on quiet streets or in busy public areas.</li>
                        <li>4 in 5 women feel unsafe in parks or other open spaces after dark.</li>
                    </ul>
                    <p className="font-VisbyCF flex flex-col gap-y-5">These numbers highlight the critical need for a solution like Beep, designed to proactively prevent incidents and support users in emergencies.</p>
                    <h3 className="font-VisbyBold pt-[30px] pb-[9px] text-[30px] uppercase">Solution</h3>
                    <p className="font-VisbyCF flex flex-col gap-y-5">Beep was created to empower not only women but also marginalized communities and anyone who values personal safety, offering them the tools to navigate their surroundings with confidence.</p>
                    <p className="font-VisbyCF flex flex-col gap-y-5">Recognizing that safety is a fundamental right, Beep aims to bridge the gap between uncertainty and security by providing real-time insights, AI-powered route recommendations, and community-driven alerts. Its mission is clear: to make safety accessible, reliable, and proactive, ensuring that everyone can move through the world with greater peace of mind.</p>
                </div>
                <div className="relative w-full h-full flex-1">
                    <Image src={'/assets/images/beepmockup.png'} height='6000' width='6000' alt="mockup screen" />
                </div>
            </div>

            <div>
                <Image
                    src={'/assets/images/beeppersona.png'}
                    alt="portfolio item"
                    layout="responsive"
                    width={1000}
                    height={1000}
                    className="rounded-[10px] mt-20"
                />
            </div>

                <div className="flex flex-col md:flex-row rounded-[10px] gap-20 bg-[#2F2F2F] p-10">
                    <div className="flex flex-col basis-1/3 md:basis-2/5 text-justify">
                        <h2 className="font-VisbyBold pb-[20px] text-[30px]">FEATURES</h2>
                            {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="cursor-pointer group"
                                onMouseEnter={() => setActiveImage(feature.image)}
                            >
                                <h3 className="font-VisbyMed pb-[9px] text-[25px] group-hover:text-[#F7185B]">
                                {feature.title}
                                </h3>
                                <p className="font-VisbyCF pb-[30px]">
                                {feature.description}
                                </p>
                            </div>
                            ))}
                    </div>

                    
                    <div className="relative basis-2/3 md:basis-3/5">
                        <Image
                        src={activeImage}
                        alt="Feature Mockup"
                        width={9000}
                        height={9000}
                        className="object-contain w-full h-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-20 mt-10">
                    <div className="flex-1 flex items-center flex-col">
                        <h3 className="font-VisbyBold pt-[30px] pb-[9px] text-[30px] mb-8 uppercase">Logo Variations</h3>
                        <Image
                            src={'/assets/images/beeplogos.png'}
                            alt="portfolio item"
                            layout="responsive"
                            width={1000}
                            height={1000}
                            className="rounded-[10px]"
                        />
                        <p className="font-VisbyCF flex flex-col gap-y-5 mt-10 text-justify">Beep’s logo combines a pin icon with a current location symbol to represent the app’s core features of mapping and location-sharing, while also forming an abstract "B" for “Beep” shape in the negative space.</p>
                    </div>

                    <div className="flex-1 flex items-center flex-col">
                        <h3 className="font-VisbyBold pt-[30px] pb-[9px] text-[30px] mb-8 uppercase">Colour Scheme</h3>
                        <Image
                            src={'/assets/images/beepcolours.png'}
                            alt="portfolio item"
                            layout="responsive"
                            width={1000}
                            height={1000}
                            className="rounded-[10px]"
                        />
                        <p className="font-VisbyCF flex flex-col gap-y-5 mt-10 text-justify">Beep’s colour scheme incorporates a vibrant cool-tone red and a mid-tone vibrant purple, balanced by a neutral black and white, inspired by an image of a city at night that resonates with the app story. The vibrancy ties in with the loud name of “Beep”.</p>
                    </div>

                    <div className="flex-1 flex items-center flex-col">
                        <h3 className="font-VisbyBold pt-[30px] pb-[9px] text-[30px] mb-8 uppercase">Typography</h3>
                            <Image
                                src={'/assets/images/beepfont.png'}
                                alt="portfolio item"
                                layout="responsive"
                                width={1000}
                                height={1000}
                                className="rounded-[10px]"
                            />
                            <p className="font-VisbyCF flex flex-col gap-y-5 mt-10 text-justify">The Switzer Font Family was selected for Beep due to its clean lines and simplicity, prioritizing accessibility and legibility, especially in high-pressure situations. </p>
                    </div>
                </div>

                <div>
                    <h3 className="font-VisbyBold pt-[30px] pb-[9px] text-[30px] mt-10 mb-2 uppercase">Wireframes</h3>
                    <div className="relative w-full h-0 pb-[56.25%] rounded-[10px] overflow-hidden">
                        <iframe
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                            width="100%"
                            height="100%"
                            src="https://embed.figma.com/design/33zvfoWul345Ji8LNj3U0k/Beep-Wireframes?node-id=6005-8624&embed-host=share"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:gap-20">
                    <div className="relative flex flex-col items-center md:mt-20 w-full h-[800px]">
                    <h3 className="font-VisbyBold text-[30px] uppercase mb-5">App Demo</h3>
                        <video
                            className="w-auto h-full rounded-[15px]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={"/assets/images/mockup2.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    
                    <div className="md:w-2/3 w-full mt-2 md:mt-0 flex flex-col items-end text-justify">
                        <div className="flex flex-1 pt-[50px] mb-7">
                            <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
                            <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
                            <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
                        </div>
                        <p className="font-VisbyCF flex flex-col mb-5 gap-y-5">
                        Beep's architecture was designed with a clear focus on simplicity and user accessibility, ensuring that individuals of all technical backgrounds can easily navigate the app. The interface is intuitive, allowing users to quickly access essential features like route planning, safety alerts, and location sharing. By minimizing unnecessary complexity, Beep ensures that users can make the most of its powerful tools without feeling overwhelmed, making it a reliable and user-friendly safety companion.</p>
                        <p className="font-VisbyCF flex flex-col gap-y-5">
                        The app’s layout and functionality are thoughtfully crafted to prioritize ease of use, ensuring users can find what they need in moments of urgency. Whether planning a safe route or receiving a safety alert, Beep offers a clear and straightforward experience that doesn’t sacrifice effectiveness. The overall design empowers users to act quickly and confidently, knowing they can rely on a simple yet powerful interface to stay secure.</p>
                        </div>
                </div>
        </div>
    </div>
  )
}
export default Casestudy;
