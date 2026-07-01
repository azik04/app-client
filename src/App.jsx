import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/Auth/AuthLayout";
import HomeLayout from "./layouts/Home/HomeLayout";
import MainLayout from "./layouts/Main/MainLayout";
import Home from "./features/Home/Home";
import SignIn from "./features/Auth/SignIn";
import SignUp from "./features/Auth/SignUp";
import ForgotPassword from "./features/Auth/ForgotPassword";
import ResetPassword from "./features/Auth/ResetPassword";
import NotFound from "./features/NotFound/NotFound";
import CheckMail from "./features/Auth/CheckMail";
import ConfirmMail from "./features/Auth/ConfirmMail";
import Profile from "./features/Profile/Profile";
import Admin from "./features/Admin/Admin";
import ChatBot from "./features/Bot";
import Job from "./features/Job/Job";
import JobInfo from "./features/JobInfo/JobInfo";
import Worker from "./features/Worker/Worker";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route index element={<SignIn />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                </Route>
                <Route path="bot" element={<ChatBot />} />

                <Route path="auth/check-mail" element={<CheckMail />} />
                <Route path="auth/confirm-mail" element={<ConfirmMail />} />

                <Route path="/home" element={<HomeLayout />}>
                    <Route index element={<Home />} />
                </Route>

                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Profile />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/job" element={<Job />} />
                    <Route path="/job/:jobId" element={<JobInfo />} />
                    <Route path="/worker" element={<Worker />} />
                    <Route path="/worker/:workerId" element={<Worker />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;