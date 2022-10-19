import React from "react";

const Checkbox = () => {
  const data = [
    { id: 1, name: "딸기🍓" },
    { id: 2, name: "바나나🍌" },
    { id: 3, name: "포도🍇" },
    { id: 4, name: "오렌지🍊" },
    { id: 5, name: "레몬🍋" },
    { id: 6, name: "복숭아🍑" },
    { id: 7, name: "파인애플🍍" },
    { id: 8, name: "키위🥝" },
    { id: 9, name: "사과🍎" },
  ];

  return (
    <div className="checkbox">
      <div className="allCheck">
        <label>
          <input type="checkbox" />
          <p>전체 선택</p>
        </label>
      </div>
      <ul>
        {data.map((item) => {
          return (
            <li className="check">
              <label key={item.id}>
                <input type="checkbox" value={item.name} />
                <p>{item.name}</p>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Checkbox;
