import { keyframes } from 'styled-components';

// Variable pour la rapidité du curseur, animation et Nombre de lettre.
export const typeSpeed = '4s';
export const blinkSpeed = '750ms';

// Fais la barre vertical écriture de texte.
export const blink = keyframes`
to {
    background: transparent;
}
`;

// Block que l'on rétrécie au fur et à mesure que l'on avancera.
export const typewriter = keyframes`
to {
    left: 100%;
}

`;

export const fadeInUp = keyframes`
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
export const wobbleBottom = keyframes`
    0%,
    100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    }
    15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
    }
    30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
    }
    45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
    }
    75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
    }
`;

export const wobbleBottomWebkit = keyframes`
    0%,
    100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    }
    15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
    }
    30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
    }
    45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
    }
    75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
    }
`;

export const heartBeat = keyframes`
 from {
   -webkit-transform: scale(1);
           transform: scale(1);
   -webkit-transform-origin: center center;
           transform-origin: center center;
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
 }
 10% {
   -webkit-transform: scale(0.91);
           transform: scale(0.91);
   -webkit-animation-timing-function: ease-in;
           animation-timing-function: ease-in;
 }
 17% {
   -webkit-transform: scale(0.98);
           transform: scale(0.98);
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
 }
 33% {
   -webkit-transform: scale(0.87);
           transform: scale(0.87);
   -webkit-animation-timing-function: ease-in;
           animation-timing-function: ease-in;
 }
 45% {
   -webkit-transform: scale(1);
           transform: scale(1);
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
 }

`;
export const heartBeatWebkit = keyframes`
        from {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: center center;
              transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
              transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
              transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
              transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }   
`;
export const rotating_line = {
  rotating_line_left_right: keyframes`
        0%{
            left: -100%;
        }
        50%,100%{
            left: 100%;
        }`,
  rotating_line_top_bottom_right: keyframes`
        0%{
        	top: -100%;
        }
        50%,100%{
            top: 100%;
        }`,
  rotating_line_bottom_right_left: keyframes`
        0%{
			right: -100%;
        }
        50%,100%{
            right: 100%;
        }`,
  rotating_line_bottom_top_left: keyframes`
        0%{
			bottom: -100%;
		}
		50%,100%{
			bottom: 100%;
		}`,
};
