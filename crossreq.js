
var ve={"fr":"","to":"","qu":"","cl":"","da":"","tn":"","st":"","av":""};
   document.addEventListener('DOMContentLoaded', function () {
   document.getElementById("but").addEventListener('click',function(){
if(ne=='no'||ne=='y')
{

myrequest();
 }
else
{

document.getElementById('wrong').innerHTML="Some problem occured. Reopen with open button.";
}


});
   
   });
   
/*function myrequest(){
var data=document.getElementById("jdetail").getElementsByTagName("input");
var from =data[0].value.split(" - ")[1];
var to = data[1].value.split(" - ")[1];
var no = data[2].value.split(" : ")[0];
var text="http://erail.in/rail/getTrains.aspx?Station_From="+from+"&Station_To="+to+"&DataSource=0&Language=0&Cache=true";
$.ajax({
    type: 'GET',
    dataType: "text",
    crossDomain: true,
    url: text,
	success: function (responseData, textStatus, jqXHR){
	var resp = JSON.parse(responseData);
	var d=resp.split("^");
	document.getElementById("demo").innerHTML=d[0];
	
	}
	
})
}*/
function myrequest(){
	
var dat=document.getElementById("jdetail").getElementsByTagName("input");
if(dat[0].value==""||dat[1].value==""||dat[3].value==""||dat[2].value=="")
{
alert('Please fill every detail in "Journey Detail" section');
}
else
mynrequest();

}
function mynrequest(){
	document.getElementById("wrong").innerHTML="";
	document.getElementById("status").innerHTML="Please Wait!"
var xhr = new XMLHttpRequest();
var message;
var data=document.getElementById("jdetail").getElementsByTagName("input");
uf=data[0].value;
ut=data[1].value;

var from =data[0].value.split(" - ")[1];
var to = data[1].value.split(" - ")[1];
var no = data[3].value.split(" : ")[0];
var date = data[2].value.split("-");
var text="http://erail.in/rail/getTrains.aspx?Station_From="+from+"&Station_To="+to+"&DataSource=0&Language=0&Cache=true";
xhr.open("GET",text, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    var i=0;
	var d=xhr.responseText.split("^");
	var matcher = new RegExp( "^"+no, "i" );
	for(i=1;i<d.length;i++)
	{
	if(matcher.test(d[i]))
	{
	 var cla=document.getElementById("cla").value;
	 
	 var train=d[i].split('~~~~~~~~');
	 if(cla!='EC')
         {
	 if(train[2].search(cla+":")==-1)
	 {
	 document.getElementById("status").innerHTML="";
	 document.getElementById("wrong").innerHTML="Thish class is not available in this train";
	 return ;
	 }
         }
         else
         document.getElementById("wrong").innerHTML="Unable to check <u>EC</u> class.<br>You can proceed furthur if you are sure.";
	var traind = d[i].split('~~~~~~~~')[0].split('~');
	var day=traind[13].split("");
	var d=new Date();
	d.setFullYear(date[2], date[1]-1, date[0]);
	var s
	if(d.getDay()==0)
	{
	s=6;
	}
	else 
	s=d.getDay()-1;
	if(day[s]==0)
	{
	var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
    var dayma='The given train does not runs on '+n+'.<br>Change the journey date or trainno or both.<br>Please check running days of your train.Before entering Train no and Journey Date.'
	document.getElementById("wrong").innerHTML=dayma;
	document.getElementById("status").innerHTML="";
	break;
	}
	if(traind[7]!=from||traind[9]!=to)
	{
	message = 'Your selected train runs beetween '+traind[7]+' and '+traind[9]+'.\nAre you want to change stations for uninterrupted booking?';
	
		var matche = new RegExp( " - "+traind[7]+"$", "gi" );
		var match  = new RegExp( " - "+traind[9]+"$", "gi" );
	
	    
        for(i=0;i<availableTags.length;i++)
		{
		
		if(matche.test(availableTags[i]))
		{
		data[0].value=availableTags[i];
		}
		if(match.test(availableTags[i]))
		{
		data[1].value=availableTags[i];
		}
		}
	ve.fr=$("#tags").val();
	ve.to=$("#tags1").val();
	ve.qu=$("#qu").val();
	ve.cl=$("#cla").val();
	ve.da=$("#datepicker").val();
	ve.tn=$("#trains").val();
	chrome.storage.sync.set({'ve':JSON.stringify(ve)});
	
document.getElementById("status").innerHTML="Your data now accurate.Your entered stations (<u>"+from+"</u> to <u>"+to+"</u>) are cahnged by system.<br>Because given train runs b/w stations <u>"+traind[7]+"</u>-"+traind[6]+" & <u>"+traind[9]+"</u>-"+traind[8]+".";
        
	break;
	}
	ve.fr=$("#tags").val();
	ve.to=$("#tags1").val();
	ve.qu=$("#qu").val();
	ve.cl=$("#cla").val();
	ve.da=$("#datepicker").val();
	ve.tn=$("#trains").val();
	chrome.storage.sync.set({'ve':JSON.stringify(ve)});
 document.getElementById("status").innerHTML="Your data accurate.";
	break;
	}
	}
	if(i==d.length)
	{
		document.getElementById("status").innerHTML="";
	alert("Wrong train no please change!\n             or              \nInternet connection not available.\n                or              \nYour train does not runs on this root");
  }
  }
}
xhr.send();
add();
}
var myvar,timer=0;
var myWindow;
function verify()
{
	
	if(document.getElementById("status").innerHTML!="")
	{
	myvar = setInterval(function(){check();},4000);
	 myWindow = window.open("http://www.indianrail.gov.in/seat_Avail.html", "myWindow", "width=200, height=100");
	 
	}
	else
	{
		document.getElementById("wrong").innerHTML="Please verify your journey detail.";
	}
	
	
	
}
var ven;
function check()
{
	
	if(timer>15)
	{
		chrome.windows.getAll( function(win){chrome.windows.remove(win[1].id);});
		timer=0;
		clearInterval(myvar);
	}
	chrome.storage.sync.get(['ve'],function(item){
		ven=JSON.parse(item['ve']);
		if(ven.st=="1")
		{
			document.getElementById("status").innerHTML=("Seat Availability is "+ven.av+".You can book ticket");
			chrome.windows.getAll( function(win){chrome.windows.remove(win[1].id);});
			clearInterval(myvar);
			
		}
		else if(ven.st=="0")
		{
			document.getElementById("wrong").innerHTML=("You can not book ticket in given date.")
			chrome.windows.getAll( function(win){chrome.windows.remove(win[1].id);});
			clearInterval(myvar);
		}
		
	});
	timer=timer+1;
}
