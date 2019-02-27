import { Component } from '@angular/core';
import { ContentModeratorService } from '../services/content-moderator.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  body: string;

  constructor (public contentModeratorService: ContentModeratorService) {

  }

  async moderateContent(): Promise<any> {
    try {
      await this.contentModeratorService.moderateText(this.body, false);
    }
    catch (error){
      console.log('Error - ', error);
    }
  }
}
