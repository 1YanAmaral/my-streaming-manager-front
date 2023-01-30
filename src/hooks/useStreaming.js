import useAsync from "./useAsync";
//import useToken from '../useToken';

import * as streamingApi from "../services/streamingApi";

export default function useStreaming() {
  //const token = useToken();

  const {
    data: streaming,
    loading: streamingLoading,
    error: streamingError,
    act: getStreaming,
  } = useAsync(() => streamingApi.getStreamings());

  return { streaming, streamingLoading, streamingError, getStreaming };
}
