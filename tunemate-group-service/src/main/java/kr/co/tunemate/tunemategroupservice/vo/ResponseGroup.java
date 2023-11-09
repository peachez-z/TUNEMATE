package kr.co.tunemate.tunemategroupservice.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@Schema(description = "공고 응답 VO")
public class ResponseGroup {
    private String groupId;
    private String hostId;
    private String hostName;
    private String title;
    private Integer capacity;
    private Integer participantsCnt;
    private String concertId;
    private LocalDateTime startDateTime;
    private LocalDateTime deadline;
    private String content;
    private Boolean closedByHost;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
}