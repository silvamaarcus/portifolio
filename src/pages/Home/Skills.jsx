import icon_html from "../../assets/svg/html.svg";
import icon_js from "../../assets/svg/js.svg";
import icon_sass from "../../assets/svg/sass.svg";
import icon_react from "../../assets/svg/react.svg";
import icon_tailwind from "../../assets/svg/tailwind.svg";
import icon_nextjs from "../../assets/svg/nextjs.svg";


const Skills = () => {
  return (
    <>
      <section className="container py-0 mt-5">
        <h1>Skills</h1>
        <div className="mt-5 flex-center gap-4 flex-wrap">
          <img src={icon_html} alt="HTML" className="icon-skill" />
          <img src={icon_js} alt="JS" className="icon-skill" />
          <img src={icon_sass} alt="SASS" className="icon-skill" />
          <img src={icon_react} alt="REACT" className="icon-skill" />
          <img src={icon_tailwind} alt="TAILWIND" className="icon-skill" />
          <img src={icon_nextjs} alt="NEXTJS" className="icon-skill" />
        </div>
      </section>
    </>
  );
};
export default Skills;
