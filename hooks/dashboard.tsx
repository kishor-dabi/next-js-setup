import { HttpRequest } from "@/utility/_http";
import { useQuery, UseQueryOptions, useMutation, UseQueryResult } from 'react-query'
import { useState } from "react";
import { LIST_API_PATH } from "@/constants/api-constant";


export const useDashboardList = (searchOptions:any, options?: UseQueryOptions) => {
  
    const method = 'GET'

    return HttpRequest({
        url: LIST_API_PATH,
        params: searchOptions,
        method
    }).then((data: any)=>{
        // console.log(data.data);
        return data.data
    }).catch((err:any)=>{
        console.log(err);
        return err
    })
}