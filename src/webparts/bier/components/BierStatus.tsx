import * as React from "react";

interface IBierProps {
  count: number;
  limit: number;
}

export const BierStatus = (props: IBierProps) => {
  return (
    <div>
      {props.count} / {props.limit}
    </div>
  );
};
