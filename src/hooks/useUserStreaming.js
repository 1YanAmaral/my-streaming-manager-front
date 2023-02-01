import useAsync from "./useAsync";

import * as streamingApi from "../services/streamingApi";

export default function useUserStreaming() {
  const {
    loading: userStreamingLoading,
    error: userStreamingError,
    act: postUserStreaming,
  } = useAsync((selected) => streamingApi.postUserStreamings(selected), false);

  return { userStreamingLoading, userStreamingError, postUserStreaming };
}
