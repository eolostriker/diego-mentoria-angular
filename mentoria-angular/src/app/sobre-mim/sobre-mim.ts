import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-sobre-mim',
  imports: [NgFor],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.scss',
})
export class SobreMim {
  nome = 'Diego Dellacorte de Sant\'Anna Gomes';
  descricao = 'Sou uma forma de vida baseada em café que sempre amou jogos do estilo rpg, gosto também de jogar futebol e de aprender coisas novas, principalemnte de tecnologia.';
  lista = ['jogos', 'futebol', 'programar', 'café'];
  //imagem = './src/app/sobre-mim/archer_fox.jpg';
  imagem = 'https://d.furaffinity.net/art/kuraitora/1527012065/1527012065.kuraitora_archerfox_web.jpg';
}
