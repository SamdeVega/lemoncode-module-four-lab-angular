import { Injectable } from '@angular/core';
import landscapes from '../../assets/landscapes.json';

export interface Picture {
  id: number,
  src: string,
  title: string,
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private pictures: Picture[]
  private current!: Picture

  constructor() {
    this.pictures = landscapes
    this.current = landscapes[0]
  }

  list(): Picture[] {
    return [...this.pictures]
  }

  getCurrentPicture(): Picture {
    return {...this.current}
  }

  setCurrentPicture(index: number): void {
    this.current = this.pictures[index]
  }
}
