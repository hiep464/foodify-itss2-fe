import DefaultLayout from "../layout/defaultLayout/DefaultLayout"
import RecipeSearch from "../pages/recipe_search"
import RecipeDetail from "../pages/recipe_detail"
import HomeRecipe from "../pages/home"
export const publicRoutes = [
    {path: '/home', element : HomeRecipe, layout: DefaultLayout},
    {path: '/', element : RecipeSearch, layout: DefaultLayout},
    {path: '/recipe/:foodId', element : RecipeDetail, layout: DefaultLayout},


]