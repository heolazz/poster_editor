import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterData } from '../models';

@Component({
  selector: 'app-poster-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="poster-canvas" class="relative w-[500px] h-[625px] bg-[#007bff] overflow-hidden text-white font-sans flex flex-col shadow-inner select-none">
      
      <div class="absolute top-0 left-0 right-0 h-[50px] z-20 flex justify-center">
        <div class="bg-white rounded-b-[20px] px-4 py-1.5 h-[50px] flex items-center justify-center gap-3 shadow-lg w-fit min-w-[60%] max-w-[85%] mx-auto">
           <img src="/logo/Danantara%20Indonesia.png" class="h-6 object-contain">
           <div class="h-5 w-px bg-gray-300"></div>
           <img src="/logo/BRI_Biru.png" class="h-5 object-contain">
           <div class="h-5 w-px bg-gray-300"></div>
           <img src="/logo/RB%20Vertical.png" class="h-7 object-contain">
        </div>
      </div>

      <div class="flex-1 pt-[70px] px-6 relative z-10 flex flex-col">
        
        <div class="text-center mb-4">
          <h1 class="text-3xl font-bold leading-tight uppercase tracking-wide drop-shadow-md whitespace-pre-wrap">{{ data().title }}</h1>
          <p class="text-lg font-medium mt-1 text-blue-100">{{ data().subtitle }}</p>
        </div>

        @if (data().layout === '1-speaker') {
          <div class="flex-1 relative mt-4">
             <div class="absolute -left-8 -translate-y-4 top-0 z-30">
               <div class="border-4 border-white rounded-br-2xl p-3 w-[140px] shadow-sm">
                    <p class="font-bold text-2xl ml-2 leading-none uppercase tracking-wider">{{ data().tagline.split('\\n')[0] }}</p>
                    <p class="text-[12px] font-medium ml-2 leading-none mt-0.5">Untuk Umum</p>
               </div>
             </div>

             <div class="absolute bottom-[60px] left-[-20px] w-[240px] h-[300px] z-20 flex items-end">
                @if (data().speakers[0].photoUrl) {
                   <img 
                      [src]="data().speakers[0].photoUrl" 
                      class="w-full h-full object-cover object-top mask-image-gradient origin-bottom"
                      [style.transform]="'scale(' + data().speakers[0].scale + ')'"
                   >
                }
                <div class="absolute bottom-6 left-6 bg-white text-blue-900 px-4 py-2 rounded-lg shadow-lg border-l-4 border-blue-500 z-10">
                   <h3 class="font-bold text-lg leading-tight">{{ data().speakers[0].name }}</h3>
                   <p class="text-xs text-gray-500 font-medium">{{ data().speakers[0].role }}</p>
                </div>
             </div>

             <div class="absolute right-0 top-[60px] w-[220px]">
                <div class="border-2 border-white rounded-[24px] p-4 text-center backdrop-blur-sm bg-blue-600/30">
                   <div class="flex flex-col items-center justify-center mb-4">
                      <div class="flex items-center justify-center gap-2">
                         <span class="text-5xl font-bold leading-none">{{ data().date.day }}</span>
                         <div class="flex flex-col items-start">
                            <span class="text-sm font-bold tracking-[0.2em] uppercase leading-tight">{{ data().date.month }}</span>
                            <span class="text-[10px] mt-0.5 bg-white/20 px-1 py-0.5 rounded leading-none whitespace-nowrap">{{ data().date.time }}</span>
                         </div>
                      </div>
                   </div>
                   <div class="w-10 h-1 bg-white/50 rounded-full mx-auto mb-4"></div>
                   <div class="flex flex-col items-center text-xs space-y-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <p class="font-bold">{{ data().location.line1 }}</p>
                      <p class="font-bold">{{ data().location.line2 }}</p>
                      <p class="opacity-90 text-[10px] leading-tight px-2">{{ data().location.line3 }}</p>
                   </div>
                </div>
             </div>
          </div>
        }

        @if (data().layout === '2-speakers') {
          <div class="flex-1 flex flex-col relative">
            
            <div class="flex justify-center items-end h-[240px] gap-2 mb-2 relative z-10 px-4">
                <div class="w-1/2 h-full relative group rounded-t-lg overflow-hidden">
                  @if (data().speakers[0].photoUrl) {
                     <img 
                        [src]="data().speakers[0].photoUrl" 
                        class="w-full h-full object-cover object-top origin-bottom"
                        [style.transform]="'scale(' + data().speakers[0].scale + ')'"
                     >
                  }
                  <div class="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent z-20">
                      <div class="text-left">
                        <h3 class="font-bold text-lg leading-tight text-white">{{ data().speakers[0].name }}</h3>
                        <p class="text-xs text-blue-200">{{ data().speakers[0].role }}</p>
                      </div>
                  </div>
                </div>
               
                <div class="w-1/2 h-full relative rounded-t-lg overflow-hidden">
                  @if (data().speakers[1].photoUrl) {
                     <img 
                        [src]="data().speakers[1].photoUrl" 
                        class="w-full h-full object-cover object-top origin-bottom"
                        [style.transform]="'scale(' + data().speakers[1].scale + ')'"
                     >
                  }
                   <div class="absolute bottom-0 right-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent z-20">
                      <div class="text-right">
                        <h3 class="font-bold text-lg leading-tight text-white">{{ data().speakers[1].name }}</h3>
                        <p class="text-xs text-blue-200">{{ data().speakers[1].role }}</p>
                      </div>
                   </div>
                </div>
            </div>

            <div class="mt-auto mb-20 relative px-1 z-20"
                 [style.transform]="'translate(' + data().eventDetailsPosition.x + 'px, ' + data().eventDetailsPosition.y + 'px)'">
                <div class="border-[3px] border-white rounded-[24px] py-2 px-1 flex items-center relative bg-blue-600/30 backdrop-blur-sm h-[90px]">
                   <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[2px] h-[60%] bg-white/80 rounded-full"></div>

                   <div class="flex items-center justify-end gap-3 w-1/2 pr-4 relative">
                      <div class="flex items-center gap-3" [style.transform]="'translate(' + data().dateOffset.x + 'px, ' + data().dateOffset.y + 'px)'">
                        <span class="text-5xl font-bold leading-none tracking-tighter">{{ data().date.day }}</span>
                        <div class="flex flex-col justify-center text-left">
                          <span class="font-bold tracking-[0.2em] uppercase text-lg leading-none">{{ data().date.month }}</span>
                          <span class="whitespace-nowrap text-sm mt-1 opacity-90 font-medium">{{ data().date.time }}</span>
                        </div>
                      </div>
                   </div>

                   <div class="flex items-center justify-start gap-3 w-1/2 pl-4 relative">
                      <div class="flex items-center gap-3" [style.transform]="'translate(' + data().locationOffset.x + 'px, ' + data().locationOffset.y + 'px)'">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                        <div class="flex flex-col text-left items-start">
                            <p class="font-bold text-xs leading-tight">{{ data().location.line1 }}</p>
                            <p class="font-bold text-[10px] uppercase leading-tight">{{ data().location.line2 }}</p>
                            <p class="text-[9px] opacity-90 leading-tight">{{ data().location.line3 }}</p>
                        </div>
                      </div>
                   </div>

                   <div class="absolute -bottom-5 left-1/2 z-10"
                        [style.transform]="'translate(calc(-50% + ' + data().taglinePosition.x + 'px), ' + data().taglinePosition.y + 'px) scale(' + data().taglineScale + ')'">
                      <div class="border-[3px] border-white bg-[#007bff] text-white px-6 py-1.5 rounded-[20px] text-center shadow-lg min-w-[140px]">
                        <p class="font-bold text-lg leading-none uppercase tracking-wider">{{ data().tagline.split('\\n')[0] }}</p>
                        <p class="text-[9px] font-medium leading-none mt-0.5">Untuk Umum</p>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        }
      </div>

      <div class="absolute bottom-0 left-0 right-0 px-6 pb-6 z-40 text-white">
        
        @if (data().layout === '2-speakers') {
            <div class="flex items-end justify-between w-full border-t border-white/20 pt-4">
                <div class="flex items-end gap-5">
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] text-center font-medium opacity-90 leading-none">Daftar Sekarang</p>
                        <div class="border border-white rounded-full px-3 py-1 text-[10px] font-bold bg-[#007bff]">
                            linkumkm.id
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <span class="text-[8px] opacity-80 leading-none">Download LinkUMKM di</span>
                        <div class="bg-black border border-gray-600 rounded flex items-center gap-1.5 px-2 py-1 shadow-sm">
                            <svg viewBox="0 0 512 512" class="w-3 h-3" fill="white">
                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3-60.1-60.1L69.8 446.5c-13.9 7.9-22.3 22.1-22.3 37.9V499h57.1z"/>
                            </svg>
                            <span class="text-[9px] font-bold">Google Play</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-end gap-2">
                    <span class="text-[11px] font-bold tracking-wide">Satu Bank Untuk Semua</span>
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            <span class="text-[10px] font-bold">{{ data().footer.instagram }}</span>
                        </div>
                        <div class="flex items-center gap-1.5 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                        <div class="flex flex-col items-end leading-none">
                            <span class="text-[7px] opacity-90">Contact <span class="font-bold">linkUMKM</span></span>
                            <span class="text-[10px] font-bold tracking-wide">{{ data().footer.contact }}</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        } @else {
            <div class="flex items-end justify-between">
                <div class="flex items-end gap-3 pb-1">
                    <div class="flex flex-col items-start gap-0.5">
                        <span class="text-[11px] center font-medium pl-8 opacity-90">Daftar Sekarang</span>
                        <div class="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M14 7l-5 5v11h11.45l2.55-10.5h-9v-5.5z"/></svg>
                            <div class="border border-white rounded-full px-3 py-0.5 text-xs font-bold bg-[#007bff]">linkumkm.id</div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-0.5 ml-1 mb-0.5">
                        <span class="text-[7px] opacity-80">Download LinkUMKM di</span>
                        <div class="bg-black border border-gray-600 rounded flex items-center gap-1 px-1.5 py-0.5 cursor-pointer shadow-sm">
                            <svg viewBox="0 0 512 512" class="w-2.5 h-2.5" fill="white"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3-60.1-60.1L69.8 446.5c-13.9 7.9-22.3 22.1-22.3 37.9V499h57.1z"/></svg>
                            <div class="flex flex-col leading-none">
                                <span class="text-[4px] uppercase">GET IT ON</span>
                                <span class="text-[7px] font-bold">Google Play</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-end gap-0.5">
                    <span class="font-bold text-sm mb-1 tracking-wide">Satu Bank Untuk Semua</span>
                    <div class="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span class="text-[10px] font-medium">{{ data().footer.instagram }}</span>
                    </div>
                    <div class="flex items-center gap-1.5 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                        <div class="flex flex-col items-end leading-none">
                            <span class="text-[7px] opacity-90">Contact <span class="font-bold">linkUMKM</span></span>
                            <span class="text-[10px] font-bold tracking-wide">{{ data().footer.contact }}</span>
                        </div>
                    </div>
                </div>
            </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .mask-image-gradient {
      mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
      -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    }
  `]
})
export class PosterPreviewComponent {
  data = input.required<PosterData>();
}