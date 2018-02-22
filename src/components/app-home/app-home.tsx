import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Voter Registrationator 3000 - because registering to vote should be easy.
        </p>

        <stencil-route-link url='/profile/testing'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
