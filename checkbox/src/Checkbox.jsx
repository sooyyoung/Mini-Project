import React, { useState } from "react";

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

  // 체크된 아이템 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleCheck = (checked, name) => {
    if (checked) {
      // 체크된 아이템 배열에 추가
      setCheckItems((prev) => [...prev, name]);
    } else {
      // 체크 해제 시 체크된 아이템 제거
      setCheckItems(checkItems.filter((el) => el !== name));
    }
  };

  // 체크박스 전체 선택
  const handleCheckAll = (checked) => {
    if (checked) {
      // 전체 선택 시 모든 아이템을 담은 배열로 checkItems 상태 업데이트
      const checkArray = [];
      data.forEach((el) => {
        checkArray.push(el.name);
      });
      setCheckItems(checkArray);
    } else {
      // 전체 선택 해제 시 checkItems를 빈 배열로
      setCheckItems([]);
    }
  };

  return (
    <div className="wrap">
      <div className="checkbox">
        <div className="allCheck">
          <label>
            <input
              type="checkbox"
              onChange={(e) => {
                handleCheckAll(e.target.checked);
              }}
              checked={
                checkItems.length === 0
                  ? false
                  : checkItems.length === data.length
                  ? true
                  : false
              }
            />
            <p>전체 선택</p>
          </label>
        </div>
        <ul>
          {data.map((item) => {
            return (
              <li className="check">
                <label key={item.id}>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      handleCheck(e.target.checked, item.name);
                    }}
                    // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택, 아닐 시 해제
                    checked={checkItems.includes(item.name) ? true : false}
                  />
                  <p>{item.name}</p>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="selectFruit">
        <strong>
          내가 선택한 과일 (<span>{checkItems.length}</span>) 🛒
        </strong>
        <ul>
          {checkItems.map((item) => {
            return <li key={item.id}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Checkbox;
