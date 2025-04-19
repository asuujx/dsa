import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-fit mt-5 mx-auto shadow-md rounded-xl px-8 py-4 flex gap-5">
        <HeaderLink linkUrl="/" linkText="Home"></HeaderLink>
        <HeaderLink
          linkUrl="/structures"
          linkText="Data Structures"
        ></HeaderLink>
        <HeaderLink linkUrl="/algorithms" linkText="Algorithms"></HeaderLink>
      </div>
    </div>
  );
};

export default Header;
