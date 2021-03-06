package com.deimantas.thapi.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MeasurementsResponseDto {
	private Float temperature;
	private Float humidity;
	private Long time;
}
