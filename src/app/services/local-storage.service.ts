import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addLocalStorage(key: string, value: string)
  {
    localStorage.setItem(key, value);
  }

  deleteLocalStorage(key: string)
  {
    localStorage.removeItem(key)
  }

  getFromLocalStorage(key: string)
  {
    return localStorage.getItem(key)?.toString();
  }
}
