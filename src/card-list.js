import { LitElement, html, css } from "lit";
import "vehicle-info-card/src/vehicle-info-card";
import "city-card/src/city-card";

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.header = "My app";
  }

  render() {
    return html`
      <main>
        <vehicle-info-card></vehicle-info-card>

        <city-card></city-card>

      </main>
    `;
  }
}

customElements.define("card-list", CardList);
