// TrackSearchResult.js
import Link from "next/link";
import { useRouter } from "next/router";

export default function TrackSearchResult({ track, chooseTrack }) {
  const router = useRouter();

  function handlePlay() {
    chooseTrack(track);
    // router.push(`/album?albumUrl=${encodeURIComponent(track.albumUrl)}`);
  }

  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        margin: 10,
        border: "1px solid white",
        backgroundColor: "#f7f4ff",
        height: "64px",
      }}
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        style={{ height: "64px", width: "64px" }}
        alt=""
      />
      <div
        style={{
          marginLeft: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: 16 }}>{track.title}</div>
        <div className="text-muted" style={{ fontSize: 12 }}>
          {track.artist}
        </div>
      </div>
    </div>
  );
}