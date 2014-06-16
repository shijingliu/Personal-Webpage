var aA = null;
var aTimer = [];
var aAlpha = [];


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


window.onload=function(ev)
{
	var i=0;
	var oEvent=ev||event;
	var oDiv=document.getElementById('div1');
	aA = oDiv.getElementsByTagName("a");
	
	for(i=0;i<aA.length;i++)
	{
		aA[i].miaovIndex=i;
		aA[i].onmouseover = function (){startTimer(true, this.miaovIndex);};
		aA[i].onmouseout = function (){startTimer(false, this.miaovIndex);};
		
		aTimer[i]=null;
		aAlpha[i]=30;
	}
};
function startTimer(bShow, index)
{
	if(aTimer[index])
	{
		clearInterval(aTimer[index]);
		aTimer[index]=null;
	}
	aTimer[index] = setInterval("show("+bShow+", "+index+")", 35);
}
function show(bShow, index)
{
	var iTarget=0;
	var iNum=0;
	
	if(bShow)
	{
		iTarget=100;
		iNum=10;
	}
	else
	{
		iTarget=30;
		iNum=-10;
	}
	
	if(aAlpha[index]!=iTarget)
	{
		aAlpha[index]+=iNum;
		aA[index].style.filter = "alpha(opacity="+aAlpha[index]+")";
		aA[index].style.opacity = aAlpha[index]/100;
	}
	else
	{
		clearInterval(aTimer[index]);
		aTimer[index]=null;
	}
}