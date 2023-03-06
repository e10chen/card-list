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
        <vehicle-info-card>
          <h2 slot="subtitle">Ethan Chen</h2>

          <p slot="vehicleDescription">
            The image above is a Tacoma pickup truck made by the Japanese
            automaker Toyota. Toyota has been making the Tacoma pickup truck
            since 1995. The Tacoma has two engines options: 2.7-liter 4-Cylinder
            and the 3.5-liter V6. It has a miles per gallon of 20 in the city
            and 23 on the highway.
          </p></vehicle-info-card
        >

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
          img="https://hips.hearstapps.com/hmg-prod/images/2023-toyota-gr-corolla-111-1648581910.jpg"
          topText="Vroom"
          bottomText="Vroom"
        >
          <h2 slot="subtitle">GRRRRR</h2>
          <p slot="vehicleDescription">I want this car</p>
        </vehicle-info-card>

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
          img="https://www.topgear.com/sites/default/files/cars-car/image/2019/12/images_original_15164-volkswagengolfgtiperformance.jpg"
          topText="THE"
          bottomText="MK7"
        >
          <h2 slot="subtitle">THE VW</h2>
          <p slot="vehicleDescription">
            I also like this car
          </p></vehicle-info-card
        >

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
          img="https://hips.hearstapps.com/hmg-prod/images/2021-honda-civic-type-r-mmp-1-1596639951.jpg"
          topText="TYPE"
          bottomText="R"
        >
          <h2 slot="subtitle">I am a Honda Guy</h2>
          <p slot="vehicleDescription">Cool looking car</p></vehicle-info-card
        >

        <city-card
          class="cardImplementationThreecity"
          title="Kansas City"
          image="https://tourscanner.com/blog/wp-content/uploads/2021/07/fun-things-to-do-in-Kansas-City.jpg"
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
          img="https://images.hgmsites.net/hug/2022-hyundai-elantra_100820735_h.jpg"
          topText="Slick"
          bottomText="Looking Car"
          >
          <h2 slot="subtitle">That is an Elantra?!?!?</h2>
          <p slot="vehicleDescription">
            I like the exterior of this car
          </p></vehicle-info-card
        >

        <city-card
          class="cardImplementationFourcity"
          title="Boston"
          image="https://web-assets.bcg.com/dims4/default/10b8897/2147483647/strip/true/crop/2880x1620+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2Fae%2F00%2Fa65a946245eb878b5d0df4bd1588%2Fboston-hero-image.jpg"
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
