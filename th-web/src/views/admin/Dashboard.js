import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import { SensorGraph, SensorGraphDouble } from "features/customComponents/SensorGraph";

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <SensorGraph place={"Darbo kambarys"} data={"temperature"} desc={"Temperature"} unit={"°C"} color={"#82ca9d"} sensorId={"1234567891"} />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                <SensorGraphDouble place={"Darbo kambarys"} sensorId={"1234567893"} data1={"temperature"} desc1={"Temperature"} unit1={"°C"} color1={"#82ca9d"}
                                                                        data2={"humidity"} desc2={"Humidity"} unit2={"%"} color2={"#8884d8"}/>
                </div>
            </div>
        </>
    );
}
