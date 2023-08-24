// class CreatingBlocks {
//   constructor() {
//     document.body.innerHTML = `<div class='block1'></div>
//       <div class='block2'></div>
//       <div class='block3'></div>
//       <button class="Open">Open</button>
//       <button class="close">close</button>`;

//     const open = document.querySelector(".Open");

//     open.addEventListener("click", () => {
//       const block1 = document.querySelector(".block1");
//       const block2 = document.querySelector(".block2");
//       const block3 = document.querySelector(".block3");

//       block1.style.display = "block";
//       block2.style.display = "block";
//       block3.style.display = "block";
//     });
//     const close = document.querySelector(".close");
//     close.addEventListener("click", () => {
//       const block1 = document.querySelector(".block1");
//       const block2 = document.querySelector(".block2");
//       const block3 = document.querySelector(".block3");

//       block1.style.display = "none";
//       block2.style.display = "none";
//       block3.style.display = "none";
//     });
//   }
// }

// class CreatingBlocks {
//   constructor() {
//     document.body.innerHTML = `
//       <div class='block1'></div>
//       <div class='block2'></div>
//       <div class='block3'></div>
//       <button class="Open">Open</button>
//       <button class="close">Close</button>
//     `;

//     const blocks = document.querySelectorAll(".block1, .block2, .block3");
//     const open = document.querySelector(".Open");
//     const close = document.querySelector(".close");

//     const toggleBlocks = (isVisible) => {
//       blocks.forEach((block) => {
//         if (isVisible) {
//           block.classList.add("visible");
//         } else {
//           block.classList.remove("visible");
//         }
//       });
//     };
//     open.addEventListener("click", () => {
//       toggleBlocks(true);
//     });

//     close.addEventListener("click", () => {
//       toggleBlocks(false);
//     });
//   }
// }

// export default CreatingBlocks;

// !......................A More effective written code for the same task.......................

class CreatingBlocks {
  constructor() {
    const blockButtons = ["block1", "block2", "block3"];
    document.body.innerHTML =
      blockButtons.map((btn) => `<div class='${btn}'></div>`).join("") +
      '<button class="toggle">Toggle</button>';
    const toggleButton = document.querySelector(".toggle");
    const blocks = blockButtons.map((btn) => document.querySelector(`.${btn}`));

    toggleButton.addEventListener("click", () => {
      const displayValue =
        blocks[0].style.display === "none" ? "block" : "none";
      blocks.forEach((block) => (block.style.display = displayValue));
    });
  }
}

export default CreatingBlocks;
