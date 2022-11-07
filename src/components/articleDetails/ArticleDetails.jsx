import React from "react";

const ArticleDetails = ({ ArticleData }) => {
  const { img, text } = ArticleData;
  return (
    <>
      <div>
        <img src={img} alt="article_image_one" className="mx-auto sm:mx-0" />
        <p className="w-0 min-w-full text-center pt-4">{text}</p>
      </div>
    </>
  );
};

export default ArticleDetails;
