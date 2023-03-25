import { setHTML, setText } from './print2DOM.js';
import { statusWinner, shapes, ramdomShape } from './game.js'

const allShapesElt = document.querySelector('#shapes');

const renderShapes = () => {
  for (const obj of shapes) {
    setHTML("[data-shapes]", `<span data-shape=${obj.shape}>${obj.shape}</span>`, true)
  }
}
renderShapes();


allShapesElt.addEventListener("click", ({ target }) => {
  allShapesElt.classList.toggle('stopEvent')

  const shapeSelected = target.closest("span");
  shapeSelected.classList.toggle("selected");

  const hand2 = ramdomShape();
  const hand1 = shapes.find(({ shape }) => shape == shapeSelected.dataset.shape);
  console.log(hand1, hand2)

  // 
  // setText("current-hand1", `${hand1.shape}`, document.querySelector("data-current-play"));
  setText("current-hand1", `${hand1.shape}`);
  setText("current-hand2", `${hand2.shape}`);

  document.getElementById("hand2").classList.toggle("show")
  document.getElementById("hand1").classList.toggle("show")
  const status = statusWinner(hand1, hand2);
  setHTML("[data-results]", `<li>${status}</li>`, true)

  setTimeout(function () {
    document.getElementById("hand2").classList.toggle("show")
    document.getElementById("hand1").classList.toggle("show")
    allShapesElt.classList.toggle('stopEvent');
    shapeSelected.classList.toggle("selected");
  }, 1500);

});




