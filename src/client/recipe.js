import { loadRecipe } from './recipeRepository'
import m from 'mithril'

function noRecipeMessage() {
    return m('', 'No recipe selected')
}

function recipe(chosenRecipe) {
    return m('', 'Displaying recipe ' + JSON.stringify(chosenRecipe))
}

export default {
    view: function(vnode) {
        let chosenRecipe = vnode.attrs.chosenRecipe;

        return m('',
                (chosenRecipe == null ?
                 noRecipeMessage() : recipe(chosenRecipe)))
    }
}
