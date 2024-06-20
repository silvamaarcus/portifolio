import { GithubFill, LinkedinBoxFill, WhatsappFill, File } from "akar-icons";

const Header = () => {
  return (
    <>
      <div className="container p-0 mt-4 flex-center">
        <ul className="menu flex-start-row gap-5 py-2">
          <li>
            <a href="https://github.com/silvamaarcus" target="_blank">
              <GithubFill
                strokeWidth={2}
                size={32}
                color="white"
                className="icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/silvamaarcus" target="_blank">
              <LinkedinBoxFill
                strokeWidth={2}
                size={32}
                color="white"
                className="icon"
              />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5531997003074" target="_blank">
              <WhatsappFill
                strokeWidth={2}
                size={32}
                color="white"
                className="icon"
              />
            </a>
          </li>
          <li>
            <a href="../../../public/pdf/cv_marcus.pdf" download="CV MARCUS SILVA.pdf">
              <File strokeWidth={2} size={32} color="white" className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
