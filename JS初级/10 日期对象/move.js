 function doMove1(obj,attr,iTag,fn){
       var iCur = 0;
       var alpha = 0;

       clearInterval(obj.timer);
       obj.timer = setInterval(function(){
			if(attr == 'opacity'){
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{
				iCur = parseInt(getStyle(obj,attr));
			}


			var iSpeed = (iTag-iCur)/13;

			iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
	
			if(iCur == iTag){
				clearInterval(obj.timer);
				fn && fn();
			}else{
			  if(attr == 'opacity'){
					alpha = iCur + iSpeed;
					obj.style.filter = 'alpha(opacity='+alpha+')';
					obj.style[attr] = alpha/100;
				}else{
					obj.style[attr] = iCur + iSpeed + 'px';
				}        
			}
        },30)

}

function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
		
	}, 30);
}

function getStyle ( obj, attr ){
    return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}

 //---------------------GetClass函数----------------------------------

function getClass(obj,cla){
	var aObj = obj.getElementsByTagName('*');
	var arrObj = [];
	for(var i=0;i<aObj.length;i++){
		if(aObj[i].className == cla){
			arrObj.push(aObj[i]);
		}
	}
	return arrObj;
}

//---------------------End GetClass函数------------------------------
