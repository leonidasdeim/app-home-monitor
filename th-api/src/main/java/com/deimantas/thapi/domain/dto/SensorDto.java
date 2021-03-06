package com.deimantas.thapi.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SensorDto {
	private String serial;
	private String name;
	private Long areaId;
}
