function HeroSection() {
  return (
    <div className="w-full text-center m-10">
      <h1
        className={`
          relative
          justify-self-center
          w-fit
          my-0
          mx-auto

          text-4xl
          font-mono

          before:absolute
          before:inset-0
          before:animate-typewriter
          before:bg-background

          after:absolute
          after:inset-0
          after:w-[0.125em]
          after:bg-primary
          after:animate-caret
      `}>
        #OPENTOWORK
      </h1>
    </div>
  );
}

export default HeroSection;
