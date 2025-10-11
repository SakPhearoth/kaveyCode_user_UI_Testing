"use client";
import { ApiResponseWithPagination } from "@/types/apiResponse";
import { VideoResponse } from "@/types/VideoType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["videoApi"],

  endpoints: (builder) => ({
    getAllVideos: builder.query<ApiResponseWithPagination<VideoResponse[]>, {pageNum:number, title:string, direction:string, sortBy:string}>({
      query: ({pageNum, title, direction, sortBy}) => `/videos?pageNum=${pageNum}&pageSize=${12}&title=${title}&direction=${direction}&sortBy=${sortBy}`,
      providesTags: ["videoApi"],
    }),
  }),
});

export const {
  useGetAllVideosQuery
} = videoApi;
