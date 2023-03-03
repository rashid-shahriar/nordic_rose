import React from "react";
import Logo from "../../assets/images/nordic_rose_logo_white.svg";

const Footer = () => {
  return (
    <div className="w-full mt-32 flex flex-col items-center justify-center bg-black">
      <div className="text-white text-center py-8 font-sf_medium tracking-custom_wide uppercase">
        <strong>Digital product design </strong> Remote work{" "}
        <strong> UX design </strong> Distributed teams{" "}
        <strong> Creativity </strong> Strategy <strong>Suspense</strong> Growth
      </div>

      <div className="pt-24">
        <img src={Logo} alt="logo_image" />
      </div>

      <div className="text-white text-center pt-10 px-0 mx-0 lg:px-48 xl:px-72 xl:mx-48">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus.
      </div>

      <div className="text-white flex gap-10 pt-10 underline">
        <div>Twitter</div>
        <div>Linkdin</div>
        <div>RSS</div>
      </div>

      <div className="text-white py-10 text-center">
        <div>© 2012-2020 Nordic Rose Co. </div>
        <div> All rights reserved. </div>
      </div>
    </div>
  );
};

export default Footer;
