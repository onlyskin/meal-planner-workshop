import Recipe from './recipe'
import m from 'mithril'

function _renderRecipe(vnode, recipe) {
    let model = vnode.attrs.model;

    return m('li',
            m('a',
                {onclick: e => model.setChosenRecipe(e.target.textContent)},
                recipe));
}

export default {
    view: function(vnode) {
        let recipes = vnode.attrs.recipes;
        let renderRecipe = _renderRecipe.bind(null, vnode);
        let chosenRecipe = vnode.attrs.chosenRecipe;

        return m('#recipeList', [
                m('ul', recipes.map(renderRecipe)),
                m(Recipe, {chosenRecipe: chosenRecipe}),
        ]);
    },
}
