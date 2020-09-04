import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "BierWebPartStrings";
import Bier from "./components/Bier";
import { IBierProps } from "./components/IBierProps";

export interface IBierWebPartProps {
  description: string;
  limit: number;
}

export default class BierWebPart extends BaseClientSideWebPart<
  IBierWebPartProps
> {
  public render(): void {
    const element: React.ReactElement<IBierProps> = React.createElement(Bier, {
      description: this.properties.description,
      limit: this.properties.limit,
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
                PropertyPaneSlider("limit", {
                  label: "Mein Limit",
                  min: 0,
                  max: 20,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
