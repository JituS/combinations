function getCombinations(numbers){
	var combinations = [];
	numbers.forEach(e => {
		var clone = JSON.parse(JSON.stringify(combinations));
		clone.map(each => {
			each.push(e);
		});
		if(clone.length > 0) combinations = combinations.concat(clone);
		combinations.push([e]);
	});
	return combinations;
}

console.log(getCombinations(['a', 'b', 'c']));
