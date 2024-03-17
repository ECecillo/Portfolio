import React, { ReactElement, useEffect, useState } from 'react';
import fetchRandomPicture from '@/ui/hooks/fetch-random-picture';

import { Card, CardBackground, CardInfo, CardWrapper, IconContainer } from './card-styles';

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

type CardPosition = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type PagePosition = {
  pageOffsetX: number;
  pageOffsetY: number;
};

const computeCardPerspective = (
  pagePosition: PagePosition,
  cardPosition: CardPosition,
) => {
  const constrain = 20;

  const { pageOffsetX: pageX, pageOffsetY: pageY } = pagePosition;
  const { x: cardOffSetX, y: cardOffSetY, width, height } = cardPosition;

  const rotationY = -(pageY - cardOffSetY - height / 2) / constrain;
  const rotationX = (pageX - cardOffSetX - width / 2) / constrain;
  const translationX = -(pageY - cardOffSetY - height / 2) / (constrain + 20);
  const translationY = (pageX - cardOffSetX - width / 2) / (constrain + 20);

  return {
    rotation: {
      x: rotationX,
      y: rotationY,
    },
    translation: {
      x: translationX,
      y: translationY,
    },
  };
};

const RotatingCard: React.FC<RotatingCardProps> = ({
  title,
  description,
  image: projectImage,
  links,
}) => {
  const [image, setImage] = useState<string>('');
  const [cardPosition, setCardPosition] = useState<CardPosition>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [pagePosition, setPagePosition] = useState<PagePosition>({
    pageOffsetX: 0,
    pageOffsetY: 0,
  });
  const [styles, setStyles] = useState<{ frame: string; background: string }>({
    frame: '',
    background: '',
  });

  useEffect(() => {
    fetchRandomPicture({ width: 250, height: 250 }).then((image) => {
      setImage(image);
    });
  }, [projectImage]);

  return (
    <CardWrapper
      onMouseMove={(event) => {
        setCardPosition({
          x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top,
          width: event.currentTarget.getBoundingClientRect().width,
          height: event.currentTarget.getBoundingClientRect().height,
        });
        setPagePosition({ pageOffsetX: event.clientX, pageOffsetY: event.clientY });
        const { rotation, translation } = computeCardPerspective(
          pagePosition,
          cardPosition,
        );
        setStyles({
          frame: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          background: `translateY(${translation.x}px) translateX(${translation.y}px)`,
        });
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setStyles({
            frame: 'rotateX(0deg) rotateY(0deg)',
            background: 'translateY(0px) translateX(0px)',
          });
        }, 200);
      }}>
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
        <CardBackground
          style={{
            backgroundImage: `url(${image})`,
            transform: styles.background,
          }}
        />
        <CardInfo>
          <h1 className="font-bold drop-shadow-lg py-1 px-2">{title}</h1>
          <p className="opacity-0 px-4 drop-shadow-lg transition duration-500 ease-card-info-easing">
            {description}
          </p>
        </CardInfo>
      </Card>
    </CardWrapper>
  );
};

export default RotatingCard;
