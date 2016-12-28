var fibo = (function() {

var memoiz = {};
 
  
function f(n) {
    
	var a;
 
    
	if (n in memoiz) {
      
		a = memoiz[n];
    
	} else {
      
		if (n === 0 || n === 1)
        
			a = n;
      
		else
        
			a = f(n - 1) + f(n - 2);
      
		memoiz[n] = a;
    
	}
 
    
	return a;
  
}
 
  
return f;

})();

var CurryMult = function(b){
 
	return function(a){ 
		return a*b;
	}

}