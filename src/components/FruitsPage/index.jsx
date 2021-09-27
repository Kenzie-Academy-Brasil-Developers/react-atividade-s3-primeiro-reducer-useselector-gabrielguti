import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addFruit } from "../../store/modules/fruits/actions";
import "./styles.css";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);
  const [fruit, setFruit] = useState("");
  const dispatch = useDispatch();

  const handleAddFruit = () => dispatch(addFruit(fruit));

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="nova fruta"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
        <button onClick={handleAddFruit}>Adicionar</button>
      </div>
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
          ) : item === "Morango" ? (
            <div key={index} id="morango">
              {item}
            </div>
          ) : (
            <div key={index} className="novaFruta">
              {item}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default FruitsPage;
