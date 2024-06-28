import Card from "../../components/Card";

import img_card_1 from "../../assets/img/image-card-1.png";
import img_card_2 from "../../assets/img/image-card-2.png";
import img_card_3 from "../../assets/img/image-card-3.png";
// import img_card_4 from "../../../assets/img/image-card-4.png";

const Main = () => {
  const techs_items = ["HTML", "SASS/CSS", "JS", "REACTJS", "API"];

  const title_1 = "Site de Casamento";
  const techs_1 = [techs_items[0], techs_items[1], techs_items[2], techs_items[4]].join(" ◦ ");
  const github_1 = "wedding-ms";
  const deploy_1 = "marcusesarah.com.br";

  const title_2 = "Bikcraft";
  const techs_2 = [techs_items[1], techs_items[3], techs_items[4]].join(" ◦ ");
  const github_2 = "portifolio-bikcraft";
  const deploy_2 = "portifolio-bikcraft.vercel.app";

  const title_3 = "ClimaNow App";
  const techs_3 = [techs_items[0], techs_items[1], techs_items[2], techs_items[4]].join(" ◦ ");
  const github_3 = "climaNow-app";
  const deploy_3 = "clima-now-app.vercel.app";

  return (
    <>
      <main
        className="container py-0 mt-5 bt-gray"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        <h1 className="mt-5">Projetos</h1>
        <div className="flex flex-wrap mt-6">
          <div className="grid-6 flex-center-column gap-5">
            <Card img={img_card_1} title={title_1} techs={techs_1} link1={deploy_1} link2={github_1} />
            <Card img={img_card_3} title={title_3} techs={techs_3} link1={deploy_3} link2={github_3}/>
          </div>
          <div className="grid-6 flex-center-column gap-5">
            <Card img={img_card_2} title={title_2} techs={techs_2} link1={deploy_2} link2={github_2}/>
            <Card img={img_card_1} title={title_1} techs={techs_1} link1={deploy_1} link2={github_1}/>
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
