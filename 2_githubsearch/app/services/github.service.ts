import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export /**
 * GitHubService
 */
    class GitHubService {
    private userName: string;
    private clientId = 'd64f8e533e519b296db5';
    private clientSecret = 'd26e1f0cf5cc76f3a24c18dd862950e230d3696d';

    constructor(private _http: Http) {
        console.log('Github service ready.');
        this.userName = 'chan4lk';
    }

    getUser() {
        return this._http.get(`http://api.github.com/users/${this.userName}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
            .map(res => res.json());
    }

    getRepos() {
        return (
        this._http.get(`http://api.github.com/users/${this.userName}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
            .map(res => res.json())
        );
    }

    updateUser(user: string) {
        this.userName = user;
    }
}
