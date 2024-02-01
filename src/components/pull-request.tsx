
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import Link from "next/link";

type Created = { title: string, user: string };

export function PullRequest({title, user}:Created) {
  return (
      <section className="container mx-auto p-2">
        <div className="grid gap-6">
          <Card>
            <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-4 space-y-0">
              <div className="space-y-1">
                <CardTitle>Pull Request: {title}</CardTitle>
                <CardDescription>Author: {user}</CardDescription>
                <CardDescription>Status: Open</CardDescription>
              </div>
              <Link href={"https://github.com/blindma1den/"} className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-400">
                view
              </Link>
            </CardHeader>
          </Card>
        </div>
      </section>
  )
}






