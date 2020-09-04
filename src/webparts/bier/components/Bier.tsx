import * as React from "react";
import styles from "./Bier.module.scss";
import { IBierProps } from "./IBierProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { BierStatus } from "./BierStatus";
import { Button } from "office-ui-fabric-react/lib/Button";

export interface IBierState {
  count: number;
}

export default class Bier extends React.Component<IBierProps, IBierState> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

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
              <Button
                disabled={this.state.count >= this.props.limit}
                onClick={() => {
                  this.setState({ count: this.state.count + 1 });
                }}
              >
                Trink!
              </Button>
              <BierStatus count={this.state.count} limit={this.props.limit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
