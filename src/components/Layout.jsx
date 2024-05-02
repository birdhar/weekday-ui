import LeftSidebar from "./LeftSidebar";
import style from "./Style.module.css";
import RightSidebar from "./RightSidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="">
      <LeftSidebar />
      <div className={style.mid}>
        <Navbar />
        {children}
      </div>
      <RightSidebar />
    </div>
  );
}

export default Layout;
