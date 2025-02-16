import "./index.css";
import ModalConfirm from "./components/modal/ModalConfirm";
import ModalConfirmContext from "./stores/ModalConfirmContext";
import useConfirmModal from "./hooks/useConfirmModal";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import { Link, Route, Routes } from "react-router";
import InfiniteCards from "./pages/demo/InfiniteCards";
import { nanoid } from "@reduxjs/toolkit";
import SelectLanguage from "./components/selects/SelectLanguage";
import UserIdle from "./components/labels/UserIdle";
import { withAuth } from "./hocs/withAuth";
import Profile from "./pages/user/Profile";

const TopMenu = () => {
  const menuList = [
    { id: nanoid(), path: "/", title: "Home" },
    { id: nanoid(), path: "/demo/infinite-cards", title: "Infinite Cards" },
  ];

  return (
    <div className="flex gap-4 items-center bg-gray-600 text-white py-4 px-10 ">
      <div className="flex-1 flex gap-4 justify-start items-center ">
        {menuList.map((m) => (
          <div key={m.id}>
            <Link to={m.path} className="flex gap-2 items-center justify-start">
              <p className="font-bold">{m.title}</p>
            </Link>
          </div>
        ))}
      </div>
      <UserIdle />
      <SelectLanguage />
    </div>
  );
};

const ProfileWithAuth = withAuth(Profile, "aaaaaaaa....bbbbbbb");

function App() {
  const confirmModal = useConfirmModal();

  return (
    <ModalConfirmContext.Provider value={confirmModal}>
      <TopMenu />
      <div className="px-10 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo/infinite-cards" element={<InfiniteCards />} />
          <Route
            path="/profile"
            element={<ProfileWithAuth money={10000000} />}
          />
        </Routes>
      </div>
      <ModalConfirm />
      <ToastContainer />
    </ModalConfirmContext.Provider>
  );
}

export default App;
