import bgGradient from '../assets/images/bgGradient.png';
import bgGradientGreen from '../assets/images/bgGradientGreen.svg';

const gradientImages = [
  { top: '-420px', left: '-438px', rotate: '0deg', z: '-z-10', scale: 1.5 },
  { top: '260px', right: '-430px', rotate: '-20deg', scale: 1.5 },
  { top: '898px', left: '-470px', rotate: '7deg', scale: 1.5 },
  { top: '1432px', right: '-480px', rotate: '-20deg', scale: 1.5 },
  { top: '2117px', left: '-510px', rotate: '-180deg', scale: 1.5 },
  { top: '2926px', left: '-440px', rotate: '320deg', scale: 1.5 },
];

export const Backgrounds = ({ theme = 'red' }) => {
  const gradientSrc = theme === 'green' ? bgGradientGreen : bgGradient;

  return (
    <div className="absolute inset-0 z-0 max-w-[700px] mx-auto">
      {gradientImages.map((pos, index) => (
        <div
          key={index}
          className="absolute w-[730px] h-[790px]"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `rotate(${pos.rotate})`,
          }}
        >
          <img
            src={gradientSrc}
            alt={`Gradient ${index}`}
            className="w-full h-full animate-spin-scale-slow"
            //animate-spin-scale-slow
          />
        </div>
      ))}
    </div>
  )
}