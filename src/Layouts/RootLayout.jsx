import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatesNews from "../Components/LatesNews";
import Navber from "../Components/Navber";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="container mx-auto my-3">
            <LatesNews></LatesNews>
        </section>
        <nav className="container mx-auto my-3">
            <Navber></Navber>
        </nav>
      </header>
      <main className="container mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="left-side col-span-3 sticky top-0 h-fit">
            <LeftAside></LeftAside>
        </aside>
        <section className="main-side col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="right-side col-span-3 sticky top-0 h-fit">
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default RootLayout;
