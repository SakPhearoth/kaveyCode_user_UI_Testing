"use client";
import { ApiResponseWithPagination } from "@/src/types/apiResponse";
import { VideoResponse } from "@/src/types/VideoType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["videoApi"],

  endpoints: (builder) => ({
    getAllVideos: builder.query<ApiResponseWithPagination<VideoResponse[]>, {pageNum:number, title?:string}>({
      query: ({pageNum, title}) => `/videos?pageNum=${pageNum}&pageSize=${12}&title=${title}`,
      providesTags: ["videoApi"],
    }),
  }),
});

export const {
  useGetAllVideosQuery
} = videoApi;
