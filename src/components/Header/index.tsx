import { GithubFill, LinkedinBoxFill } from "akar-icons";

const Header = () => {
  return (
    <section className="custom-container mt-8">
      <header className="flex flex-wrap items-center justify-between">
        <h1 className="logo">silvamaarcus</h1>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/silvamaarcus"
            className="hover:text-primary transition-all duration-300"
            target="_blank"
          >
            <GithubFill strokeWidth={2} size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/silvamaarcus/"
            className="hover:text-primary transition-all duration-300"
            target="_blank"
          >
            <LinkedinBoxFill strokeWidth={2} size={32} />
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
