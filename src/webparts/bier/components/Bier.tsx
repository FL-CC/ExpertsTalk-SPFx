import * as React from "react";
import styles from "./Bier.module.scss";
import { escape } from "@microsoft/sp-lodash-subset";

import { BierStatus } from "./BierStatus/BierStatus";
import {
  IBierState,
  IBierSorte,
  IBierProps,
  IBierListItem,
} from "./interfaces/BierInterfaces";
import { Slider } from "office-ui-fabric-react/lib/Slider";
import { Button } from "office-ui-fabric-react/lib/Button";
import { BierTable } from "./BierTable/BierTable";
import { sp } from "@pnp/sp/presets/all";
import { FabricBierTable } from "./FabricComponents/FabricBierTable";

export default class Bier extends React.Component<IBierProps, IBierState> {
  constructor(props: IBierProps) {
    super(props);
    this.state = { count: 0, limit: props.limit, bierData: [] };
  }

  private async getBiersPnP(): Promise<IBierSorte[]> {
    let biere: IBierSorte[] = [];

    try {
      const bierItems: IBierListItem[] = await sp.web.lists
        .getByTitle("Bier")
        .items.getAll();
      console.log("XX bier items", bierItems);
      bierItems.forEach((bierItem: IBierListItem) => {
        biere.push({
          title: bierItem.Title,
          price: bierItem.Price,
          percent: bierItem.Percent,
        });
      });
    } catch (error) {
      console.log("XX error getting biere", error);
    }

    return biere;
  }

  private getBierData(): IBierSorte[] {
    return [
      { title: "A", percent: 3, price: 4 },
      { title: "B", percent: 4, price: 3 },
      { title: "C", percent: 5, price: 2 },
    ];
  }

  public componentDidUpdate(prevProps: IBierProps) {
    if (prevProps.limit != this.props.limit) {
      this.setState({ limit: this.props.limit });
    }
  }

  public componentDidMount() {
    this.getBiersPnP()
      .then((bierData: IBierSorte[]) => {
        if (bierData.length > 0) {
          this.setState({ bierData: bierData });
        } else {
          this.setState({ bierData: this.getBierData() });
        }
      })
      .catch(() => {
        this.setState({ bierData: this.getBierData() });
      });
  }

  public render(): React.ReactElement<IBierProps> {
    return (
      <div className={styles.bier}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>It's in SharePoint!</span>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>

              <table>
                <tr>
                  <td>
                    <Button
                      style={{ marginRight: 40 }}
                      onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                      }
                    >
                      Trink!
                    </Button>
                  </td>
                  <td style={{ width: 300 }}>
                    <BierStatus
                      count={this.state.count}
                      limit={this.state.limit}
                    />
                  </td>
                  <td>
                    <BierTable biere={this.state.bierData} />
                  </td>
                </tr>
              </table>

              <div className={styles.sliderRow}>
                <Slider
                  label="Mein Limit"
                  value={this.state.limit}
                  min={0}
                  max={10}
                  onChange={(value) => this.setState({ limit: value })}
                />
                <Slider
                  label="Count"
                  value={this.state.count}
                  min={0}
                  max={10}
                  disabled
                />
              </div>

              <FabricBierTable items={this.state.bierData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
