import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "BierWebPartStrings";
import Bier from "./components/Bier";
import { IBierProps } from "./components/IBierProps";
import { sp } from "@pnp/sp/presets/all";

export interface IBierWebPartProps {
  description: string;
}

export default class BierWebPart extends BaseClientSideWebPart<
  IBierWebPartProps
> {
  public onInit(): Promise<void> {
    return super.onInit().then((_) => {
      sp.setup({ spfxContext: this.context });
    });
  }

  public render(): void {
    const element: React.ReactElement<IBierProps> = React.createElement(Bier, {
      description: this.properties.description,
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
              ],
            },
          ],
        },
      ],
    };
  }
}
