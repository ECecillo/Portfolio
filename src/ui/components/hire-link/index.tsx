function HireLink() {
  const linkedinLink = 'https://www.linkedin.com/in/ececillo/';
  const hireText = 'Recrutez moi !';
  return (
    <a
      className={`
        relative
        inline-block
        justify-self-center
        py-6 px-4

        no-underline
        tracking-wider
        overflow-hidden

        font-bold
        text-base
        text-primary
        hover:bg-[#03e9f4]
        hover:text-[#050801]
        hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_200px_#03e9f4]
        transition-all duration-500

        w-3/4
        sm:w-2/3
        md:w-1/2
        lg:w-2/5
        lg:my-2
      `}
      href={linkedinLink}>
      {/* -------------> */}
      <span
        className={`
          absolute
          block
          top-0
          left-0
          w-full
          h-[2px]
          bg-gradient-to-tr from-transparent to-[#03e9f4]
          animate-rotating-line-top-left-right`}></span>
      {/*
          |
          |
          |
          |
          O
        */}
      <span
        className={`
          absolute
          block
          -top-full
          right-0
          w-[2px]
          h-full
          bg-gradient-to-br from-transparent to-[#03e9f4]
          animate-rotating-line-top-bottom-right`}
        style={{ animationDelay: '0.25s' }}></span>
      {/* <----------- */}
      <span
        className={`
          absolute
          block
          bottom-0
          right-0
          w-full
          h-[2px]
          bg-gradient-to-bl from-transparent to-[#03e9f4]
          animate-rotating-line-bottom-right-left delay-200`}
        style={{ animationDelay: '0.5s' }}></span>
      {/*
        O
        |
        |
        |
        |
      */}
      <span
        className={`
          absolute
          block
          -bottom-full
          left-0
          w-[2px]
          h-full
          bg-gradient-to-tl from-transparent to-[#03e9f4]
          animate-rotating-line-bottom-top-left delay-300`}
        style={{ animationDelay: '0.75s' }}></span>
      {hireText.toUpperCase()}
    </a>
  );
}

export default HireLink;
