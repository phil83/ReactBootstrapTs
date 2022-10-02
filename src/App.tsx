import * as React from "react";
import { Button } from "@material-ui/core";

interface IProps extends React.Props<HTMLDivElement> {}
interface IState extends React.ComponentState {}

export default class App extends React.Component<IProps, IState> {
  private onClick(event: React.MouseEvent) {
    const filename = "testファイル.txt";
    const href = "./test.txt";

    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = href;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  }

  public render() {
    return (
      <div className="App">
        <Button variant="contained" onClick={event => this.onClick(event)}>
          Download
        </Button>
      </div>
    );
  }
}
