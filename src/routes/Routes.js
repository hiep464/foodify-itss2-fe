import DefaultLayout from "../layout/defaultLayout/DefaultLayout"
import RecipeSearch from "../pages/recipe_search"
import RecipeDetail from "../pages/recipe_detail"
export const publicRoutes = [
    {path: '/', element : RecipeSearch, layout: DefaultLayout},
    {path: '/recipe/:foodId', element : RecipeDetail, layout: DefaultLayout},


]