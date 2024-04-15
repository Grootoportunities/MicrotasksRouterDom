import { adidasArr, BootItem } from "./pages/Adidas";
import { useParams } from "react-router-dom";
import { S } from "./pages/_styles";
import React, { FC } from "react";
import { pumaArr } from "./pages/Puma";

type ModelProps = {
  boots: BootItem[];
};

export const Model: FC<ModelProps> = ({ boots }) => {
  const params = useParams();
  console.log(params.id);

  const model = boots.find((b) => b.id === Number(params.id));

  return (
    <S.ModelWrapper>
      {model ? (
        <>
          <S.BootsImg src={model.picture} alt={model.model} />
          <h3>{model.model}</h3>
          <h4>{model.collection}</h4>
          <span>{model.price}</span>
        </>
      ) : (
        <h2>Модель отсутствует</h2>
      )}
    </S.ModelWrapper>
  );
};
