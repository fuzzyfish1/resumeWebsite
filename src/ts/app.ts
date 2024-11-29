/*
function greet(name: string): string {

	console.log(`Hello, ${name}`);
	return "hello" + name;
}

document.body.textContent = greet("wasdfasdfd");
document.body.textContent = greet("bloop");
*/

window.addEventListener("load", attachListener);
// dont want to reattach a listener
// window.addEventListener("resize", attachListener);

function attachListener() : void {
    // poses an issue that the listener isn't attached if screensize shrinks
    // this is bc listener attaches when it loads if these are already active ... large screen inactive -> unloaded, small screen still unloaded
    var tglMenus = document.querySelectorAll('.tglMenu');

    if (tglMenus != null) {
        for (let i = 0; i < tglMenus.length; i++) {
            tglMenus[i].addEventListener("click", (e:Event) => toggleFunction());

        }
    }
}

function toggleFunction() : void {

    var x = document.querySelector("#navDemo");

    if (x == null){
        console.log("we fucked up");
    } else if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

window.onscroll = function() {animateNavBar()};

function animateNavBar() {
    var navbar = document.getElementById("myNavbar");

    if (navbar == null){
        console.log("you done a fucky");
    } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-black", "");
    }
}

