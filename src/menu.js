// import calculate from "./calculate";

// class Menu {
//   constructor(weather) {
//     this.getChilYearCon = document.querySelectorAll("#yearContainer > div");
//     this.getChilYearCon.forEach((item) => {
//       let lenghtOfYear = this.getChilYearCon.length;
//       item.addEventListener("click", (event) => {
//         for (let i = 0; i < lenghtOfYear; i++) {
//           this.getChilYearCon[i].computedStyleMap.backgroundColor = "#36aad8";
//           let currentDataIndex = event.currentTarget.dataset.index;
//           let getDataFromIndex =
//             this.weather.temperature[currentDataIndex].averageTemperature;
//           new calculate(getDataFromIndex);
//           this.getCurrentTargetIndex = event.currentTarget.dataset.index;
//           this.getAverageTemp(this.getCurrentTargetIndex);
//         }
//       });
//     });
//   }
// }

// export default Menu;

import calculate from "./calculate";

class Menu {
  constructor(weather) {
    this.weather = weather; // Store the weather data

    this.getChilYearCon = document.querySelectorAll("#yearContainer > div");
    this.getChilYearCon.forEach((item) => {
      let lenghtOfYear = this.getChilYearCon.length;
      item.addEventListener("click", (event) => {
        for (let i = 0; i < lenghtOfYear; i++) {
          this.getChilYearCon[i].computedStyleMap.backgroundColor = "#36aad8";
          let currentDataIndex = event.currentTarget.dataset.index;
          let getDataFromIndex =
            this.weather.temperature[currentDataIndex].averageTemperature;
          new calculate(getDataFromIndex);
          this.getCurrentTargetIndex = event.currentTarget.dataset.index;
          this.getAverageTemp(this.getCurrentTargetIndex);
        }
      });
    });
  }
}

export default Menu;
