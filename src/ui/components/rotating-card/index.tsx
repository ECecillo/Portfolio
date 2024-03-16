import React, { ReactElement, useEffect, useState } from 'react';
import { Card, CardBackground, CardInfo, CardWrapper, IconContainer } from './card';

type Link = {
  href: string;
  icon: ReactElement;
};

interface RotatingCardProps {
  title: string;
  description: string;
  image: string;
  links: Link[];
  className?: string;
}

const computeCardPerspective = (pagePosition: number[], cardPosition: number[]) => {
  const constrain = 20;
  const [pageX, pageY] = pagePosition;
  const [cardOffSetX, cardOffSetY, width, height] = cardPosition;

  const rotationY = -(pageY - cardOffSetY - height / 2) / constrain;
  const rotationX = (pageX - cardOffSetX - width / 2) / constrain;
  const translationX = -(pageY - cardOffSetY - height / 2) / (constrain + 20);
  const translationY = (pageX - cardOffSetX - width / 2) / (constrain + 20);

  return {
    frame: `rotateX(${rotationY}deg) rotateY(${rotationX}deg)`,
    background: `translateY(${translationX}px) translateX(${translationY}px)`,
  };
};

const RotatingCard: React.FC<RotatingCardProps> = ({
  title,
  description,
  image: projectImage,
  links,
  className,
}) => {
  const [image, setImage] = useState<string>('');
  const [cardPosition, setCardPosition] = useState<number[]>([0, 0, 0, 0]); // (x, y, width, height)
  const [pagePosition, setPagePosition] = useState<number[]>([0, 0]); // Position inside the window
  const [styles, setStyles] = useState<{ frame: string; background: string }>({
    frame: '',
    background: '',
  });
  const unsplashAPI = 'https://source.unsplash.com/random/300x300';
  useEffect(() => {
    async function fetchImage() {
      const res = await fetch(unsplashAPI);
      return res.url;
    }
    fetchImage().then((res) => setImage(res));
  }, [projectImage]);

  return (
    // Card wrapper
    <CardWrapper
      onMouseMove={(event) => {
        setCardPosition([
          event.currentTarget.getBoundingClientRect().left,
          event.currentTarget.getBoundingClientRect().top,
          event.currentTarget.getBoundingClientRect().width,
          event.currentTarget.getBoundingClientRect().height,
        ]);
        setPagePosition([event.clientX, event.clientY]);
        setStyles(computeCardPerspective(pagePosition, cardPosition));
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setStyles({
            frame: 'rotateX(0deg) rotateY(0deg)',
            background: 'translateY(0px) translateX(0px)',
          });
        }, 200);
      }}
      className="rounded-3xl space-y-5 space-x-2">
      {/* icons */}
      <IconContainer style={{ transform: styles.frame + ' translateZ(30px)' }}>
        {links.map((link, index) => (
          <a
            className="opacity-0 transition ease-hover-easing duration-75"
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </IconContainer>
      <Card style={{ transform: styles.frame }}>
        {/* content */}
        <CardInfo>
          <h1 className="font-bold drop-shadow-lg py-1">{title}</h1>
          <p className="opacity-0 drop-shadow-lg transition duration-500 ease-card-info-easing">
            {description}
          </p>
        </CardInfo>
        <CardBackground
          style={{
            backgroundImage: `url(${image})`,
            transform: styles.background,
          }}>
          <></>
        </CardBackground>
      </Card>
    </CardWrapper>
  );
};

export default RotatingCard;
