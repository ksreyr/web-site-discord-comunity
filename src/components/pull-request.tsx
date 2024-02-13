import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card"
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {userInfo} from "@/fetch/getPullRequest/getPullRequest";

type Created = { pullRInfo: userInfo };

export function PullRequest({pullRInfo}:Created) {
  return (
      <section>
          <Card>
              <CardContent>
                  <div className="flex flex-col sm:flex-row text-center sm:text-left justify-center items-center gap-1 sm:gap-6">
                      <Avatar className={"md:h-40 md:w-40  h-20 w-20 m-0 md:m-2"}>
                          <AvatarImage src={pullRInfo.avatarUrl}/>
                          <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 max-w-60">
                          <CardTitle className="text-xl sm:text-2xl">Author: {pullRInfo.userName}</CardTitle>
                          <CardDescription>{pullRInfo.title}</CardDescription>
                          <CardDescription>Status: Open</CardDescription>
                          <div className={"w-full"}>
                          <Link href={"https://github.com/blindma1den/"}
                                className="inline-flex w-1/2 h-12 items-center justify-center rounded-md bg-gray-800 px-10 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                              view
                          </Link>
                          </div>
                      </div>
                  </div>
              </CardContent>
          </Card>
      </section>
  )
}


