
export const fetchData = (method:string) =>
    async (val:string) =>
{
    return await fetch(val, {method:method});

}

export const fetDataLike = {
    get : (val:string) => fetchData('GET')(val),
}