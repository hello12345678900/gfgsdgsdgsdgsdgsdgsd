import { gsap } from "gsap";

class calculate {
  constructor(averageTemp) {
    let averageTempLength = averageTemp.length;
    for (let i = 0; i < averageTempLength; i++) {
      let ForGsap = document.querySelectorAll(".maps" + i);

      gsap.to(ForGsap, {
        duration: 2,
        scaleY: averageTemp[i] / 10,
        transformOrigin: "bottom",
        ease: "elastic.out",
      });
      //
      ForGsap.forEach((element) => {
        if (averageTemp[i] > 10 && averageTemp[i] < 20) {
          element.style.backgroundColor = "orange";
        } else if (averageTemp[i] >= 20) {
          element.style.backgroundColor = "red";
        }
      });
      // End loop................................................
    }
  }
}

export default calculate;
