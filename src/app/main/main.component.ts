import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  private content: string;

    public constructor() {
        this.content = "La esclerosis lateral amiotrofica (ELA) es una enfermedad neurodegenerativa progresiva que afecta a las neuronas motoras del cerebro y la médula espinal, que dejan de funcionar y, por lo tanto, de enviar mensajes a los músculos, ocasionando debilitamiento muscular e incapacidad de movimiento";
    }

    public highlight() {
        return this.content.replace(new RegExp('\\b(\\w+)\\b', "gi"), match => {
            return '<span >' + match + '</span>';
        });   
    }

    fireEvent(e) {
      if(e.toElement.childNodes[0].data) {
        console.log('salida', e.toElement.childNodes[0].data);
        var msg = new SpeechSynthesisUtterance(e.toElement.childNodes[0].data);
        msg.rate = 0.7;
        msg.pitch = 1;
        window.speechSynthesis.speak(msg);
      }
    }

}
