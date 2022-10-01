

localStorage.setItem('theme', 'light')//to practice with dark mode

let storedTheme = localStorage.getItem('theme') || //get scheme preference
(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

console.log("stored theme is: " + storedTheme)

//if theme preference is dark set class name on body element
if(storedTheme === "dark") {
    document.querySelector("body").classList.add("darkmode")
    console.log("inside stored theme if statement")
} 


let currentTheme = storedTheme

//create function to toggle scheme
function toggle() {
      document.querySelector("body").classList.toggle("darkmode")
    if(currentTheme === 'light') {
        currentTheme = 'dark'
    } else currentTheme = "light"
    localStorage.setItem('theme', JSON.stringify(currentTheme))   
}


    




