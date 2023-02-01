import useAsync from "./useAsync";

import * as streamingApi from "../services/streamingApi";

export default function useStreaming() {
  const {
    data: streaming,
    loading: streamingLoading,
    error: streamingError,
    act: getStreaming,
  } = useAsync(() => streamingApi.getStreamings());

  return { streaming, streamingLoading, streamingError, getStreaming };
}
