import {BrowserRouter , Routes , Route} from "react-router-dom"
import HomePage from "../pages/homePage/HomePage"
import ListPage from "../pages/listPage/ListPage"

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path = "/Lista" element = {<ListPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router