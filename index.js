let pager = document.getElementById("pager")
let phone = document.getElementById("phone")
let temp = ""
 function reset(){
    pager.innerText = "------"
    phone.innerText = "------"
    temp=""
    console.log(pager.innerText)
 }
 function sample(data){
    if(temp.length < 6){
        temp += data
        phone.innerText = temp
        console.log(temp.length)
    }
 }
 function send(){
    if(temp.length == 6){
        pager.innerText = temp
    }
 }