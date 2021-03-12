import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nativeAudio: NativeAudio) { 
    this.nativeAudio.preloadSimple('audioId', 'assets/audio/file.mp3');
  }

  // Reproducir Audio
  playAudio(){
    this.nativeAudio.play('audioId');
  }

  // Detener Audio
  stopAudio(){
    this.nativeAudio.stop('audioId');
  }
}