
function doMove ( obj, attr, dir, target, endFn) {
	
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
		
	}, 10);
}


function shake ( obj, attr, endFn ) {
	
	var pos = parseInt( getStyle(obj, attr) );
	var arr = [];
	var num = 0;
	var shake = null;
	for(var i=10;i>0;i-=2){
		arr.push(i,-i);
	}
	arr.push(0);
	
	clearInterval( obj.shake );
	
	obj.shake = setInterval(function(){
		
		obj.style[attr] = pos  + arr[num] + 'px';
		
		num++
		
		if(num===arr.length){
			
			clearInterval(obj.shake);
			
			endFn && endFn();	
			
		}
		
	},50);
};


function opacity( obj, dir, target, endFn){
	
	if(getStyle(obj,'opaciyt')<target){
		dir = dir;
	}else{
		dir = -dir;
	}
	
	clearInterval(obj.opacity);
		 
	obj.opacity = setInterval(function(){
		
		var opa = parseFloat(getStyle(obj,'opacity'))+dir;
			
		if(opa<target){
			opa = target;
		}
				
		obj.style.opacity = opa;
			
		if(opa === target){
			clearInterval(obj.opacity);
			
			endFn && endFn();
		}
			
	},20);
};

	
function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }