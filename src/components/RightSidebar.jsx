import style from "./Style.module.css";

function RightSidebar() {
  return (
    <aside className={`${style.sidebar} ${style.rightsidebar}`}>
      <div className={style.sidebarright}>
        <img className={style.avatar} src="/images/user.png" alt="user" />

        <div className={`${style.leftItems} ${style.rightItems}`}>
          <div className={style.editbox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={style.pencil}
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
            <p className={style.edittext}>Edit Profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;
