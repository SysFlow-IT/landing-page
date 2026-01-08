import React from 'react'
import { BrowserRouter, Routes, Route, useParams, Navigate, Outlet } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SzkoleniePage } from './pages/SzkoleniePage'
import { WdrozeniaPage } from './pages/WdrozeniaPage'
import { LanguageProvider } from './hooks/useContent'
import { IndexRedirect } from './components/shared/IndexRedirect'
import { Language, SUPPORTED_LANGUAGES } from './utils/language'
import './App.css'

const LanguageWrapper: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();

  if (!SUPPORTED_LANGUAGES.includes(lang as Language)) {
    return <Navigate to="/" replace />;
  }

  return (
    <LanguageProvider language={lang as Language}>
      <Outlet />
    </LanguageProvider>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexRedirect />} />

        <Route path="/:lang" element={<LanguageWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="szkolenie" element={<SzkoleniePage />} />
          <Route path="training" element={<SzkoleniePage />} /> {/* Alias for EN */}
          <Route path="wdrozenia" element={<WdrozeniaPage />} />
          <Route path="implementations" element={<WdrozeniaPage />} /> {/* Alias for EN */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
