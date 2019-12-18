function GetClock(){
d = new Date();
nhour  = d.getHours();
nmin   = d.getMinutes();
nsec   = d.getSeconds();
     if(nhour ==  0) {ap = " AM";nhour = 12;} 
else if(nhour <= 11) {ap = " AM";} 
else if(nhour == 12) {ap = " PM";} 
else if(nhour >= 13) {ap = " PM";nhour -= 12;}

if(nmin <= 9) {nmin = "0" +nmin;}
if(nsec <= 9) {nsec = "0" +nsec;}
 
if(nsec%15 == 0){
    document.body.style.cssText = 'animation: pulse .25s infinite;';
}else{
    document.body.style.background = "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)";
}
    
var xhr = $.get(`http://api.giphy.com/v1/gifs/random?api_key=7b0DPjBxrw63UUJmTlNytjijMQOsOeT4`);
xhr.done(function(data){
         console.log(data);
if(nsec%5 == 0){
        document.getElementById("giphy").src = data.data.images.original.url;
}else{
    document.getElementById("giphy").src = "";
}
});
    

document.getElementById('clockbox').innerHTML=" "+nhour+":"+nmin+":"+nsec+" "+ap+" ";
setTimeout("GetClock()", 1000);
}

window.onload=GetClock;




