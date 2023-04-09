import React from "react";
import { Link } from "react-router-dom";

const BrowseByCategory = () => {
  const itemList = [
    {
      name: "Art",
      icon: "fa-image",
    },
    {
      name: "Music",
      icon: "fa-music",
    },
    {
      name: "Domain Names",
      icon: "fa-search",
    },
    {
      name: "Virtual Worlds",
      icon: "fa-globe",
    },
    {
      name: "Trading Cards",
      icon: "fa-vcard",
    },
    {
      name: "Collectibles",
      icon: "fa-th",
    },
  ];

  function BrowseByCategoryItem({ name, icon, delayIndex }) {
    return (
      <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
        <Link
          to="/explore"
          className="icon-box style-2 rounded wow fadeInRight"
          data-wow-delay={`${delayIndex / 10}s`}
        >
          <i className={`fa ${icon}`}></i>
          <span>{name}</span>
        </Link>
      </div>
    );
  }

  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {itemList.map((item, index) => (
            <BrowseByCategoryItem
              icon={item.icon}
              name={item.name}
              key={index}
              delayIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
