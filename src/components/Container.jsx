function Container({ children }) {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen ">
      {children}
    </div>
  );
}

export default Container;
