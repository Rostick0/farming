import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./UI/Loader";

const MainPage = lazy(() => import('./pages/main'));
const CatalogListPage = lazy(() => import('./pages/catalog_list'));
const CatalogItemPage = lazy(() => import('./pages/catalog_item'));
const ProductPage = lazy(() => import('./pages/product'));
const CartPage = lazy(() => import('./pages/cart'));
const LoginPage = lazy(() => import('./pages/login'));
const RegisterPage = lazy(() => import('./pages/register'));
const RecoveryPage = lazy(() => import('./pages/recovery'));
const ProfilePage = lazy(() => import('./pages/profile'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactsPage = lazy(() => import('./pages/contacts'));
const PartnersPage = lazy(() => import('./pages/partners'));
const ReviewsPage = lazy(() => import('./pages/reviews'));

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/catalog" element={<CatalogListPage />}></Route>
                <Route path="/catalog/:category" element={<CatalogItemPage />}></Route>
                <Route path="/product/:id" element={<ProductPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
                <Route path="/recovery" element={<RecoveryPage />}></Route>
                <Route path="/profile" element={<ProfilePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/contacts" element={<ContactsPage />}></Route>
                <Route path="/partners" element={<PartnersPage />}></Route>
                <Route path="/reviews" element={<ReviewsPage />}></Route>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;