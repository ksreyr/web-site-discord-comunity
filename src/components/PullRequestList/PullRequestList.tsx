import {useEffect, useState} from "react";
import {getPullRequest} from "@/fetch/getRequest/getRquest";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {PullRequest} from "@/components/pull-request";
type initialState = {id:string, userName: string, title: string};

export default function PullRequestList({val}:{val:string}) {
    const [pullRequestData, setPullRequestData] = useState<initialState[]>();
    useEffect(() => {
        const pullData = async () =>{
            setPullRequestData(
                await getPullRequest(val).catch(reason => console.log(reason)))
        }
        pullData()
    }, []);
    return(
        <Accordion type="single" collapsible className={"w-full"}>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <h3 className="ps-14 py-2 text-2xl font-bold tracking-tighter sm:text-2xl">
                        {val}
                    </h3>
                </AccordionTrigger>
                {pullRequestData?.map(value => (<AccordionContent key={value.id}>
                    <PullRequest user={value.userName} title={value.title}/>
                </AccordionContent>))}
            </AccordionItem>
        </Accordion>
    )
}