import "./statistics.scss";
import clock from "./clock.svg";
import crane from "./crane.svg";
import engineer from "./engineer.svg";
import support from "./support.svg";

const Statistics = () => {
  return (
    <div className="static_body">
      <div className="static_text">
        <div className="static_text_block">
          <h1>С нами надежно</h1>
          <span>
            <p> Компания Еврокран успешно работает на территории РФ с 2000 года.</p>
            <p> В нашем автопарке гусеничные и мобильные краны известного немецкого бренда.</p>
            <p>
              Среди них есть модели любой грузоподъемности, для погрузочных, монтажных,
              транспортировочных и других работ.
            </p>
            <p>
              Обращение в компанию гарантирует комплексный подход к решению поставленных задач.
              Получить больше информации можно у менеджеров Компании Еврокран.
            </p>
          </span>
          <button>Заказать звонок</button>
        </div>
      </div>
      <div className="static_icon">
        <div className="static_icon_block">
          <span className="static_icon_block_item_1">
            <img src={clock} alt="clock" />
            <p>Поставка техники точно в срок</p>
          </span>
          <span>
            <img src={support} alt="support" />
            <p>Сопровождение спецтехники</p>
          </span>
          <span>
            <img src={engineer} alt="enginner" />
            <p>Квалифицированнные специалисты</p>
          </span>
          <span>
            <img src={crane} alt="crane" />
            <p>Автопарк от ведущих мировых производителей</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
