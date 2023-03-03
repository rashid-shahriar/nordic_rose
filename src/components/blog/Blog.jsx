import React from "react";
import blogImg from "../../assets/images/hero.svg";

const Blog = () => {
  return (
    <section id="blog">
      <img src={blogImg} className="mx-auto pt-14" alt="home_page_image" />

      <div className="text-center text-5xl md:text-6xl px-0 pt-8 lg:px-36 lg:mx-32 lg:pt-12 font-new_york_exl font-extrabold">
        A few words about this blog platform, Ghost, and how this site was made
        <p className="text-center text-xl font-extralight pt-8 px-0 lg:px-36 font-sf_regular tracking-[.25rem]">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
        <div className="pt-8 border-b-2 mx-0 lg:mx-28 border-transparent border-gray-800"></div>
      </div>
    </section>
  );
};

export default Blog;
