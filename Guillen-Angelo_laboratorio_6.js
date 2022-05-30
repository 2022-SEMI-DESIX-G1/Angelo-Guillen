const http = require('http');

let fibonacci = function(n) {
	if (n === 1) {
		return [0, 1];
	} else {
		var array = fibonacci(n - 1);
		array.push(array[array.length - 1] + array[array.length - 2]);
		return array;
	}
};

const server=http.createServer((req,res)=>{
  res.status=200;
  res.setHeader('Content-Type','text/plain');
});
server.listen(3000,()=>{
  console.log(fibonacci(5));
});
