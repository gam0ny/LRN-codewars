export function arrayDiff(a, b) {

	const resultArray = []
	let isFound = false

	for(let i = 0; i < a.length; i++) {

		isFound = false

		for(let j = 0; i < b.length; j++) {

			if(a[i] === b[j]) {
				isFound = true
				break
			}
		}

		if(!isFound) {
			resultArray.push(a[i])
		}
	}

	return resultArray

}
