
/*render card components*/
const data = 
[{
 id: 1,
 socialImg: "icon-facebook.svg",
 name: "@nathanf",
 numFollowers: 1987,
 current: "12 Today"
 },

 {
 id: 2,
 socialImg: "icon-twitter.svg",
 name: "@nathanf",
 numFollowers: 1044,
 current: "99 Today"
 },

 {
 id: 3,
 socialImg: "icon-instagram.svg",
 name: "@realnathan",
 numFollowers: "11k",
 current: "1099 Today"
 },

{ 
  id: 4,
  socialImg: "icon-youtube.svg",
  name:  "Nathan F.",
  numFollowers: 8239,
  current: "144 Today"

}
]

const cardEl = document.querySelector("#cards")

   const bigCardArray = data.map(element => {
   const {id, socialImg, name, numFollowers, current} = element
   
   let html = 
      `<div>
          <img src="images/${socialImg}"/> 
          <span>${element.name}</span>
          <h1>${element.numFollowers}</h1>
          <h3>Followers</h3>
          <p>${element.current}</p>
      </div>`

      cardEl.innerHTML = html

      console.log(html)
      
})

console.log(bigCardArray)

 







    










