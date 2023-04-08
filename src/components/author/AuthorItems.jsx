import React, { useEffect } from "react";
import BigCard from "../UI/BigCard";

const AuthorItems = ({ nftCollection, authorImage, authorID }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {nftCollection?.length
            ? nftCollection?.map((item, index) => (
                <BigCard
                  key={index}
                  authorId={authorID}
                  authorImage={authorImage}
                  expiryDate={item.expiryDate}
                  likes={item.likes}
                  nftId={item.nftId}
                  nftImage={item.nftImage}
                  price={item.price}
                  title={item.title}
                  isLoaded={true}
                  isSlide={true}
                />
              ))
            : new Array(8)
                .fill(0)
                .map((_, index) => (
                  <BigCard key={index} isLoaded={false} isSlide={true} />
                ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
