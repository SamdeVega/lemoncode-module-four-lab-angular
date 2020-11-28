import { Component, Input, OnInit } from '@angular/core';
import { GalleryService, Picture } from 'src/app/service/gallery.service';

enum Action {
  Next,
  Previous,
}

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {
  @Input() galleryService!: GalleryService
  thumbnailsStart: boolean = true
  thumbnailsEnd: boolean = false
  onMove: boolean = false

  constructor() { }

  ngOnInit(): void { }

  backward(): void {
    this.thumbnailsHandler(Action.Previous)
  }

  forward(): void {
    this.thumbnailsHandler(Action.Next)    
  }

  thumbnailsHandler(action: Action): void {
    const thumbnails = document.querySelector('.thumbnails')
    const thumbnail = thumbnails?.querySelector('li img')
    if (thumbnails && thumbnail) {
      const maxScroll = (this.galleryService.list().length - 3) * thumbnail.clientWidth
      let scroll = thumbnails.scrollLeft
      if (action === Action.Previous) {
        scroll -= thumbnail.clientWidth
      } else {
        scroll += thumbnail.clientWidth
      }
      if (scroll <= 0) {
        scroll = 0
        this.thumbnailsStart = true
      } else this.thumbnailsStart = false
      if (scroll >= maxScroll) {
        scroll == maxScroll
        this.thumbnailsEnd = true
      } else this.thumbnailsEnd = false
      thumbnails.scrollTo({
        behavior: 'smooth',
        left: scroll,
        top: 0,
      })
    }
  } 

  list(): Picture[] {
    return this.galleryService.list()
  }

  currentPicture(): Picture {
    return this.galleryService.getCurrentPicture()
  }

  setCurrentPicture(index: number): void {
    this.galleryService.setCurrentPicture(index)
  }
}
