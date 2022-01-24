import { getAuthToken } from '../utils/LocalStorage'

const API = `http://localhost:8081/`;

export function fetchMeasurements(sensorId) {
    const requestOptions = {
        headers: { 'Authorization': getAuthToken() }
    }

    return fetch(API + `data?serial=${sensorId}&day=0`, requestOptions).then(response => response.json())
}

export function fetchSensors() {
    const requestOptions = {
        headers: { 'Authorization': getAuthToken() }
    }

    return fetch(API + `sensor`, requestOptions).then(response => response.json())
}

export function updateSensor(data) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': getAuthToken() 
        },
        body: JSON.stringify(data)
    }

    return fetch(API + `sensor`, requestOptions).then(response => response.json())
}
