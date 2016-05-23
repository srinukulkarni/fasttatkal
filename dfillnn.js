var paymdetail;
chrome.storage.sync.get('stop',function(myitem){
	if(myitem['stop']==1)
	{
if(document.title==":: Citibank Payment Gateway ::")
chrome.storage.sync.get(['paydetail'],function(item){
paymdetail=JSON.parse(item['paydetail']);
fillbank();
});
}
}
)
function fillbank(){
var i=0;
var itag=$( "input:visible");
var text=[];
var pass=[];
for(i=0;i<itag.length;i++)
{
if(itag[i].getAttribute("type")=="text")
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

var stag=$( "select:visible");
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
itag[pass[0]].focus();

}