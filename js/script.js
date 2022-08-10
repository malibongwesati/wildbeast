const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active');
	showcase.classList.toggle('active');
});

/**modal starts**/
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
/**modal ends**/

/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById('mySidenav').style.width = '300px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById('mySidenav').style.width = '0';
}
