function HeroSection() {
  return (
    <div className="w-full text-center m-10">
      <a
        href="https://linkedin.com/in/ececillo"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative
          justify-self-center
          w-fit
          my-0
          mx-auto

          text-5xl
          font-mono
          cursor-pointer
          transition
          hover:text-blue-500
          ease-in-out
          duration-300


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
      </a>
    </div>
  );
}

export default HeroSection;
