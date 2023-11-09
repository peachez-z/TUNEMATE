package kr.co.tunemate.tunematemeetingservice.service;

import kr.co.tunemate.tunematemeetingservice.domain.Meeting;
import kr.co.tunemate.tunematemeetingservice.dto.MeetingResponseDto;
import kr.co.tunemate.tunematemeetingservice.dto.ResponseMeetingList;

import java.util.List;
import java.util.Optional;

public interface MeetingService {

    void createMeeting(MeetingResponseDto meetingResponseDto);

    List<ResponseMeetingList> getMeetings(long relationId);

    void deleteMeeting(long meetingId);

    Optional<Meeting> findMeeting(long meetingId);
}
