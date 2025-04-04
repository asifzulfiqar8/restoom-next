import Aside from "@/components/user/layout/Aside";
import Header from "@/components/user/layout/Header";

const UserLayout = ({ children }) => {
  return (
    <section className="bg-[#F5F2FF] w-screen h-screen grid place-items-center overflow-hidden">
      <section className="h-[calc(100vh-16px)] w-[calc(100vw-16px)] flex gap-4">
        <Aside />
        <div className="flex-1">
          <Header />
          <main className="h-[calc(100vh-197px)] overflow-y-scroll overflow-x-hidden scroll-0 py-4 rounded-lg">
            {children}
          </main>
        </div>
      </section>
    </section>
  );
};

export default UserLayout;
