import { CircleX, MoveLeft } from "lucide-react";
import { useState } from "react";

const NavbarModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className='navbarmodal-container transform-modal'>
      <div className='navbar-modal'>
        <MoveLeft className='back-icon' onClick={handleModal} />
        <CircleX className='close-icon' onClick={handleModal} />
      </div>
      <div className='menu-listModal'>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </div>
    </div>
  );
};

export default NavbarModal;
