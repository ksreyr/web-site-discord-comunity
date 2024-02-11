import {fetDataLike} from "@/fetch/pull-request";

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQl2Hfb-GC2nN291uFafLHF07dhOq3zt-54gwZRUbX8VJroX1E7OpoLWfE_NoBVBFPsnftkW0I582LW/pub?gid=1849804382&single=true&output=csv"


export type ManchesterInfo = {
    match_result: any;
    visitor_team: any;
    competition: any;
    home_team: any;
    match_date: any
};

type GetManchesterInfo = () => Promise<ManchesterInfo[]>;

export const getManchesterInfo: GetManchesterInfo = () => fetDataLike.get(`${url}`).then(res => res.text())
    .then(value => value.split('\n').slice(1).map((row:any)=>{
        const [match_date,home_team,match_result,visitor_team,competition] = row.split(",");
        return{match_date,home_team,match_result,visitor_team,competition}
    }))
