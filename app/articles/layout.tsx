import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="py-4 px-48 grow">
      {children}
    </main>
  );
};

export default Layout;