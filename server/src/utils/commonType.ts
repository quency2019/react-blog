export interface IEveryDay {
    id: string,
    content: string,
    ctime: number,
    utime: number

}

export interface IBlog {
    id: string,
    title: string,
    content: string,
    tags: string,
    views: number,
    ctime: number,
    utime: number
}

export interface IComments {
    id: string,
    blog_id: string,
    parent: number,
    parent_name: string,
    user_name: number,
    comments: string,
    email: string,
    ctime: number,
    utime: number
}

export interface ITags {
    id: string,
    tag: string,
    ctime: number,
    utime: number
}

export interface ISearchByPage {

    page: number,
    pageSize: number
}
export interface ISearchResult<T> {
    data: T[],
    count: number,

}