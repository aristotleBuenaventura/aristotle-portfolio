import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { NavItem, NavItemProps } from "@/components/Navbar/NavItem";
import { useMemo } from "react";
import Head from "next/head";
import { Banner } from "@/containers/Banner";

const inter = Inter({ subsets: ["latin"] });

const links : NavItemProps[] = [
  {
      "text": "Home",
      "url" : "/home"
  },
  {
      "text": "About me",
      "url" : "/about-me"
  },
  {
      "text": "Works",
      "url" : "/works"
  },
  {
      "text": "Tools",
      "url" : "/tools"
  },
  {
      "text": "Contact",
      "url" : "/contact"
  },

]


export default function Home() {
  const children = useMemo(() =>{
    return links.map((link)=>  <NavItem url = {link.url} text={link.text}/>)
  }, [])
  return (
    <>
    <Head>
      <title>Aristotle</title>
    </Head>
      <div>
        <Navbar>
          <div className='space-x-10 me-20'>
            {children}
          </div>
        </Navbar>
        <Banner></Banner>
      </div>
    </>
  );
}
