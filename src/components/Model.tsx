import { adidasArr, BootItem } from "./pages/Adidas";
import { useParams } from "react-router-dom";
import { S } from "./pages/_styles";
import React from "react";
import { pumaArr } from "./pages/Puma";
import { abibasArr } from "./pages/Abibas";

type BootsType = {
  [key: string]: BootItem[];
};

const boots: BootsType = {
  adidas: adidasArr,
  puma: pumaArr,
  abibas: abibasArr,
};

export const Model = () => {
  const { id, model } = useParams();

  const currentModel = model
    ? boots[model].find((b) => b.id === Number(id))
    : null;

  return (
    <S.ModelWrapper>
      {currentModel ? (
        <>
          <S.BootsImg src={currentModel.picture} alt={currentModel.model} />
          <h3>{currentModel.model}</h3>
          <h4>{currentModel.collection}</h4>
          <span>{currentModel.price}</span>
        </>
      ) : (
        <h2>Модель отсутствует</h2>
      )}
    </S.ModelWrapper>
  );
};
