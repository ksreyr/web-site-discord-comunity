'use client'
import { getPullRequest, userInfo } from "@/fetch/getPullRequest/getPullRequest";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PullRequest } from "@/components/pull-request";
import { useQuery } from "react-query";
import { Title } from "@/components/Title/Title";



export default function AccordionPullRequest({ val }: { val: string }) {
    const { isLoading, isError, data, error } = useQuery(val, () => getPullRequest(val))
    console.log(data)
    return (
        <>
            {data && (<Accordion type="single" collapsible className="w-full">
                <AccordionItem value={val}>
                    <AccordionTrigger>
                        <Title val={val} />
                    </AccordionTrigger>
                    <AccordionContent className="grid sm:grid-cols-2 gap-4">
                        {data?.map((value: userInfo) => (
                            <PullRequest key={value.id} pullRInfo={value} />
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>)}
        </>
    )
}
