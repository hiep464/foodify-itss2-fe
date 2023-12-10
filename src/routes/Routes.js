import DefaultLayout from "../layout/defaultLayout/DefaultLayout"
import RecipeSearch from "../pages/recipe_search"

export const publicRoutes = [
    {path: '/', element : RecipeSearch, layout: DefaultLayout},
]