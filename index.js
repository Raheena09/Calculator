var val1 = '';
var val2 = '';
var operator= '';
var result='';
var Displayval='';

function getValue(val) {
     Displayval=Displayval+ val;

    if(operator!=''){
        val2=parseInt(val2+''+val);
    }else{
        val1=parseInt(val1+''+val);
    }
    document.getElementById('result').innerText=Displayval;
}
function getOperator(ope) {
    Displayval=Displayval+ ope;
    operator = ope;
    document.getElementById('result').innerText=Displayval;
}


function calculate() {
  
    if (operator =='+') {
        result = val1+val2;
    }
    else if (operator == '-') {
        result = val1-val2;
    }

    else if (operator == '*') {
        result = val1*val2;
    }
    else if (operator == '/') {
        result = val1/val2;
    }
    document.getElementById('result').innerText=result;
}
function ClearAll(){
 val1 = '';
 val2 = '';
 operator= '';
 result='';
 Displayval='';
document.getElementById('result').innerText='0';
}
