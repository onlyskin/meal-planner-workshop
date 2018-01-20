import './styles.scss'
import RecipeList from './recipeList'
import { loadAllRecipes, loadRecipe } from './recipeRepository'
import m from 'mithril'

const model = {
    recipes: [],
    chosenRecipe: null,
    setChosenRecipe: function(chosenRecipe) {
        loadRecipe(chosenRecipe)
            .then(r => this.chosenRecipe = r);
    },
}

loadAllRecipes().then(r => model.recipes = r)

const Page = {
    view: function() {
        return m(RecipeList, {
            model: model,
            recipes: model.recipes,
            chosenRecipe: model.chosenRecipe,
        })
    }
}

const root = document.getElementById('main')
m.mount(root, Page)
