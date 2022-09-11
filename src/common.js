
const findMaxValueInArrayOfObjects = (arrayOfObjects, property) => {
	return arrayOfObjects.reduce((previousObject, currentObject) => {
		return previousObject[property] > currentObject[property]
			? previousObject[property]
			: currentObject[property]
	}, 0)
}

export {findMaxValueInArrayOfObjects}