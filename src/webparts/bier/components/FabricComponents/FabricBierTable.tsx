import * as React from "react";
// prettier-ignore
import {DetailsList, IColumn} from "office-ui-fabric-react/lib/DetailsList";
import {
  IFabricBierTableProps,
  IBierSorte,
} from "../interfaces/BierInterfaces";
import { Item } from "@pnp/sp/items";

export const FabricBierTable = (props: IFabricBierTableProps) => {
  const columns: IColumn[] = [
    {
      key: "title",
      name: "Sorte",
      // onRender: (item: IBierSorte) => item.title,
      fieldName: "title",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "price",
      name: "Preis",
      onRender: (item: IBierSorte) => item.price.toFixed(2) + " €",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "percent",
      name: "Prozent",
      onRender: (item: IBierSorte) => item.percent.toFixed(1) + " %",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];

  return <DetailsList items={props.items} columns={columns} />;
};
