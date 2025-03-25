import type { PropsWithChildren } from "react";


const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="py-4 grow flex flex-col items-center">
      <div className="max-w-[48rem] mx-4 gap-4">
        {children}
      </div>
    </main>
  );
};

export default Layout;