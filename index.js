var btn=document.querySelectorAll("button");
var display=document.querySelector("input");
var data='';
for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        
        var val=this.innerText;
        // console.log(data);
        displayData(val);
    });

    btn[i].addEventListener("keypress",function(event){
        var val1=event.key;
        //  console.log(val1);
        displayData(val1);
    })
   

}

function displayData(val){
    if(val=='C'){
        data="";
        display.value=data;
    }
    else if(val==="="){
        display.value=eval(data);
        data=display;
    }
    // else if(val==="Enter"){
    //     display.value=eval(data);
    //     data=display;
    // }
    else{
        data+=val;
        display.value=data;
    }
}