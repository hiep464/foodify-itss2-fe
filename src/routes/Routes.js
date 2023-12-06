import DefaultLayout from "../layout/defaultLayout/DefaultLayout"
import Login from "../pages/login/Login"

export const publicRoutes = [
    {path: '/', element : Login, layout: DefaultLayout},
]