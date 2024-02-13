'use client'
import Link from "next/link"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import { QueryClient, QueryClientProvider } from "react-query";
import AccordionPullRequest from "@/components/AccordionPullRequest/AccordionPullRequest";
import ManchesterInfo from "@/components/ManchesterInfo/ManchesterInfo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { YouTubeEmbed } from '@next/third-parties/google'

const queryClient = new QueryClient();
export default function Component() {
    return (
        <div className="flex flex-col min-h-screen bg-[#202225] text-white">
            <div className="container mx-auto">
                <Header />
                <main className="flex items-center justify-center text-center bg-cover">
                    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                        <div className="px-4 md:px-6">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="space-y-2 flex flex-col items-center justify-center text-center">
                                    <h1 className="text-3xl font-bold  tracking-tighter sm:text-5xl pb-4">Welcome to the Discord
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
                <h3 className="ps-14 py-2 text-3xl  font-bold tracking-tighter md:text-4xl">
                    Pull-Request
                </h3>
                <QueryClientProvider client={queryClient}>
                    <section className="w-full flex flex-col items-center justify-center p-10 mb-10">
                    {/* <section className="w-full grid grid-cols-2 gap-10 items-center justify-center p-10"> */}
                        <AccordionPullRequest val={"Programming-Skills-Level0"} />
                        <AccordionPullRequest val={"Programming-Skills-Level1"} />
                        <AccordionPullRequest val={"Programming-Skills-Level2"} />
                        <AccordionPullRequest val={"Programming-Skills-Level3"} />
                    </section>
                </QueryClientProvider>
                <ManchesterInfo />
                <h3 className="ps-14 pt-10 text-3xl font-bold tracking-tighter md:text-4xl">
                    Hall Of Fame
                </h3>
                <section className={"ps-10 p-10 text-4xl font-bold tracking-tighter sm:text-4xl grid grid-cols-1 sm:grid-cols-2 gap-6"}>
                    <Card>
                        <CardContent>
                            <div className="flex justify-start items-center space-x-4">
                                <Avatar className={"md:h-40 md:w-40  h-20 w-20 m-0 md:m-2"}>
                                    <AvatarImage src={"https://avatars.githubusercontent.com/u/151563799?v=4"} />
                                    <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1 w-full">
                                    <CardTitle> {"snant-dev " + ":: "}Teti</CardTitle>
                                    <CardDescription>{"Developer"}</CardDescription>
                                    <div className={"w-full grid grid-cols-1 md:grid-cols-2 gap-1"}>
                                        <Link href={"https://github.com/snant-dev"}
                                            className="inline-flex w-full h-12 items-center justify-center rounded-md bg-gray-800 px-10 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                                            Link to Github
                                        </Link>
                                        <Link href={"https://github.com/snant-dev"}
                                            className="inline-flex w-full h-12 items-center justify-center rounded-md bg-gray-800 px-10 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                                            Link to X
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="flex justify-start items-center space-x-4">

                                <div className="space-y-1 w-full">
                                    <CardTitle> {"blindma1den" + ":: "}Daniela</CardTitle>
                                    <CardDescription>{"Main Red-Devil"}</CardDescription>
                                    <div className={"w-full grid grid-cols-1 md:grid-cols-2 gap-1"}>
                                        <Link href={"https://github.com/blindma1den"}
                                            className="inline-flex w-full h-12 items-center justify-center rounded-md bg-gray-800 px-10 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                                            Link to Github
                                        </Link>
                                        <Link href={"https://github.com/blindma1den"}
                                            className="inline-flex w-full h-12 items-center justify-center rounded-md bg-gray-800 px-10 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                                            Link to X
                                        </Link>
                                    </div>
                                </div>
                                <Avatar className={"md:h-40 md:w-40  h-20 w-20 m-0 md:m-2"}>
                                    <AvatarImage src={"https://avatars.githubusercontent.com/u/16064310?v=4"} />
                                    <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="flex justify-start items-center space-x-4">
                                <Avatar className={"md:h-40 md:w-40  h-20 w-20 m-0 md:m-2"}>
                                    <AvatarImage src={"https://avatars.githubusercontent.com/u/17256988?v=4"} />
                                    <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1 w-full">
                                    <CardTitle> {"ksreyr" + ":: "}Santi</CardTitle>
                                    <CardDescription>{"Developer"}</CardDescription>
                                    <div className={"w-full grid grid-cols-1 md:grid-cols-2 gap-1"}>
                                        <Link href={"https://github.com/ksreyr"}
                                            className="inline-flex w-full h-12 items-center justify-center rounded-md bg-gray-800 px-10 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                                            Link to Github
                                        </Link>
                                        <Link href={"https://github.com/ksreyr"}
                                            className="inline-flex w-full h-12 items-center justify-center rounded-md bg-gray-800 px-10 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                                            Link to X
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="flex justify-start items-center space-x-4">
                                <div className="space-y-1 w-full">
                                    <CardTitle> {"Krieg" + ":: "}Fernando</CardTitle>
                                    <CardDescription>{"Developer"}</CardDescription>
                                    <div className={"w-full grid grid-cols-1 md:grid-cols-2 gap-1"}>
                                        <Link href={"https://github.com/blindma1den"}
                                            className="inline-flex w-full h-12 items-center justify-center rounded-md bg-gray-800 px-10 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                                            Link to Github
                                        </Link>
                                        <Link href={"https://github.com/FernandoJCa"}
                                            className="inline-flex w-full h-12 items-center justify-center rounded-md bg-gray-800 px-10 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                                            Link to X
                                        </Link>
                                    </div>
                                </div>
                                <Avatar className={"md:h-40 md:w-40  h-20 w-20 m-0 md:m-2"}>
                                    <AvatarImage src={"https://avatars.githubusercontent.com/u/15350164?v=4"} />
                                    <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <h3 className="ps-14 pt-10 text-3xl font-bold tracking-tighter md:text-4xl">
                    Comunity Resources
                </h3>
                <section className={" pb-20 grid grid-cols-1 md:grid-cols-2  justify-items-center m-14 gap-6"}>
                    <div className={"w-full"}>
                        <YouTubeEmbed videoid={"vtRkSDomFZk"} />
                        <div className="text-2xl ">
                            Support Level 0 Challenge 1
                        </div>
                    </div>
                    <div className={"w-full"}>
                        <YouTubeEmbed videoid={"z2xmQ7mw-kw"} />
                        <div className=" text-2xl">
                            Support Level 1 Challenge 2
                        </div>
                    </div>
                    <div className={"w-full"}>
                        <YouTubeEmbed videoid={"GxQ4YLFGIdk"} />
                        <div className=" text-2xl">
                            Support Level 2 Challenge 2
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}


