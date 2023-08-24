import { gsap } from "gsap";
import mSun from "../assets/sun-big-white.png";
import weather from "../assets/temperature.json";
import calculate from "./calculate";
import Menu from "./menu";

class Test {
  //
  constructor() {
    this.getCurrentTargetIndex = 0;
    this.weather = weather;
    console.log(this.weather);
    // !.............................................................................
    this.sun = document.createElement("div");
    this.sun.id = "sun";
    document.body.appendChild(this.sun);
    this.sun.innerHTML = `<img src =${mSun} />`;
    gsap.to("#sun", {
      duration: 30,
      rotation: 360,
      transformOrigin: "center",
      repeat: -1,
    });

    this.container = document.createElement("div");
    this.container.id = "container";
    document.body.appendChild(this.container);
    // !
    this.container.innerHTML =
      "" +
      this.weather.month
        .map((item, index) => {
          return `

          <div id="childCon">

          <div id='block' class='${"maps" + index}'></div>
          <div class="temprature" id="${"temp" + index}">${
            this.weather.temperature[0].averageTemperature[index]
          }</div>

          <div class="month">${item}</div>

          </div>
      `;
        })
        .join("") +
      "";

    let calc = new calculate(this.weather.temperature[0].averageTemperature);

    this.yearContainer = document.createElement("div");
    this.yearContainer.id = "yearContainer";
    this.yearContainer.className = "yearContainer";
    document.body.appendChild(this.yearContainer);
    this.yearContainer.innerHTML =
      "" +
      this.weather.temperature
        .map((item, index) => {
          return `
    <div
    class = '${"year" + index}'
    id='year' data-index=${index}>
    ${item.year}
    </div>
    `; //END return
        })
        .join("") +
      "";

    new Menu(this.weather);
    new calculate(this.weather.temperature[0].averageTemperature);

    this.getAverageTemp(this.getCurrentTargetIndex);
  }

  // !..................................................................................
  // .....................End of instructer

  getAverageTemp(currentMenuItemIndex) {
    let getChildTempCon = document.querySelectorAll(".temperature");

    for (let i = 0; i < 7; i++) {
      document.querySelector("#temp" + i).innerHTML =
        this.weather.temperature[currentMenuItemIndex].averageTemperature[i];
    }
  }
}
// ......................End of class

export default Test;
