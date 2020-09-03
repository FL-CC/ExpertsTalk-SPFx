import * as React from "react";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { IBierStatusProps } from "../interfaces/BierInterfaces";

const img_ko: any = require("../../assets/ko.jpg");
const img_party: any = require("../../assets/bier.jpg");

const Sober = (props) => {
  return (
    <div>
      <p style={{ color: "orange", background: "white" }}>nüchtern :(</p>
    </div>
  );
};

const NotSober = (props: IBierStatusProps) => {
  const isTooMuch = props.count > props.limit;
  const statusImage = isTooMuch ? img_ko : img_party;
  const icons = [];
  for (var i = 0; i < props.count; i++) {
    icons.push(<FontIcon iconName="BeerMug" />);
  }

  return (
    <div>
      <img src={statusImage} alt="bierstatus" width={200} />
      {!isTooMuch && <p>Erst {props.count} Bierchen...läuft</p>}
      {!isTooMuch && icons}
    </div>
  );
};

export const BierStatus = (props: IBierStatusProps) => (
  <div>
    {(props.count > 0 && (
      <NotSober limit={props.limit} count={props.count} />
    )) || <Sober />}
  </div>
);
