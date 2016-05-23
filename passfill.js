
if(document.title=="Book Ticket - Passengers Information")
{
var node = document.createElement("h1");
 node.setAttribute("style","color:red");
node.setAttribute("id","mclock");
node.innerHTML='SEC : <font id="clock">0</font>';
document.getElementsByClassName("rf-p-b")[4].appendChild(node);
getClock();
}
var pass1,mob,cla,cbfy,passopt,jdetail,clo,clot=0,trig=0;
var captchaseconds = 0;
var millisSince1Jan1970 = "";
function getClock() {
	$("#topnav").find("a").each(function() { 
		if($(this).text().indexOf("IST") > 0) {
			var riseTime = $(this).text().trim();
			var dateMatcherRegEx = /(\d{2}-[A-Z][a-z]{2}-\d{4}) \[(\d{2}:\d{2}:\d{2}) ((GMT\+05:30)|(IST))\]/g;
			var matches = dateMatcherRegEx.exec(riseTime);
			var capturedTime = new Date(riseTime.replace(/\[|\]|IST|GMT\+05:30/g, '').replace(/-/g, ' '));
			millisSince1Jan1970 = capturedTime.getTime();
			
			
		}
	});
}

if(document.title=="Book Ticket - Passengers Information")
{

//--------------------STARTOFSECTION------------------//
var img = document.getElementById('bkg_captcha');
 
         if(img.complete)
         {
         
          $("img[id='bkg_captcha']").height('100px');
          trig=1;
          setInterval(function() {
				millisSince1Jan1970 += 1000;
				captchaseconds += 1;
				$("#clock").text(captchaseconds);
			}, 1000);
         }
//---------------------------------------------------//
                    //HANDLER//
//---------------------------------------------------//
$( "#bkg_captcha").load(function() {
  // Handler for .load() called.
if(trig==1)
{
trig=2;
return ;
}

$("img[id='bkg_captcha']").height('100px');
setInterval(function() {

				millisSince1Jan1970 += 1000;
				
				captchaseconds += 1;
				$("#clock").text(captchaseconds);
			}, 1000);
});
//------------------------------------------------------------------------
 }

if(document.title=="Book Ticket - Passengers Information")
chrome.storage.sync.get('stop',function(myitem){
	if(myitem['stop']==1)
	{
         
	  chrome.storage.sync.get(['gpafy','mobno','nextd','passopt','cbfy','jdetail'],function(item){
        

        pass1 = JSON.parse(item['gpafy']);
		mob = JSON.parse(item['mobno']);
		cla= JSON.parse(item['nextd']);
		passopt=JSON.parse(item['passopt']);
		cbfy=JSON.parse(item['cbfy']);
		jdetail=JSON.parse(item['jdetail']);
        selectb();
        fillpdetail();
        
	 //;	
});}
}
)


function blink()
{
	if(timer>12)
	{
		clearInterval(myinterval);
		timer=0;
	}
	if(timer%2)
	{
		document.getElementsByClassName("captchatxt")[0].getElementsByTagName("td")[3].setAttribute("bgcolor","white");
	}
	else
		document.getElementsByClassName("captchatxt")[0].getElementsByTagName("td")[3].setAttribute("bgcolor","yellow");
	timer=timer+1;
	
}
var timer=0,myinterval;
function fillpdetail(){
	var cdate=jdetail.journeydetail.jdate;

	
	
	
	var fid=document.getElementsByClassName("captchatxt")[0].getElementsByTagName("td")[3].innerHTML.split("-");
	
   
        if(monthcon(fid[1])<10)
		{
			mdate=fid[0]+"-0"+monthcon(fid[1])+"-"+fid[2];
		}
		else
		{
			mdate=fid[0]+"-"+monthcon(fid[1])+"-"+fid[2];
		}
		var matcher = new RegExp( cdate, "gi" );
       
	if(matcher.test(mdate))
	{
		
		
	}
	else
	{
		alert("Date is not matched with journy date\n due to not availability");
		document.getElementsByClassName("captchatxt")[0].getElementsByTagName("td")[3].setAttribute("bgcolor","yellow");
		myinterval= setInterval(function(){blink();},500)
		window.scrollBy(0,0);
		return;
		
	}
	
	
	/*---------------------------passenger1----------------------------------------*/
if(pass1.passenger1.name!="")
{
var passsec=document.getElementById("addPassengerForm:psdetail:0")
if(passsec!=null)
{
var passna=passsec.getElementsByTagName("input");
passna[0].value=pass1.passenger1.name;
passna[1].value=pass1.passenger1.age;
try
{
if(cla.quotaclass.quota!="CK"&&pass1.passenger1.senior==true)
{
	if(pass1.passenger1.gender=="M"&&pass1.passenger1.age>=60)
	{
passna[2].disabled=false;
passna[2].checked=true;
    }
	else if(pass1.passenger1.gender=="F"&&pass1.passenger1.age>=58)
	{
	passna[2].disabled=false;
     passna[2].checked=true;	
	}
}
}
catch(err)
{
	
}

var passgb=passsec.getElementsByTagName("select");
passgb[0].value=pass1.passenger1.gender;
if(cla.quotaclass.class!="CC"&&cla.quotaclass.class!="2S"&&cla.quotaclass.class!="EC")
{
if(pass1.passenger1.bearthPref!=" ")
passgb[1].value=pass1.passenger1.bearthPref;
}
else
passgb[1].value="WS"
if(passgb.length==3)
	passgb[2].value="V";

}
}
/*---------------------------passenger2----------------------------------------*/
if(pass1.passenger2.name!="")
{
var passsec1=document.getElementById("addPassengerForm:psdetail:1")
if(passsec1!=null)
{
var passna=passsec1.getElementsByTagName("input");
passna[0].value=pass1.passenger2.name;
passna[1].value=pass1.passenger2.age;
try
{
if(cla.quotaclass.quota!="CK"&&pass1.passenger2.senior==true)
{
	if(pass1.passenger2.gender=="M"&&pass1.passenger2.age>=60)
	{
passna[2].disabled=false;
passna[2].checked=true;
    }
	else if(pass1.passenger2.gender=="F"&&pass1.passenger2.age>=58)
	{
	passna[2].disabled=false;
     passna[2].checked=true;	
	}
}
}
catch(err)
{

}

var passgb=passsec1.getElementsByTagName("select");
passgb[0].value=pass1.passenger2.gender;
if(cla.quotaclass.class!="CC"&&cla.quotaclass.class!="2S"&&cla.quotaclass.class!="EC")
{
if(pass1.passenger2.bearthPref!=" ")
passgb[1].value=pass1.passenger2.bearthPref;
}
else
passgb[1].value="WS"
if(passgb.length==3)
	passgb[2].value="V";

}
}
/*---------------------------passenger3----------------------------------------*/
if(pass1.passenger3.name!="")
{
var passsec2=document.getElementById("addPassengerForm:psdetail:2")
if(passsec2!=null)
{
var passna=passsec2.getElementsByTagName("input");
passna[0].value=pass1.passenger3.name;
passna[1].value=pass1.passenger3.age;
try
{
if(cla.quotaclass.quota!="CK"&&pass1.passenger3.senior==true)
{
	if(pass1.passenger3.gender=="M"&&pass1.passenger3.age>=60)
	{
passna[2].disabled=false;
passna[2].checked=true;
    }
	else if(pass1.passenger3.gender=="F"&&pass1.passenger3.age>=58)
	{
	passna[2].disabled=false;
     passna[2].checked=true;	
	}
}
}
catch(err)
{
}

var passgb=passsec2.getElementsByTagName("select");
passgb[0].value=pass1.passenger3.gender;
if(cla.quotaclass.class!="CC"&&cla.quotaclass.class!="2S"&&cla.quotaclass.class!="EC")
{
if(pass1.passenger3.bearthPref!=" ")
passgb[1].value=pass1.passenger3.bearthPref;
}
else
passgb[1].value="WS"
if(passgb.length==3)
	passgb[2].value="V";
}
}
/*---------------------------passenger4----------------------------------------*/
if(pass1.passenger4.name!="")
{
var passsec3=document.getElementById("addPassengerForm:psdetail:3")
if(passsec3!=null)
{
var passna=passsec3.getElementsByTagName("input");
passna[0].value=pass1.passenger4.name;
passna[1].value=pass1.passenger4.age;
try
{
if(cla.quotaclass.quota!="CK"&&pass1.passenger4.senior==true)
{
	if(pass1.passenger4.gender=="M"&&pass1.passenger4.age>=60)
	{
passna[2].disabled=false;
passna[2].checked=true;
    }
	else if(pass1.passenger4.gender=="F"&&pass1.passenger4.age>=58)
	{
	passna[2].disabled=false;
     passna[2].checked=true;	
	}
}
}
catch(err)
{
}
var passgb=passsec3.getElementsByTagName("select");
passgb[0].value=pass1.passenger4.gender;
if(cla.quotaclass.class!="CC"&&cla.quotaclass.class!="2S"&&cla.quotaclass.class!="EC")
{
if(pass1.passenger4.bearthPref!=" ")
passgb[1].value=pass1.passenger4.bearthPref;
}
else
passgb[1].value="WS"
if(passgb.length==3)
	passgb[2].value="V";
}
}
/*---------------------------passenger5----------------------------------------*/
if(pass1.passenger5.name!="")
{
var passsec4=document.getElementById("addPassengerForm:psdetail:4")
if(passsec3!=null)
{
var passna=passsec4.getElementsByTagName("input");
passna[0].value=pass1.passenger5.name;
passna[1].value=pass1.passenger5.age;
try
{
if(cla.quotaclass.quota!="CK"&&pass1.passenger5.senior==true)
{
	if(pass1.passenger5.gender=="M"&&pass1.passenger5.age>=60)
	{
passna[2].disabled=false;
passna[2].checked=true;
    }
	else if(pass1.passenger5.gender=="F"&&pass1.passenger5.age>=58)
	{
	passna[2].disabled=false;
     passna[2].checked=true;	
	}
}
}
catch(err)
{
}

var passgb=passsec4.getElementsByTagName("select");
passgb[0].value=pass1.passenger5.gender;
if(cla.quotaclass.class!="CC"&&cla.quotaclass.class!="2S"&&cla.quotaclass.class!="EC")
{
if(pass1.passenger5.bearthPref!=" ")
passgb[1].value=pass1.passenger5.bearthPref;
}
else
passgb[1].value="WS"
if(passgb.length==3)
	passgb[2].value="V";
}
}
/*---------------------------passenger6----------------------------------------*/
if(pass1.passenger3.name!="")
{
var passsec5=document.getElementById("addPassengerForm:psdetail:5")
if(passsec3!=null)
{
var passna=passsec5.getElementsByTagName("input");
passna[0].value=pass1.passenger6.name;
passna[1].value=pass1.passenger6.age;
try
{
if(cla.quotaclass.quota!="CK"&&pass1.passenger6.senior==true)
{
	if(pass1.passenger6.gender=="M"&&pass1.passenger6.age>=60)
	{
passna[2].disabled=false;
passna[2].checked=true;
    }
	else if(pass1.passenger6.gender=="F"&&pass1.passenger6.age>=58)
	{
	passna[2].disabled=false;
     passna[2].checked=true;	
	}
}
}
catch(err)
{
}

var passgb=passsec5.getElementsByTagName("select");
passgb[0].value=pass1.passenger6.gender;
if(cla.quotaclass.class!="CC"&&cla.quotaclass.class!="2S"&&cla.quotaclass.class!="EC")
{
if(pass1.passenger6.bearthPref!=" ")
passgb[1].value=pass1.passenger6.bearthPref;
}
else
passgb[1].value="WS"
if(passgb.length==3)
	passgb[2].value="V";
}
}
/*------------------------------------------------------------------------------*/
try{
	document.getElementById("addPassengerForm:autoUpgrade").checked=passopt.option.au;
	document.getElementById("addPassengerForm:onlyConfirmBerths").checked=passopt.option.boc;
}
catch(err)
{
	
}
/*************************************************************************************/
var child=document.getElementById("addPassengerForm:childInfoTable:0");
if(cbfy.child1.name!="")
{
var schild=child.getElementsByTagName("select");
schild[0].value=cbfy.child1.age;
schild[1].value=cbfy.child1.gender;
child.getElementsByTagName("input")[0].value=cbfy.child1.name;
var child1=document.getElementById("addPassengerForm:childInfoTable:1");
if(cbfy.child2.name!="")
{
var schild1=child1.getElementsByTagName("select");
schild1[0].value=cbfy.child2.age;
schild1[1].value=cbfy.child2.gender;
child1.getElementsByTagName("input")[0].value=cbfy.child2.name;
}
}
/************************************************************************************/
if(mob.mobile!="")
document.getElementById("addPassengerForm:mobileNo").value=mob.mobile;
document.getElementById("j_captcha").focus();
}
function monthcon(mon)
{
          var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var j=0;	
	for(j=0;j<12;j++)
	{
		if(month[j]==mon)
		{
			return j+1;
		}
		
	}
	
}

/*-----------------------------------------------SCRIPT AFTER IF NOT GOES TO ANOTHER PAGE--------------------------*/








