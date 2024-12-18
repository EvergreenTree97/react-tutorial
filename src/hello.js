import React from "react";

export default function Hello({ color, name = "기본이름", isSpecial }) {
  return (
    <div style={{ color: color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}
