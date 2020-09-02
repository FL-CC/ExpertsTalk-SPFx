import * as React from "react";

export interface IBierStatusProps {
  count: number;
  limit: number;
}

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
  const statusImage = props.count > props.limit ? img_ko : img_party;
  return (
    <div>
      <img src={statusImage} alt="nix da" width={200} />
      <p>Erst {props.count} Bierchen...läuft</p>
    </div>
  );
};

export const BierStatus = (props: IBierStatusProps) => {
  return (
    <div>
      {(props.count > 0 && <NotSober limit={6} count={props.count} />) || (
        <Sober />
      )}
    </div>
  );
};
