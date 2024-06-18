import { GithubFill, LinkedinBoxFill, WhatsappFill, File } from "akar-icons";

const Header = () => {
  return (
    <>
      <div className="container p-0 mt-4 flex-center">
        <ul className="menu flex-start-row gap-5 py-2">
          <li>
            <GithubFill strokeWidth={2} size={32} color="white" className="icon"/>
          </li>
          <li>
            <LinkedinBoxFill strokeWidth={2} size={32} color="white" className="icon"/>
          </li>
          <li>
            <WhatsappFill strokeWidth={2} size={32} color="white" className="icon"/>
          </li>
          <li>
            <File strokeWidth={2} size={32} color="white" className="icon"/>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
