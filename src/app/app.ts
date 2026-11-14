import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionHeader } from './shared/components/section-header/section-header';
import { Header } from './shared/components/header/header';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Blogs } from './features/blogs/blogs';
import { Experience } from './features/experience/experience';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Contacts } from './features/contacts/contacts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, About, Skills, Blogs, Experience, Projects, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-ui');
}
