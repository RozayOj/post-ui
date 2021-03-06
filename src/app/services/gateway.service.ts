import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3015/');
    const status = xhr.status;
    if (300 > status && status >= 200) {
      this.postService = 'http://localhost:3015/';
      this.authorizationService = 'http://localhost:3015/';
      this.accountService = 'http://localhost:3015/';
    }
  }

  // TODO: In future, here will be only one a service for gateway to Reckue API.
  // private static gatewayService: string        = "https://api.reckue.com"

  private postService           = 'http://post-reckue.apps.us-east-1.starter.openshift-online.com';
  private authorizationService  = 'http://authorization-reckue.apps.us-east-1.starter.openshift-online.com';
  private accountService        = 'http://account-reckue.apps.us-east-1.starter.openshift-online.com';

  public getPostService(): string {
    return this.postService;
  }

  // public getAllPosts(): string {
  //   return this.postService.concat("/posts");
  // }

  public getAllPosts(): string {
    return this.postService.concat('/posts');
  }

  public getPosts(limit: number, offset: number, sort: string, desc: string): string {
    let url = this.postService.concat('/posts');
    url += '?limit=' + limit + '&offset=' + offset;
    sort && (url += '&sort=' + sort);
    desc && (url += '&desc=' + desc);
    return url;
  }

  public getPostById(id: string): string {
    return this.postService.concat('/posts/' + id);
  }

  public getAuthorizationService(): string {
    return this.authorizationService;
  }

  public getAccountService(): string {
    return this.accountService;
  }
}
