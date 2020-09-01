function createMenuData(data) {
  if (data.length === 0) {
    return data
  } else {
    let parent = data[0].split('/')
    return [{title: `${parent[0]}`, data: [`${parent[1]}`]}]
  }
}

module.exports = createMenuData