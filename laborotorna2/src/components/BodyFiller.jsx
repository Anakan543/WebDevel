import React from "react";
import { Checkbox } from "./checkbox";

export class BodyFiller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: 0 };
  }

  CountItem = (isChecked) => {
    console.log(isChecked);
    this.setState(() => ({
      selectedItem: isChecked
        ? this.state.selectedItem + 1
        : this.state.selectedItem - 1,
    }));
  };

  render() {
    return (
      <>
        <div className="container blockTest">
          <div className="selectedItems">
            Selected items{this.state.selectedItem}
          </div>
          <form className="form">
            <Checkbox children={"item1"} onChange={this.CountItem} />
            <Checkbox children={"item2"} onChange={this.CountItem} />
            <Checkbox children={"item3"} onChange={this.CountItem} />
            <Checkbox children={"item4"} onChange={this.CountItem} />
          </form>
        </div>
      </>
    );
  }
}
