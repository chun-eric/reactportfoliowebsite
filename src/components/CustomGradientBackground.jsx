import "./customGradientBackground.css";

const CustomGradientBackground = () => {
  return (
    // <div className='background-container'>
    //   <div className='background-content darkmode dot mask'>
    //     <div className='overlay'></div>
    //     <div className='gradient-overlay'></div>
    //   </div>
    // </div>
    <div className='background-container'>
      <div className='gradient-overlay'></div>
      <div className='grid-background'></div>
    </div>
  );
};

export default CustomGradientBackground;
