import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Skeleton from "../UI/Skeleton";

const TopSellers = () => {
  const [responseList, setresponseList] = useState([]);
  const topsellersApiLink = process.env.REACT_APP_FES_API;
  useEffect(() => {
    fetchApiData(`${topsellersApiLink}/topSellers`);
  }, []);

  async function fetchApiData(api) {
    let response = await axios.get(api);
    let responseData = await response.data;
    setresponseList(responseData);
  }

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list wow fadeIn">
              {responseList.length
                ? responseList.map((item, index) => (
                    <TopSellerItem
                      key={index}
                      authorId={item.authorId}
                      authorImage={item.authorImage}
                      authorName={item.authorName}
                      price={item.price}
                    />
                  ))
                : Array(12)
                    .fill(0)
                    .map((_, index) => (
                      <li key={index}>
                        <div className="author_list_pp">
                          <Link to="">
                            <Skeleton
                              width={"3rem"}
                              height={"3rem"}
                              borderRadius={"9999px"}
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to="">
                            <Skeleton
                              width={"6rem"}
                              height={"1rem"}
                              borderRadius={"9999px"}
                            />
                          </Link>
                          <span>
                            <Skeleton
                              width={"3rem"}
                              height={"1rem"}
                              borderRadius={"9999px"}
                            />
                          </span>
                        </div>
                      </li>
                    ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;

function TopSellerItem({ authorId, authorImage, authorName, price }) {
  return (
    <li>
      <div className="author_list_pp">
        <Link to={`/author/${authorId}`}>
          <img className="lazy pp-author" src={authorImage} alt="" />
          <i className="fa fa-check"></i>
        </Link>
      </div>
      <div className="author_list_info">
        <Link to={`/author/${authorId}`}>{authorName}</Link>
        <span>{price} ETH</span>
      </div>
    </li>
  );
}
