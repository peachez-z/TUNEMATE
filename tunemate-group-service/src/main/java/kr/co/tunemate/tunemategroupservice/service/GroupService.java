package kr.co.tunemate.tunemategroupservice.service;

import kr.co.tunemate.tunemategroupservice.dto.GroupDto;
import kr.co.tunemate.tunemategroupservice.dto.GroupSearchDto;

import java.util.List;

public interface GroupService {
    GroupDto saveGroup(GroupDto groupDto);
    GroupDto getGroupByGroupId(String groupId);
    void closeGroup(String userId, String groupId);
    List<GroupDto> searchAll(GroupSearchDto groupSearchDto);
}