import React from "react";

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <LandingIntroItem
            icon={"icon_wallet"}
            title={"Set up your wallet"}
            para={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
            }
          />
          <LandingIntroItem
            icon={"icon_cloud-upload_alt"}
            title={"Add your NFT's"}
            para={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
            }
          />
          <LandingIntroItem
            icon={"icon_tags_alt"}
            title={"Sell your NFT's"}
            para={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;

function LandingIntroItem({ icon, title, para }) {
  return (
    <div className="col-lg-4 col-md-6 mb-sm-30">
      <div className="feature-box f-boxed style-3">
        <i
          className={`bg-color-2 i-boxed wow fadeInUp ${icon}`}
          
        ></i>
        <div className="text">
          <h4 className="wow fadeInUp" data-wow-delay=".25s">{title}</h4>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            {para}
          </p>
        </div>
        <i className={`wm ${icon}`}></i>
      </div>
    </div>
  );
}
