import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

viaggi=[

 {destinazione:"Mercurio", appartenenza:"Sistema Solare", durata:"", partenza:"", partenza_e_arrivo:"", costo:"", immagine:"https://www.focus.it/site_stored/imgs/0005/005/me4.1020x680.jpg"},

 {destinazione:"Venere", appartenenza:"Sistema Solare", durata:"", partenza:"", partenza_e_arrivo:"", costo:"", immagine:"https://www.nationalgeographic.it/upload/ngi-hero/pia00271_detail.jpg"},

 {destinazione:"Marte", appartenenza:"Sistema Solare", durata:"", partenza:"", partenza_e_arrivo:"", costo:"", immagine:"https://www.nationalgeographic.it/upload/ngi-hero/mars-globe-valles-marineris-enhanced.jpg"},

 {destinazione:"Saturno", appartenenza:"Sistema Solare", durata:"", partenza:"", partenza_e_arrivo:"", costo:"", immagine:"https://content.nationalgeographic.com.es/medio/2018/12/20/polo-norte-de-saturno-y-sus-anillos_88724cae_1280x650.jpg"},

 {destinazione:"Giove", appartenenza:"Sistema Solare", durata:"", partenza:"", partenza_e_arrivo:"", costo:"", immagine:"https://staticfanpage.akamaized.net/wp-content/uploads/sites/5/2018/01/giove-cover.jpg"},

]

}
