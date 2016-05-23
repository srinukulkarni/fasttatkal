var paymdetail,payopt;
chrome.storage.sync.get('stop',function(myitem){
	if(myitem['stop']==1)
	{
chrome.storage.sync.get(['paydetail','payopt'],function(item){
paymdetail=JSON.parse(item['paydetail']);
payopt=JSON.parse(item['payopt']);
fillbank();
});
	}
}
)
function fillbank(){
var i=0;
var itag=document.getElementsByTagName("input");
var text=[];
var pass=[];
var sub=[];
if(paymdetail.i.mono!="")
{
for(i=0;i<itag.length;i++)
{
if(itag[i].getAttribute("type")=="text"||itag[i].getAttribute("type")=="Text"||itag[i].getAttribute("type")=="TEXT")
{
text.push(i);
}
if(itag[i].getAttribute("type")=="submit"||itag[i].getAttribute("type")=="Submit"||itag[i].getAttribute("type")=="SUBMIT")
{
sub.push(i);
}
}
if(text.length>0)
{
itag[text[3]].value=paymdetail.i.mono;
itag[text[4]].value=paymdetail.i.mmid;
if(paymdetail.i.otp!="")
{
itag[text[5]].value=paymdetail.i.otp;
if(payopt.autopay==true)
itag[sub[0]].click();
}
else 
itag[text[5]].focus();
}

}
}
