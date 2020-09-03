import * as React from "react";
import { IBierSorte } from "../interfaces/BierInterfaces";

export interface IBierTableProps {
  biere: IBierSorte[];
}

const BierTableRow = (props: IBierSorte) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.price.toFixed(2) + "€"}</td>
      <td>{props.percent.toFixed(1) + "%"}</td>
    </tr>
  );
};

export const BierTable = (props: IBierTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Sorte</th>
          <th>Preis</th>
          <th>Prozent</th>
        </tr>
      </thead>
      <tbody>
        {props.biere.map((bier: IBierSorte) => {
          return (
            <BierTableRow
              key={bier.title}
              title={bier.title}
              price={bier.price}
              percent={bier.percent}
            />
          );
        })}
      </tbody>
    </table>
  );
};
