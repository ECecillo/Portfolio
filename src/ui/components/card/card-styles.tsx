import './card.css';

export const CardWrapper = ({
  children,
  onMouseMove,
  onMouseLeave,
}: {
  children: React.ReactNode;
  onMouseMove: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave: () => void;
  style?: React.CSSProperties;
}) => (
  <div
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
    className={`rounded-3xl space-y-5 card-wrapper`}>
    {children}
  </div>
);

export const Card = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    style={style}
    className={`
      card
      relative
      flex
      flex-col
      items-center
      place-content-center
      w-60
      h-80

      bg-background
      overflow-hidden
      rounded-xl
      transition
      duration-1000
      ease-return-easing

      sm:w-60
      sm:h-80`}>
    {children}
  </div>
);

export const CardBackground = ({ style }: { style?: React.CSSProperties }) => (
  <span
    className={`
      absolute
      w-full
      h-full
      p-32

      cursor-pointer
      opacity-50
      bg-no-repeat
      bg-center
      bg-cover

      transition-opacity
      duration-1000
      ease-out`}
    style={style}
  />
);

export const CardInfo = ({ children }: { children: React.ReactNode }) => (
  <section
    className={`card-info absolute bottom-0 py-4 w-full translate-y-1/2 transition duration-200 delay-500 ease-card-info-easing`}>
    {children}
  </section>
);

export const IconContainer = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    style={style}
    className="flex flex-row absolute top-6 left-8 transform translate-z-2 z-50">
    {children}
  </div>
);