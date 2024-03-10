import portfolioPortrait from '@/assets/portrait/portrait-photo.webp';

function Portrait() {
  return (
    <div className="w-11/12">
      <picture>
        <img srcSet={portfolioPortrait} />
      </picture>
    </div>
  );
}

export default Portrait;
