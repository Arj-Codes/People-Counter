// document.getElementById("element").innerText = 5

// VARIABLES
  // let count=4;
  // count+=1
  // console.log(count)

  // FUNCTIONS
  // function increment(){
  //   console.log("The button was clicked")
  // }
  // let c=0
  // function count(){
  //   c+=1;
  // }
  // count() 
  // count() 
  // count()
  // console.log(c) 
  let count =0;
  let newEl = document.getElementById("element")
  console.log(newEl)//prints the html element aquired from the html document
  function increment(){
    count+=1;
    newEl.innerText=count
  }
 let newE2 = document.getElementById("element")
 function decrement(){
   count-=1;
   newE2.innerText = count
 }
 function save(){
   let saveEl = document.getElementById("save-el")
   count1 =count + " - "
 //   saveEl.innerText += count1//doesnt read those texts which arent human readable
 //   alternative to innerText
   saveEl.textContent += count1 //solves the above issue
 }
 let newE3 = document.getElementById("element")
 function reset(){
     count =0
   newE3.textContent = count
   }
 // let str1 = "You have 3 new notifs"
 // let str2 = "  You have 4 new notifs"
 // console.log(str1+str2)
 // let name = "Arjun"
 // let greeting = "My name is "
 // let myGreeting = greeting+name
 // console.log(myGreeting)
 
 // let a1 = 2
 // let a2 = "10"
 // console.log(a1+a2)
 // let welcomeEl = document.getElementById("welcome-el")
 // let name = "Arjun"
 // let greeting = "Welcome back to our test site "
 // welcomeEl.innerText = greeting + name 
 // welcomeEl.innerText += "!"
 // javascript