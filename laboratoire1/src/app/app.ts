import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { towel } from './models/towel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('laboratoire1');
  MyWisdom : string = "Je m'appelle Sofiane";
  n = 8;
 serviette : towel = new towel("brun", 1.8 , "téléchargement.jpg", true)
 myhate : string[] = ["chien", "chats", "oiseau"];
  Bruh() : string {

    return "Bruh."
  }
  equalToN(n : number) : string{
    if(this.n == n){
      return "Identique"
    }
    else{
      return "Différent"
    }
  }

  

}



  
 


