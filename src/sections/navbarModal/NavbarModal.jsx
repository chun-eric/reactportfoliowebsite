import { CircleX, MoveLeft } from "lucide-react";
import { useState } from "react";

import PropTypes from "prop-types";

const NavbarModal = ({ theme, data }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal && (
        <div className='navbarmodal-wrapper'>
          <div className='overlay'></div>
          <div className={`navbarmodal-container transform-modal ${theme}`}>
            <div className={`navbar-modal  ${theme}`}>
              <MoveLeft className='back-icon' onClick={handleModal} />
              <CircleX className='close-icon' onClick={handleModal} />
            </div>
            <div className='menu-listModal'>
              {data.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

NavbarModal.propTypes = {
  theme: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default NavbarModal;
