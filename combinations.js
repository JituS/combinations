function getCombinations(numbers){
	return numbers.reduce((pv, cv) => {
		var clone = JSON.parse(JSON.stringify(pv)).map(each => {
			return each.concat([cv]);
		});
		if(clone.length > 0) pv = pv.concat(clone);
		pv.push([cv]);
		return pv;
	}, []);
}

console.log(getCombinations([1,2,3,4,5,6,7,8,9]));
