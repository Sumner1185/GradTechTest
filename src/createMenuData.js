function createMenuData (data) {
  let menuData = []

  if (data.length === 0) {
    return data
  } else {
    for (let i = 0; i < data.length; i++) {
      let result = data[i].split('/')
      if (result.length === 1) {
        // do nothing
      } else {
        let found = menuData.some(el => el.title === result[0])
        if (found) {
          checkParentName(menuData, result[0], result[1])
        } else {
        menuData.push({title: result[0], data: [result[1]]})
        }
      }
    }
    return menuData
  }
}

function checkParentName (arr, name, child) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === name) {
      arr[i].data.push(child)
    }
  }
  return arr
}

module.exports = createMenuData