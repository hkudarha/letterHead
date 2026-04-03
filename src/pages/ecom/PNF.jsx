import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserRouters, AdminRouters, Routers } from "../../constants/router";
import { ArrowLeft } from "lucide-react";

const PNF = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleBackClick = () => {
    if (isAuthenticated) {
      if (user?.role === "admin") {
        navigate(AdminRouters.DASHBOARD);
      } else {
        navigate(UserRouters.DASHBOARD);
      }
    } else {
      navigate(Routers.HOME);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#e7e0ee] via-[#f4effa] to-white" />
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#6d4aa8]/30 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-32 w-[380px] h-[380px] bg-[#bfa7e3]/40 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#e3d6f5]/50 rounded-full blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#00000010_1px,transparent_0)] bg-[size:24px_24px] opacity-20" /> */}

      <div className="relative text-center max-w-lg">
        <h1 className="text-[120px] font-extrabold text-[#6d4aa8]/30 leading-none">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-[#2f2545]">
          Page Not Found
        </h2>

        <p className="mt-4 text-[#4b3f63] text-sm md:text-base">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={handleBackClick}
          className="mt-10 inline-flex items-center gap-2
                     bg-gradient-primary text-white px-8 py-3
                     rounded-xl text-sm font-semibold
                     hover:bg-[#5a3c8f] transition"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>
      </div>
    </section>
  );
};

export default PNF;
