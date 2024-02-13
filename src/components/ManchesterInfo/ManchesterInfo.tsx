import { useEffect, useState } from "react";
import { getManchesterInfo, ManchesterInfo } from "@/fetch/getMatchInfo/getMatchsInfo";
import { Title } from "@/components/Title/Title";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ManchesterInfo() {
    const test = getManchesterInfo();
    const [manchesterInfo, setManchester] = useState<ManchesterInfo[]>();

    useEffect(() => {
        const getData = async () => {
            return await test;
        }
        getData().then(dataComponent => setManchester(dataComponent))
    }, [])

    return <>
        <h3 className="ps-14  pb-10 font-bold  tracking-tighter text-3xl md:text-4xl">
            Manchester Games
        </h3>
        <div className="grid sm:grid-cols-2 grid-rows-1 mb-10 gap-4 mx-10">
            <Card className={"flex flex-col justify-center items-center"}>
                <CardHeader>
                    <CardContent className={"flex justify-center items-center text-center"}>
                        <div>
                            <CardTitle>{manchesterInfo?.[0].home_team + " vs " + manchesterInfo?.[0].visitor_team}</CardTitle>
                            <CardTitle>{manchesterInfo?.[0].match_result}</CardTitle>
                            <CardDescription>{manchesterInfo?.[0].competition}</CardDescription>
                            <CardDescription>{"Date: " + manchesterInfo?.[0].match_date}</CardDescription>
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
            <Card className={"flex flex-col mb-5 justify-center items-center h-full"}>
                <CardHeader>
                    <CardContent className={"flex justify-center items-center text-center"}>
                        <div>
                            <CardTitle>{manchesterInfo?.[1].home_team + " vs " + manchesterInfo?.[1].visitor_team}</CardTitle>
                            <CardDescription>{manchesterInfo?.[1].competition}</CardDescription>
                            <CardDescription>{"Date: " + manchesterInfo?.[1].match_date}</CardDescription>
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    </>
}