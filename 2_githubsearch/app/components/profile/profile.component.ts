import { Component } from '@angular/core';
import { GitHubService } from '../../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    user: any;
    repos: Array<any>;
    private userName: string;

    constructor(private _githubService: GitHubService) {
        this.render();
    }

    searchUser() {
        this._githubService.updateUser(this.userName);
        this.render();
    }

    render() {
        this._githubService.getUser().subscribe((user) => {
            this.user = user;
        });

        this._githubService.getRepos().subscribe((repos) => {
            this.repos = repos;
        });
    }
}
