import { createPostApi, getAllPostsApi, getPostByPostIDApi } from "./api";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ["getAllPosts"],
    queryFn: getAllPostsApi,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async(postData) => createPostApi(postData),
    onSuccess: () => {
      queryClient.invalidateQueries(["getAllPosts"]);
    },
  });
};

export const useGetPostByPostID = (postID) => {
  return useQuery({
    queryKey: ["getPostByPostID", postID],
    queryFn: () => getPostByPostIDApi(postID),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    enabled: !!postID
  });
};