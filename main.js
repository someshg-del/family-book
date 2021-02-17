var names= ["1.Mr.Rakesh Kumar Tiwari","2.Mrs.Pratima Tiwari","3.Miss.Kalash Tiwari","4.Master.Somesh Tiwari"];


var image= ["papa.jpg","mummy.jpg","sister.jpg","me.jpg"];

   var i=0;

   function nextname() 
{ document.getElementById("image1").src=image[i];
  document.getElementById("Name") .innerHTML= names[i]; 
 i++ ;
  if(i>4) {i=0;}
}
