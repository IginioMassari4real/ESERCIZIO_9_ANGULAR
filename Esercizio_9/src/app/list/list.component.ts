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

 {destinazione:"Mercurio", appartenenza:"Sistema Solare", durata:"7 mesi", partenza:"Terra (Kennedy Space Center (KSC) - Situato a Cape Canaveral, in Florida)", datapartenza: new Date(2024, 5, 1), dataarrivo: new Date(2025, 0, 1), costo:"140000", immagine:"https://www.focus.it/site_stored/imgs/0005/005/me4.1020x680.jpg"},

 {destinazione:"Venere", appartenenza:"Sistema Solare", durata:"5 mesi", partenza:"Terra (Kennedy Space Center (KSC) - Situato a Cape Canaveral, in Florida)", datapartenza: new Date(2024, 5, 10), dataarrivo: new Date(2024, 10, 10), costo:"170000", immagine:"https://www.nationalgeographic.it/upload/ngi-hero/pia00271_detail.jpg"},

 {destinazione:"Marte", appartenenza:"Sistema Solare", durata:"9 mesi", partenza:"Terra (Kennedy Space Center (KSC) - Situato a Cape Canaveral, in Florida)", datapartenza: new Date(2024, 5, 15), dataarrivo: new Date(2024, 2, 15), costo:"155000", immagine:"https://www.nationalgeographic.it/upload/ngi-hero/mars-globe-valles-marineris-enhanced.jpg"},

 {destinazione:"Saturno", appartenenza:"Sistema Solare", durata:"1 anno e mezzo", partenza:"Terra (Kennedy Space Center (KSC) - Situato a Cape Canaveral, in Florida)", datapartenza: new Date(2024, 5, 25), dataarrivo: new Date(2025, 11, 25), costo:"120000", immagine:"https://content.nationalgeographic.com.es/medio/2018/12/20/polo-norte-de-saturno-y-sus-anillos_88724cae_1280x650.jpg"},

 {destinazione:"Giove", appartenenza:"Sistema Solare", durata:"2 anni e mezzo", partenza:"Terra (Kennedy Space Center (KSC) - Situato a Cape Canaveral, in Florida)", datapartenza: new Date(2024, 5, 17), dataarrivo: new Date(2026, 11, 17), costo:"133000", immagine:"https://staticfanpage.akamaized.net/wp-content/uploads/sites/5/2018/01/giove-cover.jpg"},

]

}
