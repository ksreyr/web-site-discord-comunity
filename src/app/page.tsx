'use client'
import Link from "next/link"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import {Button} from "@/components/ui/button";
import {QueryClient, QueryClientProvider} from "react-query";
import AccordionPullRequest from "@/components/AccordionPullRequest/AccordionPullRequest";
import ManchesterInfo from "@/components/ManchesterInfo/ManchesterInfo";

const queryClient = new QueryClient();
export default function Component() {
  return (
      <div className="flex flex-col min-h-screen bg-[#202225] text-white">
          <Header/>
          <main className="flex items-center justify-center text-center bg-cover">
              <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                  <div className="px-4 md:px-6">
                      <div className="flex flex-col items-center space-y-4 text-center">
                          <div className="space-y-2 flex flex-col items-center justify-center text-center">
                              <h1 className="text-3xl font-bold  tracking-tighter sm:text-5xl">Welcome to the Discord
                                  Programming Community</h1>
                              <p className="max-w-[600px] text-gray-400 md:text-xl items-center justify-center dark:text-gray-300">
                                  Join our Discord community and connect with others to learn code.
                              </p>
                          </div>
                          <div className="flex flex-col gap-2 min-[400px]:flex-row">
                              <Button asChild>
                                  <Link href="/login"> See Github</Link>
                              </Button>
                          </div>
                      </div>
                  </div>
              </section>
          </main>
          <h3 className="ps-14 py-2 text-4xl font-bold tracking-tighter sm:text-4xl">
              Pull-Request
          </h3>
          <QueryClientProvider client={queryClient}>
              <section className="w-full flex flex-col items-center justify-center p-10">
                  <AccordionPullRequest val={"Programming-Skills-Level0"}/>
                  <AccordionPullRequest val={"Programming-Skills-Level1"}/>
                  <AccordionPullRequest val={"Programming-Skills-Level2"}/>
              </section>
          </QueryClientProvider>
          <ManchesterInfo/>
          <h3 className="ps-14 py-2 text-4xl font-bold tracking-tighter sm:text-4xl">
              Honor Section
          </h3>
          <Footer/>
      </div>
  )
}


