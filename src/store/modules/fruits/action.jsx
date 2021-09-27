import { useSelector } from "react-redux";
import "./styles.css";
const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="fruits">
      {fruits.map((item, index) =>
        item === "Banana" ? (
          <div key={index} id="banana">
            {item}
          </div>
        ) : item === "Maçã" ? (
          <div key={index} id="maca">
            {item}
          </div>
        ) : (
          <div key={index} id="morango">
            {item}
          </div>
        )
      )}
    </div>
  );
};

export default FruitsPage;
