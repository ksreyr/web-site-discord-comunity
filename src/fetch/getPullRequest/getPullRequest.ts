import {fetDataLike} from "@/fetch/pull-request";

type Pr = { id: any; user: { login: any; avatar_url: string; }; title: any; };
const url = "https://api.github.com/repos/blindma1den/"

export type userInfo = {
    id: any;
    userName: any;
    title: any;
    avatarUrl: string;
}

export const getPullRequest = (val: string) => fetDataLike.get(`${url}${val}/pulls`)
    .then(res => res.json())
    .then(data => data.map((pr: Pr) => (<userInfo>{
            id: pr.id,
            userName: pr.user.login,
            title: pr.title,
            avatarUrl: pr.user.avatar_url
        }))
    )
