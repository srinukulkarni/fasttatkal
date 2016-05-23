function selectb()
{

var opt=0;
var bopt= document.getElementById("addPassengerForm:boardingStation").innerHTML.search(jdetail.journeydetail.bs);

if(bopt>-1)
{
if(jdetail.journeydetail.bs!="")
document.getElementById("addPassengerForm:boardingStation").value=jdetail.journeydetail.bs.split(" - ")[1];
}


}
