import type { PropsWithChildren } from "react";


const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="py-4 grow flex flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;