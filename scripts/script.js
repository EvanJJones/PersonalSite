document.addEventListener(
  'click',
  (event) => {
    // If the clicked element doesn't have the right selector, bail
    if (event.target.matches('.clickableDiv')) {
      // Don't follow the link
      event.preventDefault();
      document.getElementById(event.target.dataset.id).style.display = 'block';
      // Log the clicked element in the console
      // console.log(event.target.dataset.id);
    } else if (event.target.matches('.close')) {
      document.getElementById(event.target.dataset.id).style.display = 'none';
    } else if (event.target.matches('.modal')) {
      event.target.style.display = 'none';
    }
  },
  false,
);

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = 'block';
// };

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = 'none';
// };

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// };
