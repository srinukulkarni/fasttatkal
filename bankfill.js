
var payopt,paymdetail,clo,clot=0;
chrome.storage.sync.get('stop',function(myitem){
	if(myitem['stop']==1)
	{
        if(document.title=="Book Ticket - Passengers Information")
                        {
                        var node = document.createElement("h3");
                        node.setAttribute("style","color:red");
                        var textnode = document.createTextNode("Invalid Captcha");
                        node.appendChild(textnode);
                        document.getElementsByClassName("rf-p-b")[4].appendChild(node);

                        }
       else
                        {
                        chrome.storage.sync.get(['payopt','paydetail'],function(item){
                        payopt = JSON.parse(item['payopt']);
                        paymdetail=JSON.parse(item['paydetail']);
                        fillbank();});
                        }
           }
                                                  })
function fillbank(){

$('td[id="'+payopt.payoption+'"]').click();
$('input[value="'+payopt.bank+'"]').click();

if((payopt.bank==17)||(payopt.bank==21))
{
document.getElementById("card_type_id").value=paymdetail.c.cardtype;
if(paymdetail.c.cardno!="")
document.getElementById("card_no_id").value=paymdetail.c.cardno;
if(paymdetail.c.expm!=" ")
document.getElementById("card_expiry_mon_id").value=paymdetail.c.expm;
if(paymdetail.c.expy!=" ")
document.getElementById("card_expiry_year_id").value=paymdetail.c.expy;
if(paymdetail.c.cardname!="")
document.getElementById("card_name_id").value=paymdetail.c.cardname;
document.getElementById("cvv_no_id").value=paymdetail.c.cvv;

document.getElementById("captcha_txt").focus();

}
else if((payopt.bank==59))
{
	

if(paymdetail.ir.cardno!="")
document.getElementById("card_no_id").value=paymdetail.ir.cardno;
if(paymdetail.ir.expm!=" ")
document.getElementById("card_expiry_mon_id").value=paymdetail.ir.expm;
if(paymdetail.ir.expy!=" ")
document.getElementById("card_expiry_year_id").value=paymdetail.ir.expy;
if(paymdetail.ir.cardname!="")
document.getElementById("card_name_id").value=paymdetail.ir.cardname;
document.getElementById("cvv_no_id").value="";
document.getElementById("cvv_no_id").focus();
}
else if(payopt.bank=="49")
{
document.getElementById("card_type_id").value=paymdetail.em.cardtype;
if(paymdetail.em.cardno!="")
document.getElementById("card_no_id").value=paymdetail.em.cardno;
if(paymdetail.em.expm!=" ")
document.getElementById("card_expiry_mon_id").value=paymdetail.em.expm;
if(paymdetail.em.expy!=" ")
document.getElementById("card_expiry_year_id").value=paymdetail.em.expy;
if(paymdetail.em.cardname!="")
document.getElementById("card_name_id").value=paymdetail.em.cardname;
document.getElementById("cvv_no_id").value="";
document.getElementById("cvv_no_id").focus();
}
else
{
document.getElementById("validate").click();	
}



}

function clock()
{
document.getElementById("clock").innerHTML= "SEC : "+clot;

clot=clot+1;
if(clot>120)
clearInterval(clo);

}


