student_name_array=[];
function submit(){
var display_array=[];
for(var j=1; j<=4; j++){
var name= document.getElementById("name_of_the_student_"+j).value;
student_name_array.push(name);    
}
var length= student_name_array.length;
for(var k=0; k<length; k++){
display_array.push("<h4>name-"+ student_name_array[k]+"</h4>");    
}
document.getElementById("display_name_with_commas").innerHTML=display_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
 student_name_array.sort();
var display_array_sorting=[]; 
var length= student_name_array.length;
for(var k=0; k<length; k++){
display_array_sorting.push("<h4>name-"+ student_name_array[k]+"</h4>");    
}
var remove_commas=display_array_sorting.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

