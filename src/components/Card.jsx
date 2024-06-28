import { useState } from "react";

const Card = (props) => {
  // estado para controlar o hover
  const [isHovered, setIsHovered] = useState(false);

  // funcao para aplicar o hover (ao passar mouse sobre a div)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={props.img} alt={props.title} />
        <div className="px-1 card-content">
          <h5 className="bold my-1">{props.title}</h5>
          <p className="p1">{props.techs}</p>
        </div>

        <div
          className={`flex-center-column gap-4 pt-4 overlay ${
            isHovered ? "visible" : ""
          }`}
        >
          <button className="btn-underline">
            <a href={`https://${props.link1}`} className="color-white uppercase" target="_blank">
              ver projeto
            </a>
          </button>
          <button className="btn-underline">
            <a href={`https://github.com/silvamaarcus/${props.link2}`} className="color-white uppercase" target="_blank">
              ver código
            </a>
          </button>
        </div>

        {/* //* Botões para versão mobile */}

        <div className="flex-start-row my-3 gap-4 card-links-mobile">
        <button className="btn-underline">
            <a href={`https://${props.link1}`} className="color-white uppercase" target="_blank">
              ver projeto
            </a>
          </button>
          <button className="btn-underline">
            <a href={`https://github.com/silvamaarcus/${props.link2}`} className="color-white uppercase" target="_blank">
              ver código
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
