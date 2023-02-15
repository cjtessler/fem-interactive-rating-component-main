let scoreContainer = document.getElementById('scoreContainer').childNodes;

scoreContainer.forEach(elt => {
  // console.log(elt);
  elt.addEventListener("click", (e) => {
    console.log(e.target.classList);
    e.target.classList.add('selected');
  });
});

