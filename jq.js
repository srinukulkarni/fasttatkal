$(document).bind('contextmenu', function (e) {
        e.preventDefault();
        
      });
var da = '0';

var theValue,logvalue,nextvalue,jvalue,ne,paykey,paydate,pmono,ppo,uf,ut,share;

chrome.storage.sync.get(['ne','jdetail','share'],function(item){ne=item['ne'];
try{
share=item['share'];
jvalue=JSON.parse(item['jdetail']);
}
catch(e)
{

}
if(jvalue===undefined)
{
uf="";
ut="";
}
else
{
jvalue=JSON.parse(item['jdetail']);
uf=jvalue.journeydetail.from;
ut=jvalue.journeydetail.to;
}
getdate();});
try{
chrome.storage.sync.get(['rise','paykey','paydate'],function(item){
	theValue=item['rise'];
        paykey=item['paykey'];
        paydate=item['paydate'];
	var p=theValue+"ujjwal";
	if(theValue === undefined)
	{
	
		document.getElementsByClassName("infofilldiv")[0].style.display="none";
		document.getElementsByClassName("welcome")[0].style.display="Block";
		$( ".infodiv" ).slideDown("slow");
	}
	else
	{
		chrome.storage.sync.get(['logdetail','nextd','jdetail','mobno','passopt'],function(item){
			logvalue=JSON.parse(item['logdetail']);
			nextvalue=JSON.parse(item['nextd']);
			jvalue=JSON.parse(item['jdetail']);
                        pmono=JSON.parse(item['mobno']);
                        ppo=JSON.parse(item['passopt']);
                         document.getElementById('st').innerHTML="Please wait....";
			getdate1();
		});
		
		
	}
	loadDoc();
});	
	
}
catch(err){
	document.getElementsByClassName("infofilldiv")[0].display="none";
		document.getElementsByClassName("infodiv")[0].display="block";
}

function showtab()
{
           document.getElementById('st').innerHTML="";
	document.getElementById("usr").innerHTML=logvalue.logindetail.username;
		document.getElementById("jd").innerHTML=jvalue.journeydetail.jdate;
		document.getElementById("f").innerHTML=jvalue.journeydetail.from;
		document.getElementById("t").innerHTML=jvalue.journeydetail.to;
		document.getElementById("q").innerHTML=nextvalue.quotaclass.quota;
		document.getElementById("c").innerHTML=nextvalue.quotaclass.class;
		document.getElementById("tn").innerHTML=jvalue.journeydetail.trainno;
                document.getElementById("umn").innerHTML=pmono.mobile;
                document.getElementById("datepicker").value=jvalue.journeydetail.jdate;
		document.getElementById("tags").value=jvalue.journeydetail.from;
		document.getElementById("tags1").value=jvalue.journeydetail.to;
		document.getElementById("qu").value=nextvalue.quotaclass.quota;
		document.getElementById("cla").value=nextvalue.quotaclass.class;
		document.getElementById("trains").value=jvalue.journeydetail.trainno;
                document.getElementById("mono").value=pmono.mobile;
                document.getElementById("usn").value=logvalue.logindetail.username;
                document.getElementById("usp").value=logvalue.logindetail.password;
                document.getElementById("au").checked=ppo.option.au;
                document.getElementById("boc").checked=ppo.option.boc;
                if(share==1)
                {
                $(".mytable").hide();
                $("#bb").hide();
                document.getElementById("sharen").innerHTML='You have to share it. Share one time and use unlimited.<br>For share  <a id="linkn" href="http://www.zeronine.in/share.php">Click Here</a>.';
                }
		$( ".infofilldiv" ).slideDown("slow");
		//document.getElementsByClassName("infofilldiv")[0].style.display="block";
		document.getElementsByClassName("infodiv")[0].style.display="none";
	
}
    

$(function() {
    $( "#tags" ).autocomplete({
      source: function( request, response ) {
          //var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "gi" );
		   if(document.getElementById("status").innerHTML!="")
			  document.getElementById("status").innerHTML="";
		  if(document.getElementById("wrong").innerHTML!="")
			  document.getElementById("wrong").innerHTML="";
		  var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "gi" );
          response( $.grep( availableTags, function( item ){
              return matcher.test( item );
          }) );
      },
	 
    });
    });
  
  $(function() {
    $( "#tags1" ).autocomplete({
      source: function( request, response ) {
          //var matcher = new RegExp( "(?=- "+$.ui.autocomplete.escapeRegex( request.term )+")", "gi" );
		  if(document.getElementById("status").innerHTML!="")
			  document.getElementById("status").innerHTML="";
		  if(document.getElementById("wrong").innerHTML!="")
			  document.getElementById("wrong").innerHTML="";
		  var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "gi" );
          response( $.grep( availableTags, function( item ){
              return matcher.test( item );
          }) );
	  
      }
	  
    });
  });
$(function() {
    $( "#board" ).autocomplete({
      source: function( request, response ) {
          //var matcher = new RegExp( "(?=- "+$.ui.autocomplete.escapeRegex( request.term )+")", "gi" );
		 
		  var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "gi" );
          response( $.grep( availableTags, function( item ){
              return matcher.test( item );
          }) );
	  
      }
	  
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
  
  document.getElementById("payopt").addEventListener('change',function(){showdiv();});
  document.getElementById("rise").addEventListener('change',function(){showimps();});
  document.getElementById("cla").addEventListener('change',function(){document.getElementById("wrong").innerHTML="";document.getElementById("status").innerHTML="";});
    /*document.getElementById("tags1").addEventListener('change',function(){status();});
	  document.getElementById("datepicker").addEventListener('change',function(){status();});
	    document.getElementById("trains").addEventListener('change',function(){status();});*/
});

function showimps(){
	
		if(document.getElementById("rise").value=="IMPS")
		{
			if(document.getElementById("imdetail").style.display!="block")
			{
			document.getElementById("idetail").style.display="none";
			
			document.getElementById("imdetail").style.display="block";
			}
			
		}
		else
		{
			if(document.getElementById("idetail").style.display!="block")
			{
			document.getElementById("imdetail").style.display="none";
			document.getElementById("idetail").style.display="block";
			}
		}
	
}
function status(){
document.getElementById("status").innerHTML="";
}
//----------------------------------event listners----------------
document.addEventListener('DOMContentLoaded', function () {
   document.getElementById("boa").addEventListener('click',function(){
$('#hi').hide();
$('#bo').show();
$('#board').focus();

}) ;
  document.getElementById("note").addEventListener('click',function(){
window.open('http://www.zeronine.in/note.php',"","top=100, left=450, width=600, height=400");
});
  document.getElementById("mybut").addEventListener('click',function(){
///////////////////////////////////////////////////////////////////////////////test it
if(share===undefined)
{
chrome.storage.sync.set({'share':'2'});
}
else if(share==0)
{
chrome.storage.sync.set({'share':'1'});

}
else if(share==1)
{

document.getElementById("share").innerHTML='You have to share it. Share one time and use unlimited.<br>For share  <a id="link" href="http://www.zeronine.in/share.php" >Click Here</a>.';

return "1";
}
/////////////////////////////////////////////////////////////////////////////////test it

setdata(0);});
//-------------------------------------------------
  document.getElementById("anim").addEventListener('click',function(){
//////////////////////////////////////////////////////////////////////*
if(share===undefined)
{
chrome.storage.sync.set({'share':'2'});
}
else if(share==0)
{
chrome.storage.sync.set({'share':'1'});

}
else if(share==1)
{
if(document.getElementById("share").innerHTML=="")
{
document.getElementById("share").innerHTML='You have to share it. Share one time and use unlimited.<br>For share  <a id="link" href="http://www.zeronine.in/share.php">Click Here</a>.';
}
return "1";
}

//////////////////////////////////////////////////////////////////////////

setdata(1);});
//--------------------------------------------------
  document.getElementById("sb").addEventListener('click',function(){
////////////////////////////////////////////////////////////////////////////////////*
if(share===undefined)
{
chrome.storage.sync.set({'share':'2'});
}
else if(share==0)
{
chrome.storage.sync.set({'share':'1'});

}
else if(share==1)
{

document.getElementById("sharen").innerHTML='You have to share it . Share one time and use unlimited.<br>For share  <a id="linkn" href="http://www.zeronine.in/share.php">Click Here</a>.';
return "1";
}
///////////////////////////////////////////////////////////////////////////////////
startbook();});
  document.getElementById("cd").addEventListener('click',function(){changedetail();});
 document.getElementById("del").addEventListener('click',function(){deldetail();});
  document.getElementById("cancel").addEventListener('click',function(){

if(ne=="no")
chrome.storage.sync.set({'ne':'y'});

location.assign("input.html");});
});
//------------------------------------------------------------------------
function deldetail()
{
chrome.storage.sync.clear(function(){
chrome.storage.sync.set({'paykey':paykey});
chrome.storage.sync.set({'paydate':paydate});
chrome.storage.sync.set({'share':share});

if(ne=="no")
chrome.storage.sync.set({'ne':'y'});

location.assign("input.html");
});

}
function startbook()
{
document.getElementById('st').innerHTML="";
if (da=="100000")
{

document.getElementById("nc1").innerHTML="No connection!Please start from open button.";

}
if((paykey=='980x3'||paykey=='055x7')&& paydate==da)
{
chrome.tabs.create({url:"http://www.irctc.co.in"});
chrome.storage.sync.set({'stop':'1'});
}
else 
{
document.getElementById("nc1").innerHTML="Your session is expired! Please start from open button.";
chrome.storage.sync.set({'stop':'0'});
}
	/*chrome.storage.sync.set({'stop':'1'});

chrome.tabs.create({url:"http://www.irctc.co.in"});*/


}
function changedetail()
{
	
	document.getElementsByClassName("infofilldiv")[0].style.display="none";
	$( ".infodiv" ).slideDown("slow");
	document.getElementById("cancel").style.display="inline-block";
		
}
  function showdiv(){
	  if(document.getElementById("nopay").innerHTML!="")
	document.getElementById("nopay").innerHTML="";
var payopt=["select","NETBANKING","CREDIT_CARD","DEBIT_CARD","CASH_CARD","IRCTC_PREPAID","EMI"];
var i=0;
var payvalue=document.getElementById("payopt").value;


for(i=1;i<payopt.length;i++)
{

if(document.getElementById(payopt[i]).style.display == "block")
document.getElementById(payopt[i]).style.display="none";
}
if(payvalue != payopt[0])
{
//document.getElementById(payvalue).style.display="block";
//document.getElementById("mybut").focus();
$( "#"+payvalue).slideDown( {duration:"slow" });

}
}
$(function() {
    $( "#datepicker" ).datepicker({
  onSelect: function(dateText) {
    if(document.getElementById("status").innerHTML!="")
			  document.getElementById("status").innerHTML="";
		  if(document.getElementById("wrong").innerHTML!="")
			  document.getElementById("wrong").innerHTML="";
  }
});
	$( "#datepicker" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
  });
  
  
  
  
  



  function setdata(j){
var logdetail={"logindetail":{"username":"","password":""}};
var rising="ujjwal";
var jdetail={"journeydetail":{"from":"","to":"","jdate":"","trainno":"","bs":""}};
var nextd={"quotaclass":{"ttype":"","quota":"","class":""}};
var cbfy={"child1":{"name":"","age":"","gender":""},
"child2":{"name":"","age":"","gender":""}};
var gpafy={"passenger1":{"name":"","age":"","gender":"","bearthPref":"","senior":""},
"passenger2":{"name":"","age":"","gender":"","bearthPref":"","senior":""},
"passenger3":{"name":"","age":"","gender":"","bearthPref":"","senior":""},
"passenger4":{"name":"","age":"","gender":"","bearthPref":"","senior":""},
"passenger5":{"name":"","age":"","gender":"","bearthPref":"","senior":""},
"passenger6":{"name":"","age":"","gender":"","bearthPref":"","senior":""}};
var passopt={"option":{"au":"","boc":""}}
var mobno={"mobile":""};
var payopt={"payoption":"","bank":"","autopay":""};
var paymdetail={"i":{"username":"","password":"","mmid":"","mono":"","otp":""},
"c":{"cardtype":"","cardname":"","cardno":"","expm":"","expy":"","pin":"","cvv":""},
"em":{"cardtype":"","cardname":"","cardno":"","expm":"","expy":""},
"ir":{"cardtype":"","cardname":"","cardno":"","expm":"","expy":""},
"d":{"cardname":"","cardno":"","expm":"","expy":"","cardtype":"","pin":"","cvv":""}};
var sn=$("input[type='password']");
paymdetail.c.pin=sn[3].value;
paymdetail.c.cvv=sn[2].value;
paymdetail.d.pin=sn[5].value;
paymdetail.d.cvv=sn[4].value;
payopt.autopay=document.getElementById("autopay").checked;
passopt.option.au=document.getElementById("au").checked;
passopt.option.boc=document.getElementById("boc").checked;
var a=document.getElementById("logdetail").getElementsByTagName("input");
logdetail.logindetail.username=a[0].value;
logdetail.logindetail.password=a[1].value;
var b=document.getElementById("jdetail").getElementsByTagName("input");
jdetail.journeydetail.from = b[0].value;
jdetail.journeydetail.to = b[1].value;
jdetail.journeydetail.jdate= b[2].value;
jdetail.journeydetail.trainno = b[3].value.split(" :")[0];
jdetail.journeydetail.bs=$("#board").val();

var c=document.getElementById("ticketquota").getElementsByTagName("select");
nextd.quotaclass.ttype=c[0].value;
nextd.quotaclass.quota=c[1].value;
nextd.quotaclass.class=c[2].value;
/*---------------------------passenger1--------------------------*/
var d=document.getElementById("passenger1").getElementsByTagName("input");
gpafy.passenger1.name=d[0].value;
gpafy.passenger1.age=d[1].value;
if(gpafy.passenger1.name!=""&&gpafy.passenger1.age=="")
{
	document.getElementById("wrongn").innerHTML="Please fill age."
	d[1].focus();
	return;
}
gpafy.passenger1.senior=d[2].checked;
var e=document.getElementById("passenger1").getElementsByTagName("select");
gpafy.passenger1.gender=e[0].value;
gpafy.passenger1.bearthPref=e[1].value;
/*---------------------------passenger2--------------------------*/
var d1=document.getElementById("passenger2").getElementsByTagName("input");
gpafy.passenger2.name=d1[0].value;
gpafy.passenger2.age=d1[1].value;
if(gpafy.passenger2.name!=""&&gpafy.passenger2.age=="")
{
	document.getElementById("wrongn").innerHTML="Please fill age."
	d1[1].focus();
	return;
}
gpafy.passenger2.senior=d1[2].checked;
var e1=document.getElementById("passenger2").getElementsByTagName("select");
gpafy.passenger2.gender=e1[0].value;
gpafy.passenger2.bearthPref=e1[1].value;
/*---------------------------passenger3--------------------------*/
var d2=document.getElementById("passenger3").getElementsByTagName("input");
gpafy.passenger3.name=d2[0].value;
gpafy.passenger3.age=d2[1].value;
if(gpafy.passenger3.name!=""&&gpafy.passenger3.age=="")
{
	document.getElementById("wrongn").innerHTML="Please fill age."
	d2[1].focus();
	return;
}
gpafy.passenger3.senior=d2[2].checked
var e2=document.getElementById("passenger3").getElementsByTagName("select");
gpafy.passenger3.gender=e2[0].value;
gpafy.passenger3.bearthPref=e2[1].value;
/*---------------------------passenger4-----------------------*/
var d3=document.getElementById("passenger4").getElementsByTagName("input");
gpafy.passenger4.name=d3[0].value;
gpafy.passenger4.age=d3[1].value;
if(gpafy.passenger4.name!=""&&gpafy.passenger4.age=="")
{
	document.getElementById("wrongn").innerHTML="Please fill age."
	d3[1].focus();
	return;
}
gpafy.passenger4.senior=d3[2].checked
var e3=document.getElementById("passenger4").getElementsByTagName("select");
gpafy.passenger4.gender=e3[0].value;
gpafy.passenger4.bearthPref=e3[1].value;
/*---------------------------passenger5-----------------------*/
var d4=document.getElementById("passenger5").getElementsByTagName("input");
gpafy.passenger5.name=d4[0].value;
gpafy.passenger5.age=d4[1].value;
if(gpafy.passenger5.name!=""&&gpafy.passenger5.age=="")
{
	document.getElementById("wrongn").innerHTML="Please fill age."
	d4[1].focus();
	return;
}
gpafy.passenger5.senior=d4[2].checked
var e4=document.getElementById("passenger5").getElementsByTagName("select");
gpafy.passenger5.gender=e4[0].value;
gpafy.passenger5.bearthPref=e4[1].value;
/*---------------------------passenger6------------------------------*/
var d5=document.getElementById("passenger6").getElementsByTagName("input");
gpafy.passenger6.name=d5[0].value;
gpafy.passenger6.age=d5[1].value;
if(gpafy.passenger6.name!=""&&gpafy.passenger6.age=="")
{
	document.getElementById("wrongn").innerHTML="Please fill age."
	d5[1].focus();
	return;
}
gpafy.passenger6.senior=d5[2].checked
var e5=document.getElementById("passenger6").getElementsByTagName("select");
gpafy.passenger6.gender=e5[0].value;
gpafy.passenger6.bearthPref=e5[1].value;
/*---------------------------------------------------------------*/
var child=document.getElementById("cbfy");
var childname=child.getElementsByTagName("input");
cbfy.child1.name=childname[0].value;
cbfy.child2.name=childname[1].value;
var childage=child.getElementsByTagName("select");
if(childage[0].value!=-1&&childname[0].value!="")
{
	cbfy.child1.age=childage[0].value;
	cbfy.child1.gender=childage[1].value;
}
else if(childname[0].value!="")
{
	childage[0].focus();
	document.getElementById("childerror").innerHTML="Please Select Child Age";
	return;
}
if(childage[2].value!=-1&&childname[1].value!="")
{
	cbfy.child2.age=childage[2].value;
	cbfy.child2.gender=childage[3].value;
}
else if(childname[1].value!="")
{
	childage[2].focus();
	document.getElementById("childerror").innerHTML="Please Select Child Age";
	return;
}
var f=document.getElementById("mobno").getElementsByTagName("input");
if(f[2].value.length!=10)
{
document.getElementById("nopay").innerHTML="Enter 10 digit in mobile no.";
f[2].focus();
return;
}
mobno.mobile=f[2].value;
paymdetail.i.username=document.getElementById("iuser").value;
paymdetail.i.password=document.getElementById("ipass").value;
paymdetail.i.mono=document.getElementById("impass").value;
paymdetail.i.otp=document.getElementById("imotp").value;
paymdetail.i.mmid=document.getElementById("imuser").value;
paymdetail.c.cardtype=cardtype=document.getElementById("ctype").value;
paymdetail.c.cardname=document.getElementById("cname-on-card").value;
paymdetail.c.cardno=document.getElementById("credit-card-number").value;
paymdetail.c.expm=document.getElementById("cexpiration-month").value;
paymdetail.c.expy=document.getElementById("cexpiration-year").value;
//-----------------------------------------------------------------------------------------
paymdetail.ir.cardtype=cardtype=document.getElementById("irtype").value;
paymdetail.ir.cardname=document.getElementById("irname-on-card").value;
paymdetail.ir.cardno=document.getElementById("irredit-card-number").value;
paymdetail.ir.expm=document.getElementById("irexpiration-month").value;
paymdetail.ir.expy=document.getElementById("irexpiration-year").value;
//------------------------------------------------------------------------------------------
paymdetail.em.cardtype=cardtype=document.getElementById("emtype").value;
paymdetail.em.cardname=document.getElementById("emname-on-card").value;
paymdetail.em.cardno=document.getElementById("emredit-card-number").value;
paymdetail.em.expm=document.getElementById("emexpiration-month").value;
paymdetail.em.expy=document.getElementById("emexpiration-year").value;
//---------------------------------------------------------------------------------------------
paymdetail.d.cardname=document.getElementById("dname-on-card").value;
paymdetail.d.cardno=document.getElementById("dcredit-card-number").value;
paymdetail.d.expm=document.getElementById("dexpiration-month").value;
paymdetail.d.expy=document.getElementById("dexpiration-year").value;
paymdetail.d.cardtype=document.getElementById("dtype").value;
var g=document.getElementById("payoption").getElementsByTagName("select");
if(document.getElementById("status").innerHTML=="")
{
	document.getElementById("but").focus();
	document.getElementById("wrong").innerHTML="Please verify your journey details."
	return ;
}
if(document.getElementById("first").value==""||document.getElementById("second").value=="")
{
	document.getElementById("first").focus();
	document.getElementById("wrongn").innerHTML="Please fill minimum one passenger detail.<br>Fill every detail accuretly.Name and age mandatory."
	return;
}

if(g[0].value!="select")
{
	
payopt.payoption=g[0].value;

var h=document.getElementById(g[0].value).getElementsByTagName("select");
payopt.bank=h[0].value;

 chrome.storage.sync.set({'logdetail': JSON.stringify(logdetail)});
 chrome.storage.sync.set({'rise':rising });
  chrome.storage.sync.set({'jdetail': JSON.stringify(jdetail)});
   chrome.storage.sync.set({'nextd': JSON.stringify(nextd)});
    chrome.storage.sync.set({'gpafy': JSON.stringify(gpafy)});
	 chrome.storage.sync.set({'mobno': JSON.stringify(mobno)});
	  chrome.storage.sync.set({'payopt': JSON.stringify(payopt)});
	  chrome.storage.sync.set({'paydetail': JSON.stringify(paymdetail)});
	  chrome.storage.sync.set({'cbfy': JSON.stringify(cbfy)});
	  chrome.storage.sync.set({'passopt': JSON.stringify(passopt)});
}
else 
{
	document.getElementById("nopay").innerHTML="Please select payment option.";
	return;
}
if(j==0)
{
if(da=='0')
{
document.getElementById("nc").innerHTML=" Your data has been saved.<br>Please start from open button."

}
else if (da=="100000")
{
document.getElementById("nc").innerHTML="No connection! Please start from open button. Your data is saved.";

}


if((paykey=='980x3'||paykey=='055x7')&& paydate==da)
{
chrome.tabs.create({url:"http://www.irctc.co.in"})
chrome.storage.sync.set({'ne':'y'});
location.assign("input.html");
chrome.storage.sync.set({'stop':'1'});
}
else 
{

document.getElementById("nc").innerHTML="Some problem occured. Reopen with open button. Your data saved.";
chrome.storage.sync.set({'stop':'0'});
}

}
else
{
if(ne!='no')
{

document.getElementById("nc").innerHTML="Some problem occured. Reopen with open button. Your data saved.";
return;
}
chrome.storage.sync.set({'ne':'y'});
chrome.storage.sync.set({'stop':'0'});
location.assign("input.html");
	  
}
}



function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      if(document.getElementById("ver").innerHTML != xhttp.responseText)
	  {
	  document.getElementById("vs").innerHTML="Please update with new version ("+xhttp.responseText +") for new features.";
	  }
	  else
	  document.getElementById("vs").innerHTML="Your application is up to date.";
    }
    if(xhttp.readyState == 4 &&xhttp.status!=200)
  {
  document.getElementById("vs").innerHTML="Please open internet connection to check version updates for new features.";
  }
  };
  xhttp.open("GET", "http://zeronine.in/version.txt", true);
  xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  xhttp.setRequestHeader("Pragma", "no-cache");
  xhttp.send();
  document.getElementById("vs").innerHTML="Please Wait.";
}
/////////////////////////////////////////////////////////////////////////////
//----------------------------GET DATE-------------------------------------//
/////////////////////////////////////////////////////////////////////////////
function getdate()
{
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200)
    {
     da=xhttp.responseText
     
    add();
    }
   if(xhttp.readyState == 4 &&xhttp.status!=200)
   {
    
    da="100000";
   
   }
}

if(ne=='y')
{

xhttp.open("GET", "http://zeronine.in/zerodate.php", true);
  xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  xhttp.setRequestHeader("Pragma", "no-cache");
  xhttp.send();
 chrome.storage.sync.set({'ne':'n'});
 ne="no";
 }



}
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
function getdate1()
{
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200)
    {
     da=xhttp.responseText
     
     
     showtab();
    }
   if(xhttp.readyState == 4 &&xhttp.status!=200)
   {
    
    da="100000";
    showtab();
   }
}
if(ne=='no'||ne=='y')
{

xhttp.open("GET", "http://zeronine.in/zerodate.php", true);
  xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  xhttp.setRequestHeader("Pragma", "no-cache");
  xhttp.send();
 chrome.storage.sync.set({'ne':'n'});
 ne="no";
 }
else
{

document.getElementById('st').innerHTML="Some problem occured. Reopen with open button.";
}


}
///////////////////////////////////////////////////////////////////////////
//--------------------------get add--------------------------------------//
///////////////////////////////////////////////////////////////////////////
function getadd(p)
{
var xhttp = new XMLHttpRequest(p);
  xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200)
     {
        if(xhttp.responseText!='nothing')
        {
         document.getElementById(p).innerHTML=xhttp.responseText;
        }
     }
}
xhttp.open("GET", "http://zeronine.in/"+p+".php?from="+uf+"&to="+ut, true);
  xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  xhttp.setRequestHeader("Pragma", "no-cache");
  xhttp.send();
}



///////////////////////////////////////////////////////////////////////////
//----------------------------add----------------------------------------//
function add()
{
getadd('add1');
getadd('add3');

getadd('add9');


}
////////////////////////////////////////////////////////////////////////
//-----------------------------share----------------------------------//



