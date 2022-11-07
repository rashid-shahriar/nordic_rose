import React from "react";
import ArticleDetails from "../articleDetails/ArticleDetails";
import ArticleData from "../data/Articledata";
import "./article.css";

const Article = () => {
  return (
    <section id="article">
      <div className="text-5xl font-new_york_exl font-extrabold text-center py-16">
        All Article
      </div>
      <div className="sm:max-w-[750px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-0 sm:gap-x-36 gap-y-6">
        {ArticleData.map((ArticleData) => (
          <ArticleDetails
            key={ArticleData.id}
            ArticleData={ArticleData}
          ></ArticleDetails>
        ))}
      </div>
    </section>
  );
};

export default Article;
