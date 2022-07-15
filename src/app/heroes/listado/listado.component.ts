import { NgForOf } from '@angular/common';
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string []= ['Spiderman', 'Ironman', 'Hulk','Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || ' ';
  }

}
