
const  input=document.querySelector("input")

let string=""
function number(value){
    if(value=="c"){
      string=""
      input.value=string
    }
    else{
    if(value=="="){ 
        string=eval(string)
        input.value=string
        console.log(string)
    }
    else{
        string=string+value
        input.value=string
    }
}

}

