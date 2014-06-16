document.onmousemove=function (ev)
{
	var oEvent=ev||event;
	var oDiv=document.getElementById('catalog');
	var aImg=oDiv.getElementsByTagName('img');
	var d=0;
	var iMax=200;
	var i=0;
	
	function getDistance(obj)
	{
		return Math.sqrt
		(
			Math.pow(obj.offsetLeft+oDiv.offsetLeft-oEvent.clientX+obj.offsetWidth/2000, 2)+
			Math.pow(obj.offsetTop+oDiv.offsetTop-oEvent.clientY+obj.offsetHeight/2000, 2)
		);
	}
	
	for(i=0;i<aImg.length;i++)
	{
		d=getDistance(aImg[i]);
		d=Math.min(d, iMax);
		
		aImg[i].width=((iMax-d)/iMax)*110+110;  
	}
};

window.onload=function()
{
	var oBox=document.getElementById("box");
	var aLi=document.getElementsByTagName('li');
	var i=0;
	for(i=0;i<aLi.length;i++)
	{
		var oP=aLi[i].getElementsByTagName('p')[0];
		oP.iAlpha=0;
		oP.time=null;
		aLi[i].onmouseover=function()
		{
			var oP=this.getElementsByTagName('p')[0];
			oP.time?clearInterval(oP.time):"";
			oP.style.opacity=1;
			oP.style.filter="alpha(opacity=100)";
			oP.iAlpha=100;
		}
		aLi[i].onmouseout=function(){
			starmove(this.getElementsByTagName('p')[0]);
		};
	}
};
function starmove(obj)
{
	obj.time?clearInterval(obj.time):"";
	obj.time=setInterval(function(){domove(obj);},14);
}
function domove(obj)
{
	var iSpeed=5;
	if(obj.iAlpha<=iSpeed)
	{
		clearInterval(obj.time);
		obj.iAlpha=0;
		obj.time=null;
	}
	else
	{
		obj.iAlpha-=iSpeed;
	}
	obj.style.opacity=obj.iAlpha/100;
	obj.style.filter="alpha(opacity="+obj.iAlpha+")";
}


