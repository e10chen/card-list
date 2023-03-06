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

        <city-card>
          <ul slot="stats">
            <li>State: Pennsylvania</li>
            <li>Crime Index: 7.9/10</li>
            <li>Sugar Tax: Yes</li>
            <li>Things to Do: Leave</li>
          </ul></city-card
        >

        <vehicle-info-card
          class="cardImplementationOnevehicle"
          modelName="Toyota GR Corolla"
          vehicleDescription="I like this car"
          img="https://hips.hearstapps.com/hmg-prod/images/2023-toyota-gr-corolla-111-1648581910.jpg"
          topText="Vroom"
          bottomText="Vroom"
        ></vehicle-info-card>

        <city-card
          class="cardImplementationOnecity"
          title="Baltimore"
          image="https://cdn.britannica.com/90/77990-050-E6087086/Inner-Harbor-skyline-Baltimore-Maryland.jpg"
          topLabel="Hellscape"
        >
          <ul slot="stats">
            <li>State: Maryland</li>
            <li>Crime Rate: 1 in 64</li>
            <li>Sugar Tax: No</li>
            <li>Things to Do: Riot</li>
          </ul></city-card
        >

        <vehicle-info-card
          class="cardImplementationTwovehicle"
          modelName="Volkswagen Golf GTI MK7"
          vehicleDescription="I also like this car"
          img="https://www.topgear.com/sites/default/files/cars-car/image/2019/12/images_original_15164-volkswagengolfgtiperformance.jpg"
          topText="THE"
          bottomText="MK7"
        ></vehicle-info-card>

        <city-card
          class="cardImplementationTwocity"
          title="Los Angeles"
          image="https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg"
          topLabel="Too Expensive"
        >
          <ul slot="stats">
            <li>State: California</li>
            <li>Crime Rate: 1 in 135</li>
            <li>Based?: No</li>
            <li>Things to Do: Eat Gluten Free Food</li>
          </ul>
        </city-card>

        <vehicle-info-card
          class="cardImplementationThreevehicle"
          modelName="Honda Civic Type R"
          vehicleDescription="Cool looking car"
          img="https://hips.hearstapps.com/hmg-prod/images/2021-honda-civic-type-r-mmp-1-1596639951.jpg"
          topText="TYPE"
          bottomText="R"
        ></vehicle-info-card>

        <city-card
          class="cardImplementationThreecity"
          title="Kansas City"
          image="https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg"
          topLabel="I like jazzzzzz"
        >
          <ul slot="stats">
            <li>State: Missouri</li>
            <li>Crime Rate: 1 in 111</li>
            <li>In Kansas?: NO</li>
            <li>Things to Do: Listen to Jazz</li>
          </ul>
        </city-card>

        <vehicle-info-card
          class="cardImplementationFourvehicle"
          modelName="Hyundai Elantra N"
          vehicleDescription="I like the exterior of this car"
          img="https://images.hgmsites.net/hug/2022-hyundai-elantra_100820735_h.jpg"
          topText="Slick"
          bottomText="Looking Car"
        ></vehicle-info-card>

        <city-card
          class="cardImplementationFourcity"
          title="Boston"
          image="https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg"
          topLabel="Bostonians Think They're just so much better"
        >
          <ul slot="stats">
            <li>State: Massachusetts</li>
            <li>Crime Rate: 216 per 100000</li>
            <li>Boston accent: Yes</li>
            <li>Things to Do: Throw Tea in the River</li>
          </ul>
        </city-card>

      </main>
    `;
  }
}

customElements.define("card-list", CardList);
