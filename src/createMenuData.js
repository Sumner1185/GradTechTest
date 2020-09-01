createMenuData = (data) => {
  let menuData = []
  if (!Array.isArray(data)) {
    throw new Error('Input data must be an array')
  }

  isEmptyArray(data) ? data : checkData(data, menuData)
  return menuData
}

checkData = (data, menuData) => {
  for (let i = 0; i < data.length; i++) {
    let result = data[i].split('/')
    if (result.length === 1) {
      // do nothing
    } else {
      let found = menuData.some(el => el.title === result[0])
      found ? repeatParentName(menuData, result[0], result[1]) : menuData.push({title: result[0], data: [result[1]]})
    }
  }
  return menuData
}

repeatParentName = (arr, name, child) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === name) {
      arr[i].data.push(child)
    }
  }
  return arr
}

isEmptyArray = data => data.length === 0

module.exports = createMenuData