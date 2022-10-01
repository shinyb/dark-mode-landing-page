
const data = [

{   id: 5,
    socialImg: "icon-facebook.svg",
    text: "Page Views",
    count:  87,
    growth:  "3%"
},

{
  id: 6,
  socialImg: "icon-facebook.svg",
  text: "Likes",
  count: 52,
  growth: "2%"
},

{
  id: 7,
  socialImg: "icon-instagram.svg",
  text: "Likes",
  count: 5462,
  growth: "2257%"
},


{
  id: 8,
  socialImg: "icon-instagram.svg",
  text: "Profile Views",
  count: "52k",
  growth: "1375%"
},

{
  id: 9,
  socialImg: "icon-twitter.svg",
  text: "Retweets",
  count: 117,
  growth: "303%"
},


{
  id: 10,
  socialImg: "icon-twitter.svg",
  text: "Likes",
  count: 507,
  growth: "553%"
},

{
  id: 11,
  socialImg: "icon-youtube.svg",
  text: "Likes",
  count: 107,
  growth: "19%"
},

{
 id: 12,
 socialImg: "icon-youtube.svg",
 text: "Total Views",
 count: 1407,
 growth: "12%"
}
]

/*const cardEl = document.querySelector("#cards")*/

   const smCardArray = data.map(element => {
   const {socialImg, text, count, growth} = element
   
   let html = 
      `<div class="sm-card">
          <span class="text">${text}</span>
          <img src="images/${socialImg}"/> 
          <h4 class="count">${count}</h4>
          <p class="growth">${growth}</p>
       </div>`

      /*cardEl.innerHTML = html*/

      console.log(html)
      
})

console.log(smCardArray)

