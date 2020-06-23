$(document).ready(function(){
  Swal.fire({
		title: 'Please Acknowledge',
		text: 'This site is for education use only and is not the real site, please see the real Dockside website at www.docksidenz.com. This site was coded by Yana Brewster for a Yoobee Colleges group assignment',
		confirmButtonText: 'I understand that this is not the real site'
	})
})

function showNav(){
    var menu = document.getElementById("list");
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
