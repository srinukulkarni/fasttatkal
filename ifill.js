var paymdetail;
chrome.storage.sync.get('stop',function(myitem){
	if(myitem['stop']==1)
	{
chrome.storage.sync.get(['paydetail'],function(item){
paymdetail=JSON.parse(item['paydetail']);
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
if(paymdetail.i.username!="")
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
itag[text[0]].value=paymdetail.i.username;

for(i=0;i<itag.length;i++)
{
if(itag[i].getAttribute("type")=="password"||itag[i].getAttribute("type")=="Password"||itag[i].getAttribute("type")=="PASSWORD")
{
pass.push(i);
}
}
if(pass.length>0)
itag[pass[0]].value=paymdetail.i.password;
if(paymdetail.i.password!="")
if(sub.length>0)
itag[sub[0]].click();
else
itag[pass[0]].focus();

}



}
