var paymdetail,payopt;
chrome.storage.sync.get('stop',function(myitem){
	if(myitem['stop']==1)
	{
if(document.title=="Portal Payment"||document.title=="Payment Interface"||document.title=="Billdesk Payment Gateway")
chrome.storage.sync.get(['paydetail','payopt'],function(item){
paymdetail=JSON.parse(item['paydetail']);
payopt=JSON.parse(item['payopt']);
if(check())
fillbank();
});
}
}
)
function fillbank(){
var i=0;
var itag=document.getElementsByTagName("input");
var text=[];
for(i=0;i<itag.length;i++)
{
if(itag[i].getAttribute("type")=="text"||itag[i].getAttribute("type")=="Text"||itag[i].getAttribute("type")=="TEXT")
{
text.push(i);
}
}
itag[text[0]].value=paymdetail.d.cardno;
itag[text[1]].value=paymdetail.d.cardname;

var stag=document.getElementsByTagName("select");
if(stag.length>0)
{
	if(paymdetail.d.expm!=" ")
	{
var otag=stag[0].getElementsByTagName("option");
for(i=1;i<otag.length;i++)
{
	var matcher = new RegExp( otag[i].value+"$", "gi" );
	if(matcher.test(paymdetail.d.expm))
	{
		stag[0].value=otag[i].value;
		break;
	}
}
	}
if(paymdetail.d.expy!=" ")
{
	
//stag[1].value=paymdetail.d.expy;
var otag=stag[1].getElementsByTagName("option");
for(i=1;i<otag.length;i++)
{
var matcher = new RegExp( otag[i].value+"$", "gi" );
	if(matcher.test(paymdetail.d.expy))
	{
	 stag[1].value=otag[i].value;
	 break;
	}
	
}
}
}

var upass=$("input[type='password']:visible");
upass[0].value=paymdetail.d.pin;
if(payopt.bank==15)
{
if(payopt.autopay==true)
{
if(paymdetail.d.pin!="")
$("input[value='Submit']:visible")[0].click();
}
}
else
itag[text[2]].focus();
 
}
function check()
{
var ra=$("input[type='radio']");
if(ra.length>1)
{
if(payopt.payoption=="DEBIT_CARD")
{
ra[0].click();
}
else
{
ra[1].click();
}
return 0;
}
return 1;
}

