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

 {destinazione:"Mercurio", appartenenza:"Sistema Solare", durata:"7 mesi", partenza:"Terra (Kennedy Space Center (KSC) - Situato a Cape Canaveral, in Florida)", datapartenza: new Date(2024, 5, 1), dataarrivo: new Date(2025, 0, 1), costo:"140000", immagine:"https://p.turbosquid.com/ts-thumb/Qg/azr9hO/YH7l1ZdC/2ks/jpg/1446126513/600x600/fit_q87/d8ff14abe0b4057532fb269f00154659ad31ce6f/2ks.jpg", distanza:"0,39 UA"},

 {destinazione:"Venere", appartenenza:"Sistema Solare", durata:"5 mesi", partenza:"Terra (Kennedy Space Center (KSC) - Situato a Cape Canaveral, in Florida)", datapartenza: new Date(2024, 5, 10), dataarrivo: new Date(2024, 10, 10), costo:"170000", immagine:"https://www.nationalgeographic.it/upload/ngi-hero/pia00271_detail.jpg", distanza:"0,72 UA"},

 {destinazione:"Marte", appartenenza:"Sistema Solare", durata:"9 mesi", partenza:"Terra (Kennedy Space Center (KSC) - Situato a Cape Canaveral, in Florida)", datapartenza: new Date(2024, 5, 15), dataarrivo: new Date(2024, 2, 15), costo:"155000", immagine:"https://www.nationalgeographic.it/upload/ngi-hero/mars-globe-valles-marineris-enhanced.jpg", distanza:"1,52 UA"},

 {destinazione:"Saturno", appartenenza:"Sistema Solare", durata:"1 anno e mezzo", partenza:"Terra (Kennedy Space Center (KSC) - Situato a Cape Canaveral, in Florida)", datapartenza: new Date(2024, 5, 25), dataarrivo: new Date(2025, 11, 25), costo:"120000", immagine:"https://www.xtrafondos.com/wallpapers/vertical/saturno-en-la-oscuridad-9352.jpg", distanza:"9,58 UA"},

 {destinazione:"Giove", appartenenza:"Sistema Solare", durata:"2 anni e mezzo", partenza:"Terra (Kennedy Space Center (KSC) - Situato a Cape Canaveral, in Florida)", datapartenza: new Date(2024, 5, 17), dataarrivo: new Date(2026, 11, 17), costo:"133000", immagine:"https://tech.everyeye.it/public/immagini/23032019/nasa_notizia.jpg", distanza:"5,20 UA"},

]

}
