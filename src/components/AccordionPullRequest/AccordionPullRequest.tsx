'use client'
import {getPullRequest, userInfo} from "@/fetch/getPullRequest/getPullRequest";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {PullRequest} from "@/components/pull-request";
import {useQuery} from "react-query";
import {Title} from "@/components/Title/Index";



export default function AccordionPullRequest({val}:{val:string}) {
    const {isLoading, isError, data, error} = useQuery(val, () => getPullRequest(val))
    console.log(data)
    return(
        <>
            {data && (<Accordion type="single" collapsible className="w-full">
                <AccordionItem value={val}>
                    <AccordionTrigger>
                        <Title val={val}/>
                    </AccordionTrigger>
                    {data?.map((value: userInfo) => (
                        <AccordionContent key={value.id}>
                          <PullRequest pullRInfo={value} />
                        </AccordionContent>))}
                </AccordionItem>
            </Accordion>)}
        </>
    )
}
