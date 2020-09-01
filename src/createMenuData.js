function createMenuData(data) {
  let menuData = []

  if (data.length === 0) {
    return data
  } else {
    for (let i = 0; i < data.length; i++) {
      let result = data[i].split('/')
      let found = menuData.some(el => el.title === result[0])
      if (menuData[i - 1] !== undefined && found) {
        menuData[i - 1].data.push(result[1])
      } else {
      menuData.push({title: result[0], data: [result[1]]})
      }
    }
    return menuData
  }
}

module.exports = createMenuData