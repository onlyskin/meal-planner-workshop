import m from 'mithril'

export function loadAllRecipes() {
  return m.request({
      method: 'GET',
      url: '/recipes',
  })
}

export function loadRecipe(name) {
  return m.request({
      method: 'GET',
      url: `/recipes/${name}`,
  })
}
