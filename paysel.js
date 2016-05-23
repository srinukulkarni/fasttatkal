
var paymdetail,payopt;
chrome.storage.sync.get('stop',function(myitem){
	if(myitem['stop']==1)
	{

chrome.storage.sync.get(['paydetail','payopt'],function(item){
paymdetail=JSON.parse(item['paydetail']);
payopt=JSON.parse(item['payopt']);
check();
});
}
}
)

function check()
{
var ra=$("input[type='radio']");

if(ra.length>1)
{
if(payopt.payoption=="DEBIT_CARD")
{

if(payopt.bank==9)
ra[2].click();
else if(payopt.bank==19)
ra[0].click();

}
else
{
if(payopt.bank==34)
ra[0].click();
else if(payopt.bank==48)
{
ra[1].click();
}
}
return 0;
}
return 1;
}
