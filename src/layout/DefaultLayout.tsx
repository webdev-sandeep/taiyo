import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="grid grid-rows-[5rem_1fr_5rem] h-full">
      <Header />
      <div className="bg-white items-stretch grid grid-cols-[10rem_1fr] md:grid-cols-[15rem_1fr] border-y border-black">
        <Sidebar />
        <div className="p-5 h-[calc(100vh-10.15rem)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
