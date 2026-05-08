import * as React from "react";
import { ConsistentHashingState, getHashRange, MAX_HASH } from "./ConsistentHashing";
import { format } from "./Shared";

export default function ServerStats(props: {
  server: string;
  state: ConsistentHashingState;
}) {
  const { server, state } = props;
  const keyCount = state.serverKeyMap[server]?.length || 0;

  return (
    <div style={{ textAlign: "center" }}>
      server <strong>{server}</strong>
      <br />
      <br />
      <br />
      <strong>{keyCount}</strong> key{keyCount !== 1 && "s"}
    </div>
  );
}
