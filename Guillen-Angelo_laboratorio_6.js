let fibonacci = function(n) {
	if (n === 1) {
		return [0, 1];
	} else {
		var array = fibonacci(n - 1);
		array.push(array[array.length - 1] + array[array.length - 2]);
		return array;
	}
};

console.log(fibonacci(5));