import { getAllPostsApi } from "./api";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ["getAllPosts"],
    queryFn: getAllPostsApi,
    staleTime: 5 * 60 * 1000,
    retry: 1, 
  });
};
