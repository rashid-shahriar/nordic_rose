import React from "react";
import { ArticleData } from "../data/Articledata.jsx";

const Article = () => {
  return (
    <section id="article">
      <div className="text-5xl font-new_york_exl font-extrabold text-center pt-16">
        All Article
      </div>

      {ArticleData.map((record) => {
        return (
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-12 pt-14 font-sf_regular text-xl text-center"
            key={record.id}
          >
            <div>
              <img src={record.img} alt="article_image_one" />
              <p className="w-0 min-w-full pt-4">{record.text}</p>
            </div>
            <div>
              <img src={record.img2} alt="article_image_two" />
              <p className="w-0 min-w-full pt-4">{record.text2}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Article;
