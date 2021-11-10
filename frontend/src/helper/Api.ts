import axios from 'axios';

export class Api {
    apiUrl = 'http://localhost:8000/api';

    getProjects = (onSuccess: Function, onFailed: Function) => {
      axios.get(`${this.apiUrl}/projects`)
        .then((response: any) => response.data)
        .then((data) => onSuccess(data))
        .catch((e) => onFailed(e));
    };

    getTags = (onSuccess: Function, onFailed: Function) => {
      axios.get(`${this.apiUrl}/tags`)
        .then((response: any) => response.data)
        .then((data) => onSuccess(data))
        .catch((e) => onFailed(e));
    }
}
