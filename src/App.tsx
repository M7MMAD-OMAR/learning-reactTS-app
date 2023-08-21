import React, {useState} from 'react';
import {ConfigProvider, theme} from "antd";
import HeaderLayout from "./components/layouts/HeaderLayout";
import FooterLayout from "./components/layouts/FooterLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UniversitiesPage from "./pages/UniversitiesPage";
import AboutPage from "./pages/AboutPage";
import AdvicePage from "./pages/AdvicePage";
import Error404 from "./pages/ErrorPages/Error404";
import FaqPage from "./pages/FaqPage";


function App() {

    const [themeApp] = useState(
        {
            // algorithm: theme.darkAlgorithm,
            token: {
                colorPrimary: '#8e44ad',
                borderRadius: 5,
            },
        })


    return (
        <ConfigProvider
            theme={themeApp}>
            <HeaderLayout/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/universities" element={<UniversitiesPage/>}/>
                    <Route path="/advice" element={<AdvicePage/>}/>
                    <Route path="/faq" element={<FaqPage />}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
            <FooterLayout/>
        </ConfigProvider>
    );
}

export default App;