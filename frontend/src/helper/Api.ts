import axios from 'axios';
import { url } from 'inspector';

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
    };

    postProject = (data: any, image: any, onSuccess: Function, onFailed: Function) => {
      const form_data = new FormData();
      form_data.append('featured_image', image);
      form_data.append('title', data.title);
      form_data.append('descriptions', data.descriptions);
      console.log(form_data);
      const headers = {
        'X-CSRF-TOKEN': this.getCookie('csrftoken'),
        'content-type': 'multipart/form-data'
      };

      axios.post(`${this.apiUrl}/create-project/`, form_data, {
        headers
      })
        .then((response: any) => {
          console.log('response', response);
          onSuccess();
        })
        .catch((e) => console.log(e));
    };

    getCookie = (name:string) : string => {
      let cookieValue : string = '';
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (`${name}=`)) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    };
}
