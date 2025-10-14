"use client";
import { ApiResponse, ApiResponseWithPagination } from "@/types/apiResponse";
import { CategoryResponse } from "@/types/categoryType";
import { CourseResponse } from "@/types/courseType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["courseApi"],

  endpoints: (builder) => ({
    getAllCourses: builder.query<ApiResponseWithPagination<CourseResponse[]>, {pageNum:number, title:string, direction:string, sortBy:string, categoryName:string}>({
      query: ({pageNum, title, direction, sortBy, categoryName}) => `/tutorials?pageNum=${pageNum}&pageSize=${12}&title=${title}&direction=${direction}&sortBy=${sortBy}&categoryName=${categoryName}`,
      providesTags: ["courseApi"],
    }),

    getAllCategories: builder.query<ApiResponse<CategoryResponse[]>, void>({
      query: () => `/categories`,
      providesTags: ["courseApi"],
    }),
  }),
});

export const {
  useGetAllCoursesQuery,
  useGetAllCategoriesQuery
} = courseApi;
