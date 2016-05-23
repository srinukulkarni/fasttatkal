var paymdetail,payopt;
chrome.storage.sync.get('stop',function(myitem){
	if(myitem['stop']==1)
	{
if(document.title=="PAYSEAL - ICICI Bank Payment Gateway")
chrome.storage.sync.get(['paydetail','payopt'],function(item){
paymdetail=JSON.parse(item['paydetail']);
payopt=JSON.parse(item['payopt']);
fillbank();
});
	}
}
)
function fillbank(){
 var type=$( "select[name='CardTypeSelectBox']" );
if(paymdetail.d.cardtype!='RP')
 type[0].value=paymdetail.d.cardtype;
var i=0;
var itag=document.getElementsByTagName("input");
var text=[];
var pass=[];
for(i=0;i<itag.length;i++)
{
if(itag[i].getAttribute("type")=="text"||itag[i].getAttribute("type")=="Text"||itag[i].getAttribute("type")=="TEXT")
{
text.push(i);
}
else if(itag[i].getAttribute("type")=="password"||itag[i].getAttribute("type")=="Password"||itag[i].getAttribute("type")=="PASSWORD")
{
pass.push(i)	;
}
}
itag[text[0]].value=paymdetail.d.cardno.slice(0,-12);
itag[text[1]].value=paymdetail.d.cardno.slice(4,-8);
itag[text[2]].value=paymdetail.d.cardno.slice(8,-4);
itag[text[3]].value=paymdetail.d.cardno.slice(12);
itag[text[5]].value=paymdetail.d.cardname;

var stag=document.getElementsByTagName("select");
/*if(paymdetail.d.cardtype!=" ")
{
stag[0].value=paymdetail.d.cardtype;
}*/

if(stag.length>0)
{
	
	if(paymdetail.d.expm!=" ")
	{
		
var otag=stag[1].getElementsByTagName("option");
for(i=1;i<otag.length;i++)
{
	var matcher = new RegExp( otag[i].value+"$", "gi" );
	if(matcher.test(paymdetail.d.expm))
	{
		
		stag[1].value=otag[i].value;
		break;
	}
}
	}
if(paymdetail.d.expy!=" ")
{
	
//stag[1].value=paymdetail.d.expy;
var otag=stag[2].getElementsByTagName("option");
for(i=1;i<otag.length;i++)
{
var matcher = new RegExp( otag[i].value+"$", "gi" );
	if(matcher.test(paymdetail.d.expy))
	{
	 stag[2].value=otag[i].value;
	 break;
	}
	
}
}
}
itag[pass[0]].value=paymdetail.d.cvv;
itag[pass[1]].value=paymdetail.d.pin;
if(payopt.autopay==true)
{
if(paymdetail.d.cvv!="" && paymdetail.d.pin!="")
$('input[name="btnPay"]:visible')[0].click();
}
}

