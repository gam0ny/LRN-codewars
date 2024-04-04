function arrayDiff(a, b) {

	const resultArray = []

	a.forEach(item => {
		if(!b.includes(item)) {
			resultArray.push(item)
		}
	})

	return resultArray

}
