import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { SearchPage } from "./pages/SearchPage";
import GuidePage from "./pages/GuidePage";
import GuidAddPage from "./pages/GuidAddPage";
import DiaryPage from "./pages/DiaryPage";
import DiaryDetailPage from "./pages/DiaryDetailPage";
import DiaryAddPage from "./pages/DiaryAddPage";
import MyPage from "./pages/MyPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/guide/add" element={<GuidAddPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/diary/:id" element={<DiaryDetailPage />} />
        <Route path="/diary/add" element={<DiaryAddPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
