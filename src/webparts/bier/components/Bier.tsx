import * as React from "react";
import styles from "./Bier.module.scss";
import { IBierProps } from "./IBierProps";
import { escape } from "@microsoft/sp-lodash-subset";

import { BierStatus, IBierStatusProps } from "./BierStatus/BierStatus";

export default class Bier extends React.Component<IBierProps, {}> {
  public render(): React.ReactElement<IBierProps> {
    return (
      <div className={styles.bier}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>
              <BierStatus count={6} limit={6} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
