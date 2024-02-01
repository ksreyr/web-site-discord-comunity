'use client'
import Link from "next/link"
import {PullRequest} from "@/components/pull-request";
import {useEffect, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import {getPullRequest} from "@/fetch/getRequest/getRquest";
import PullRequestList from "@/components/PullRequestList/PullRequestList";
export default function Component() {



  return (
      <div className="flex flex-col min-h-screen bg-[#202225] text-white">
        <Header/>
        <main
            className="flex flex-1 items-center justify-center py-12 bg-center text-center bg-cover"
        >
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2 flex flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Welcome to the Discord
                    Programming Community</h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl items-center justify-center dark:text-gray-300">
                    Join our Discord community and connect with others to learn code.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400"
                      href="#"
                  >
                    Join Discord
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <section className="w-full flex flex-col items-center justify-center p-10">
          <PullRequestList val={"Programming-Skills-Level0"}/>
          <PullRequestList val={"Programming-Skills-Level1"}/>
         <PullRequestList val={"Programming-Skills-Level2"}/>
        </section>
      <Footer/>
      </div>
  )
}


