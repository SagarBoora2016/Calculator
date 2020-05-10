var buttons = document.getElementsByClassName("button");
var display = document.getElementById("my-input");
var operand1 = null;
var operand2 = null;
var operator = null;
for(var i =0 ;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        if(display.innerText=="Error"){
            display.innerText="";
        }
        if(display.innerText == '*' || display.innerText == '/' || display.innerText == '-' || display.innerText == '+' || display.innerText == '%' ){
            display.innerText="";
        }
        var value = this.getAttribute('data-value');
        if(value=='+'){

            operand1 = display.innerText;
            if(operand1==null || operand1.length==0 || operand1=="Error"){
                display.innerText="Error";
                operand1 = null;
                operand2=null;
                return;
            }
            console.log(operand1);
            display.innerText="";
            operator = '+';
        }else if(value=='-'){
            operand1 = display.innerText;
            if(operand1==null || operand1.length==0 || operand1=="Error"){
                display.innerText="Error";
                operand1 = null;
                operand2=null;
                return;
            }
            console.log(operand1);
            display.innerText="";
            operator = '-';
        }
        else if(value=='*'){
            operand1 = display.innerText;
            if(operand1==null || operand1.length==0 || operand1=="Error"){
                display.innerText="Error";
                operand1 = null;
                operand2=null;
                return;
            }
            console.log(operand1);
            display.innerText="";
            operator = '*';
        }
        else if(value=='/'){
            operand1 = display.innerText;
            if(operand1==null || operand1.length==0 || operand1=="Error"){
                display.innerText="Error";
                operand1 = null;
                operand2=null;
                return;
            }
            console.log(operand1);
            display.innerText="";
            operator = '/';
        }else if(value=='%'){
            operand1 = display.innerText;
            if(operand1==null || operand1.length==0 || operand1=="Error"){
                display.innerText="Error";
                operand1 = null;
                operand2=null;
                return;
            }
            console.log(operand1);
            display.innerText="";
            operator = '%';
        }else if(value=='='){
            if(operand1==null){
                display.innerText="Error";
                operand1 = null;
                operand2=null;
                return;
            }
            operand2 = display.innerText;
            display.innerText="";
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);
            console.log(operand1 , operand2);
            var ans = eval(operand1 + " " + operator + " " + operand2);
            // if(typeof(ans)=="number"){
            //     display.innerText="Error";
            //     return;
            // }
            display.innerText=parseFloat(ans);
            operand1=parseFloat(ans);
        
        }else if(value == "clear"){
            display.innerText="";
            operand1=null;
            operand2=null;
            operator=null;
        }
        else if(value == "substr"){
            var str = display.innerText.toString();
            if(str==null || str.length==0 || str=="Error"){
                display.innerText="Error";
            }else{
                display.innerText = str.substr(0,str.length-1);
            }

        }else if(value=="pos-neg"){
            var x =display.innerText;
            if(x == null || x=="" ||  x=="Error"){
                display.innerText="Error";
                return;
            }
            x = -(x);
            display.innerText=x;
        }
        else{
            display.innerText +=value;
        }
    });
}
// console.log(buttons.length);