function IsMobile({ children }: { children: React.ReactNode }) {
  return <div className="block lg:hidden">{children}</div>;
}

export default IsMobile;
