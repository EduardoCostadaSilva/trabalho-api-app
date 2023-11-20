import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body";
import HomeScreen from "../screens/HomeScreens";
import ContatoScreens from "../screens/ContatoScreens";


function RootRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/">
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<ContatoScreens />} path="contato" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RootRouter;