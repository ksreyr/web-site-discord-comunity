import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card"
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {userInfo} from "@/fetch/getPullRequest/getPullRequest";

type Created = { pullRInfo: userInfo };

export function PullRequest({pullRInfo}:Created) {
  return (
      <section>
          <div>
          <Card>
              <CardContent>
                  <div className="flex justify-start items-center space-x-4">
                      <Avatar className={"h-40 w-40 m-2"}>
                          <AvatarImage src={pullRInfo.avatarUrl}/>
                          <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 w-full">
                          <CardTitle>Author: {pullRInfo.userName}</CardTitle>
                          <CardDescription>{pullRInfo.title}</CardDescription>

                          <CardDescription>Status: Open</CardDescription>
                          <div className={"w-full"}>
                          <Link href={"https://github.com/blindma1den/"}
                                className="inline-flex w-full h-20 items-center justify-center rounded-md bg-gray-800 px-10 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                              view
                          </Link>
                          </div>
                      </div>
                  </div>
              </CardContent>
          </Card>
        </div>
      </section>
  )
}

/***
 <div className="flex justify-between space-x-4">

 <div className="space-y-1">
 <h4 className="text-sm font-semibold">@nextjs</h4>
 <p className="text-sm">
 The React Framework – created and maintained by @vercel.
 </p>
 <div className="flex items-center pt-2">
 <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
 <span className="text-xs text-muted-foreground">
 Joined December 2021
 </span>
 </div>
 </div>
 </div>
 **/




