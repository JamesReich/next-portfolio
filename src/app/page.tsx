import Image from 'next/image'
import {FrontPageCard} from "@/components/FrontPageCard";
import ThemeToggle from '@/components/ui/ThemeToggle'
import Nav from '@/components/Nav'
import Footer from "@/components/Footer";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import React from "react";
export default function Home() {
  return (
      <>
          <nav className="flex w-full">
              <Nav />
          </nav>
        <main className="max-w-7xl mx-auto flex flex-col justify-center md:flex-row">
            <FrontPageCard />
        </main>
        <Footer />
      </>
  )
}
