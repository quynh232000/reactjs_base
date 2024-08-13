import { Outlet } from "react-router-dom";


const AppLayout = () => {
  

  return (
    <>
      <header>Header</header>
      <div className="flex w-full justify-between h-screen pt-[60px] ">
        <div className="flex w-full justify-between relative">
          <div className=" px-[8px] hidden  lg:block w-sidebar">
            sidebar left
          </div>
          <section className="w-full sm:w-content overflow-y-scroll scrollbar_custom ">
            <Outlet />
          </section>
          <div className="hidden md:block px-[8px] w-sidebar">
           siderbar right
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AppLayout;
