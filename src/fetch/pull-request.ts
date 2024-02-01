type Pr = { id: any; user: { login: any; }; title: any; };

export const fetchData = (method:string)=> async (val:string) => {
    const res = await fetch(`https://api.github.com/repos/blindma1den/${val}/pulls`,
        {method:method});
    const data = await res.json();
    return data.map((pr: Pr) => ({
        id: pr.id,
        userName: pr.user.login,
        title: pr.title
    }));
};

export const fetDataLike = {
    get:()=>fetchData('GET')
}