import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from './Constants';

@Injectable({
  providedIn: 'root'
})
export class ContentModeratorService {

  constructor(public http: HttpClient) {
    console.log("Content Moderator Service.");
  }

  async moderateText(body: string, PII: boolean): Promise<any> {
    try {
      // select the appropriate region for you - API explorer https://southcentralus.dev.cognitive.microsoft.com/docs/services/57cf753a3f9b070c105bd2c1/operations/57cf753a3f9b070868a1f66f/console
      let apiUrl = `https://southcentralus.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen?PII=${PII}&classify=true`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Ocp-Apim-Subscription-Key': Constants.apiKey
        })
      };

      let response = this.http.post(apiUrl, body, httpOptions).subscribe(data => {
        console.log('Content Moderator Response - ', data);
        return data;
      }, error => {
        console.log('Error calling content moderator - ', error);
        throw error;
      });
    }
    catch (error) {
      console.log('Error calling content moderator - ', error);
      throw error;
    }
  }
}
