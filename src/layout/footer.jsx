const Footer = () => {
  return (<div className="bg-transparent">
    <div className="flex justify-between items-center gap-4 text-[#8D8D8D] font-semibold text-xs py-4 md:px-0 px-10">
      <div className="flex md:flex-row flex-col items-center gap-2 md:gap-8">
        <p>2024©YuConnect</p>
        <p>Developed by Taku Precious</p>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-2 md:gap-8">
        <p>Privacy</p>
        <p>Terms of Service</p>
        <p>Cookie Notice</p>
      </div>
    </div>
  </div>);
};

export default Footer;
