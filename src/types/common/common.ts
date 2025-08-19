import { BaseQueryApi } from "@reduxjs/toolkit/query";

export interface IMeta {
    total: number,
    limit: number,
    page: number,
    totalPages: number
}

export interface IResponse<I> {
    statusCode: number,
    success: boolean,
    message: string,
    data: I,
    meta?: IMeta
}

export type IResponseRedux<I> = IResponse<I> & BaseQueryApi;