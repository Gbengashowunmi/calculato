let result = document.getElementById('inputext');

let calculate = (number)=>{
    result.value += number;
}

let answer = ()=>{
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert('Enter valid operation');
    }
}

let reset = ()=>{
    result.value = '';
}

function del (){
    result.value = result.value.slice(0, -1)
}