var theValue,theValue1,two,pass=0,myd;
var dates=$( "a[style='cursor: auto']" );
var d=dates[0].innerHTML.split("[")[1].split(" ")[0].split(":");
var hour=parseInt(d[0]);
var n=parseInt(d[2]);
var mi=parseInt(d[1]);
if(document.title=="Journey Planner")
chrome.storage.sync.get('stop',function(myitem){
	if(myitem['stop']==1)
	{
	  chrome.storage.sync.get(['jdetail','nextd','time'],function(item){
        theValue = JSON.parse(item['jdetail']);
		theValue1=JSON.parse(item['nextd']);
                two=JSON.parse(item['time']);
        resdetail(1);
});
}
}
)
var myvar;
var timer=0
function resdetail(check){
var i=0;
var q=document.getElementById("qcbd").getElementsByTagName("input");
for(i=0;i<q.length;i++)
{
if(q[i].value==theValue1.quotaclass.quota)
q[i].click();
}
var y = document.getElementById("avlAndFareForm:trainbtwnstns:tb");
var trtag= y.getElementsByTagName("tr");

for(i=0;i<trtag.length;i++)
{
var atag=trtag[i].getElementsByTagName("a");
if(atag[0].innerHTML==theValue.journeydetail.trainno)
{
var j=0;
for(j=1;j<atag.length;j++)
{
if(atag[j].innerHTML==theValue1.quotaclass.class)
{
//////////////////////////////////////////////////////////////////////////////
//----------------------------FLEXIPLACE------------------------------------//
//////////////////////////////////////////////////////////////////////////////
if(hour==7||hour==9||hour==10)
{
if(mi!=two)
atag[j].click();
else if(pass==0)
{
var ri= 60.5-(n);
$("#bbc_widget").hide();
$("#avlAndFareForm").prepend('<font size="5" color="red" align="center" ><u><p style="background:yellow;">Do not touch anything and wait for <strong id="mydata">'+ri+'</strong> sec.\nBe ready to fill captcha.</p></u></font>' );
myd=$("#mydata");
pass=1;
}
}
else
atag[j].click();

break;
}
}



}


}
if(check)
{
 myvar=setInterval(myfunction,500);
 timer=0;
}

}
function myfunction(){
if(pass==1)
myd[0].innerHTML=60.5-(n);
	timer=timer+1;
if(timer>63)
{
	clearInterval(myvar);
	timer=0;
}

var tabd=document.getElementById("tabcontent");
var atag
if(tabd.innerHTML!="")
{
var tdtag=tabd.getElementsByClassName("rf-p-b ")[0].getElementsByTagName("td");
if(tdtag&&tdtag.length>0)
{
	var maw=tdtag[1].getElementsByTagName("b")[0].innerHTML;
	if(maw.split("-")[1]<10)
	{
		var newd=maw.split("-");
		maw= newd[0]+"-0"+newd[1]+"-"+newd[2];
	}
	var matcher = new RegExp( maw, "gi" );
	
	if(matcher.test(theValue.journeydetail.jdate))
	{
		
		var tdn=(tdtag.length/2)+1
		atag=tdtag[tdn].getElementsByTagName("a");
		if(atag.length>0&&atag[0].innerHTML=="Book Now") ////check - reset after use////
		{
                clearInterval(myvar);
	        timer=0;
			atag[0].click();
                return;
			
		}
		else if(tdtag[tdn].innerHTML.search("NOT AVAILABLE")!=-1||tdtag[tdn].innerHTML.search("CHARTING DONE")!=-1||tdtag[tdn].innerHTML.search("REGRET")!=-1||tdtag[tdn].innerHTML.search("TRAIN DEPARTED")!=-1)
		{
			clearInterval(myvar);
			alert("Not Available");
	        timer=0;
		}
		else if(tdtag[tdn].innerHTML.search("AVAILABLE")!=-1)////check - reset after use////
		{
                    var tdbda=tabd.getElementsByTagName("a");
                    if((tdbda.length>0)&&(tdbda[0].innerHTML=="Refresh"))////check - reset after use////
                    {
                     
                      
                       if(mi==0&&n<60)
                       {
                       tdbda[0].click();
                       return;
                       }
                      
                         
                    }
                    else
                    {
                       
                       if(mi==0&&(n==3||n==6||n==9||n%3==0))
                       {
                       clearInterval(myvar);
                       timer=0;
                       var reset=$( "input[value='Reset']" );
                       reset[0].click();

                       document.getElementById("jpform:fromStation").value= theValue.journeydetail.from;
                       document.getElementById("jpform:toStation").value= theValue.journeydetail.to;
                       document.getElementById("jpform:journeyDateInputDate").value=theValue.journeydetail.jdate;
                       document.getElementById("jpform:jpsubmit").click();
                       return;
                       }
                    }
//------------------------
		}
	}
	else
	{
		alert("Not Journey Date");
		clearInterval(myvar);
	        timer=0;
	}
}


}

//---------------------------------check-------------------------------------
if(mi!=0&&(n==20||n==40||n==60.5))
{
clearInterval(myvar);
                       timer=0;
 var reset=$( "input[value='Reset']" );
                       reset[0].click();

                       document.getElementById("jpform:fromStation").value= theValue.journeydetail.from;
                       document.getElementById("jpform:toStation").value= theValue.journeydetail.to;
                       document.getElementById("jpform:journeyDateInputDate").value=theValue.journeydetail.jdate;
                       document.getElementById("jpform:jpsubmit").click();
}
//-------------------------------check end-----------------------------------

n=n+0.5;

}

