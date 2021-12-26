import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import particles from './particles';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private httpClient: HttpClient, public router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart)
      )
      .subscribe(event => {
          if (event instanceof NavigationStart) {
            this.updateGlow(router.url, event.url);
          }
        }
      );
  }

  ngOnInit(): void {
    particlesJS('particles-js', particles.conf);
    this.updateMCPlayers('mc.nifheim.net', document.getElementById('euphoria-mc'));
    this.updateDiscordUsers('893360896821313536', document.getElementById('euphoria-discord'));
  }

  ngAfterViewInit(): void {
    this.updateGlow(null, '');
  }

  updateMCPlayers(ip: string, element: HTMLElement | null): void {
    if (element == null) {
      return;
    }
    this.httpClient.get<{ players: { online: number } }>(`https://mc-api.net/v3/server/ping/${ip}`)
      .subscribe(res => element.innerHTML = String(res.players.online));
  }

  updateDiscordUsers(id: string, element: HTMLElement | null): void {
    if (element == null) {
      return;
    }
    this.httpClient.get<{ presence_count: number }>(`https://discordapp.com/api/guilds/${id}/embed.json`)
      .subscribe(res => element.innerHTML = String(res.presence_count));
  }

  updateGlow(current: string | null, next: string): void {
    if (current !== next && current !== null) {
      current = current.trim().split('/')[1];
      const currentElement = this.getElement(current);
      if (currentElement !== null) {
        currentElement.className = 'nav-link';
      }
    }
    next = next.trim().split('/')[1];
    const nextElement = this.getElement(next);
    if (nextElement !== null) {
      nextElement.className = 'nav-glow';
    }
  }

  getElement(name: string): HTMLElement | null {
    let element: HTMLElement | null;
    switch (name) {
      case 'map':
        element = document.getElementById('map');
        break;
      case 'punishments':
        element = document.getElementById('punishments');
        break;
      case '':
      default:
        element = document.getElementById('home');
        break;
    }
    return element;
  }
}
