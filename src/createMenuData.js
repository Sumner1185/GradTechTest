function createMenuData(data) {
  if (data.length === 0) {
    return data
  } else if (data.length === 1) {
    let result = data[0].split('/')
    return [{title: `${result[0]}`, data: [`${result[1]}`]}]
  } else {
    let first = data[0].split('/')
    let second = data[1].split('/')
    return [{title: `${first[0]}`, data: [`${first[1]}`, `${second[1]}`]}]
  }
}

module.exports = createMenuData