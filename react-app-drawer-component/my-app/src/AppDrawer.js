import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function ShowMenu({ menu }) {
  const [openMenu, setOpen] = useState(false);

  function handleClick() {
    setOpen(!openMenu);
  }
  return (
    <>
      {openMenu ? (
        <>
          <div className="overlay" onClick={handleClick}>
            <div className="menu-opened" currentopen={openMenu}>
              <FaBars className="menu-icon" onClick={handleClick} />
              <RenderMenu menu={menu} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="menu-closed">
            <FaBars className="menu-icon" onClick={handleClick} />
          </div>
        </>
      )}
    </>
  );
}

function RenderMenu({ menu }) {
  const menuList = menu.map((menu) => (
    <div className="menu-list">
      <h3 key={menu.id}>{menu.page}</h3>
    </div>
  ));

  return <div>{menuList}</div>;
}
