import React, { useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default function About() {
  return (
    <div className="ml-20 mr-20 mb-72 text-white about-page">
      <Carousel
        autoPlay={true}
        showIndicators={false}
        showStatus={true}
        showThumbs={false}
        showArrows={true}
        interval={3000}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={80}
        stopOnHover={true}
        axis="horizontal"
        dynamicHeight={false}
        className="black"
      >
        <div className="ml-10">
          <h1 className="text-4xl font-bold red-theme">Welcome to RU Turbo</h1>
          <p className="text-2xl">
            Picture this: It's 2 AM, you're frantically refreshing your course
            registration page, and every slot you need is still closed. We’ve
            been there, and we know the struggle. That’s why we created
            RUTurbo—your ultimate course registration sidekick, designed to make
            your academic journey at Rutgers as smooth as possible.
          </p>
        </div>
        <div className="ml-10">
          <h1 className="text-4xl font-bold red-theme">Our Mission</h1>
          <p className="text-2xl">
            Here at RUTurbo, we’re on a mission to change the game. Our goal? To
            ensure you never miss out on a class again. With instant alerts
            through phone calls, texts, Discord, Telegram, and more, we’ve got
            all your bases covered. No more sleepless nights or anxiety about
            getting into the classes you need. We provide faster response times,
            more sniping slots, and a sleek, user-friendly interface—all
            tailored specifically for the Rutgers community.
          </p>
        </div>
        <div className="ml-10">
          <h1 className="text-4xl font-bold red-theme">Our Story</h1>
          <p className="text-2xl">
            Our story is one of frustration turned innovation. As computer
            science students from humble backgrounds, we were tired of the same
            old registration woes. Instead of just grinding through our
            coursework and graduating, we decided to use our skills to make a
            real difference. We listened to you, our fellow students, and
            created RUTurbo to meet your needs and enhance your academic life.
          </p>
        </div>
        <div className="ml-10">
          <h1 className="text-4xl font-bold red-theme">
            Made by Students, for Students
          </h1>
          <p className="text-2xl">
            We’re not just another tech company—we’re your peers. We understand
            the pressure of juggling assignments, exams, and a social life. Our
            humble beginnings drive us to create tools that truly make a
            difference. RUTurbo is just the start. We’re here to show that with
            the right tech, we can make student life better for everyone. We’re
            passionate about using our knowledge to bring about positive change,
            starting with our own community at Rutgers.
          </p>
        </div>
        <div className="ml-10">
          <h1 className="text-4xl font-bold red-theme">
            Our Vision for the Future
          </h1>
          <p className="text-2xl">
            Our vision doesn’t stop at course registration. We aim to tackle all
            sorts of challenges faced by students and society using technology.
            From smarter campus services to innovative study tools, we’re
            dreaming big. We believe that by solving everyday problems, we can
            empower individuals and communities to thrive.
          </p>
        </div>
        <div className="ml-10">
          <h1 className="text-4xl font-bold red-theme">
            Join Us on This Journey
          </h1>
          <p className="text-2xl">
            So, what do you say? Ready to revolutionize your course registration
            experience? Dive into our website, learn more about our mission, and
            give us your feedback. Let’s make the Rutgers experience better
            together. Your voice matters, and with your help, we can create the
            ultimate tool for academic success.
          </p>
        </div>
      </Carousel>
    </div>
  );
}
