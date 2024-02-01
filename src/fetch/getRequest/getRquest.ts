import {fetchData, fetDataLike} from "@/fetch/pull-request";

export const getPullRequest = (val:string)=>{
    return fetDataLike.get()(val)
}