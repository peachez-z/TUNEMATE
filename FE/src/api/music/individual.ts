import { NewPlayList, PlayList, TotalPlayList } from "@/types/playList";
import { AddTrack, ChangeTrack, DeleteTrack } from "@/types/spotify";
import { UserInfo } from "@/types/user";
import { api, spotifyApi } from "..";

const INDIVIDUAL_PLAYLISTS_URL = "music-service/individual/playlists";

// 개인 플레이리스트 생성
const createIndividualPlayList = async (newPlayList: NewPlayList) => {
  await api.post<void>(INDIVIDUAL_PLAYLISTS_URL, newPlayList);
};

// 개인 대표 플레이리스트 조회
const getIndividualPlayListRepresentative = async (): Promise<PlayList | null> => {
  try{
    const response = await api.get<PlayList | null>(
      `${INDIVIDUAL_PLAYLISTS_URL}-representative`
    );
    if (response) {
    return response.data;
    } else {
    return null;
    }
  } catch (err) {
    throw err;
  }
};

// 개인 플레이리스트 목록조회
const getIndividualPlayLists = async (
  userId: UserInfo["userId"]
): Promise<TotalPlayList> => {
  const response = await spotifyApi.get(`users/${userId}/playlists`);
  return response.data.items;
};

// 개인 대표 플레이리스트 트랙 추가
const createIndividualPlayListTrack = async ({
  playlistId,
  uris,
  position,
}: AddTrack) => {
  await api.post<void>(`${INDIVIDUAL_PLAYLISTS_URL}/${playlistId}/tracks`, {
    uris,
    position,
  });
};

// 개인 대표 플레이리스트 트랙 삭제
const deleteIndividualPlayListTrack = async ({
  playlistId,
  uri,
  positions,
}: DeleteTrack) => {
  await api.delete<void>(`${INDIVIDUAL_PLAYLISTS_URL}/${playlistId}/tracks`, {
    data: { tracks: [{ uri, positions }] },
  });
};

// 개인 플레이리스트 트랙 순서 변경
const updateIndividualPlayListTrack = async ({
  playlistId,
  changeTrackIndex,
}: ChangeTrack) => {
  await api.put<void>(
    `${INDIVIDUAL_PLAYLISTS_URL}/${playlistId}/tracks`,
    changeTrackIndex
  );
};

// 대표 플레이리스트 설정
const updateIndividualPlayList = async (playlistId: PlayList["id"]) => {
  await api.put<void>(INDIVIDUAL_PLAYLISTS_URL, { playlistId });
};

// 노래 재생 카운트
const addIndividualMusicCount = async () => {
  await api.post<void>(`music/individual/count`);
};

export {
  createIndividualPlayList,
  getIndividualPlayListRepresentative,
  getIndividualPlayLists,
  createIndividualPlayListTrack,
  deleteIndividualPlayListTrack,
  updateIndividualPlayListTrack,
  updateIndividualPlayList,
  addIndividualMusicCount,
};
