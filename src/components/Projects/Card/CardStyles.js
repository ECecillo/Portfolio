// Codepen for reference : https://codepen.io/ececillo/pen/mdqdmmK?editors=0100
import styled from 'styled-components';
const hoverEasing = 'cubic-bezier(0.23, 1, 0.32, 1)';
const returnEasing = 'cubic-bezier(0.445, 0.05, 0.55, 0.95)';

export const Card = styled.div`
  position: relative;
  flex: 0 0 240px;
  width: 300px;
  height: 380px;
  background-color: #333; // Teinte noir.
  overflow: hidden;
  border-radius: 20px; // Border radius carte.
  box-shadow: rgba(0, 0, 0, 0.6) 0 10px 25px 0,
    // Ombre arrière plan
    inset #333 0 0 0 5px,
    // Assombris la carte.
    inset rgba(255, 255, 255, 0.85) 0 0 0 6px; // Ligne du Contour
  transition: 1s ${returnEasing};
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 240px;
    height: 320px;
    margin: 1rem;
  }
`;
export const CardBackground = styled.div`
  opacity: 0.5; // Assombrie l'image.
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 8rem; // S'élargit pour pas qu'on voit le fond.
  transition: 1s ${returnEasing},
    // Temps pour que l'image met pour se remettre en place.
    opacity 5s 1s ${returnEasing};
  pointer-events: none;
`;
export const CardInfo = styled.div`
  padding: 1rem; // Pousse la div pour la centrer un peu.
  position: absolute;
  bottom: 0; // Place la div en bas.
  color: #fff; // Couleur du texte dans la div.
  transform: translateY(40%); // Permet d'avoir cette effet de texte qui monte.
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s ${returnEasing};
  }
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  transform: translateZ(50px);
  z-index: 1000;
  a {
    opacity: 0;
    margin: 0 1rem 0 0;
    transition: 0.7s ${hoverEasing};
  }
`;

export const CardWrapper = styled.div`
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    a {
      transition: 2s ${hoverEasing};
      opacity: 1;
    }
    ${CardInfo} {
      transform: translateY(0);
    }
    ${CardInfo} p {
      opacity: 1;
    }
    ${CardInfo}, ${CardInfo} p {
      transition: 0.7s ${hoverEasing};
    }
    ${CardInfo}::after {
      transition: 0.7s ${hoverEasing};
      opacity: 1;
      transform: translateY(0);
    }
    ${CardBackground} {
      transition: 1s ${hoverEasing}, opacity 2s ${hoverEasing};
      opacity: 0.66;
    }
    ${Card} {
      transition: 0.6s ${hoverEasing}, box-shadow 2s ${hoverEasing};
      box-shadow: rgba(255, 255, 255, 0.4) 0 0 0 1px,
        rgba(0, 0, 0, , 1) 0 30px 60px 0, inset #333 0 0 0 5px, inset white 0 0 0 6px;
    }
  }
`;
