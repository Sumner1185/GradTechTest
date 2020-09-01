function createMenuData(data) {
  let menuData = []

  if (data.length === 0) {
    return data
  } else if (data.length === 1) {
    let result = data[0].split('/')
    return [{title: `${result[0]}`, data: [`${result[1]}`]}]
  } else {
    for (let i = 0; i < data.length; i++) {
      result = data[i].split('/')
      menuData.push({title: result[0], data: [result[1]]})
    }
    return menuData
  }
}

module.exports = createMenuData