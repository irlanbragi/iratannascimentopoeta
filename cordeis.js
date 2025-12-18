const poems = [
  {
    title: "Zumbi, rei Zumbi",
    date: "07/10/2022",
    text: `Zumbindo, cantando,
Falando outra língua.
Resgate de um povo
Que morre a míngua.

Zumbi, rei Zumbi

Adeus pra senzala,
Chicote no lombo,
Senhor senhorzinho,
Bem vindo ao Quilombo.

Zumbi, rei Zumbi

Nascendo sem dono,
Com direito a sonhar,
Podendo escolher
Onde vai trabalhar.

Zumbi, rei Zumbi

Ensinando o valor
De ter liberdade,
De poder ser feliz,
De sentir igualdade.

Zumbi, rei Zumbi

Adeus pras correntes,
Adeus pra o mal trato,
Já não tem coronel 
Liberdade de fato.

Zumbi, rei Zumbi

Transformando a Senzala
Em casas, em lares.
Eternizando o seu nome,
Eternizando Palmares.

Zumbi, rei Zumbi 

Até hoje se ouve
Sua voz, os seus gritos,
Já não são tão constantes,
Já não são tão aflitos.

Zumbi, rei Zumbi

Zumbindo, cantando
Em novos terreiros,
Surgem novos Zumbis,
Nascem novos guerreiros.`
  },

  {
    title: "Sonho",
    date: "06/04/2025",
    text: `Me procuro
E não me encontro 
No exato ponto
E tonto, pronto
Retorno ao conto

E como um canto
No encanto
Me torno santo
Nem tanto
Me resta o pranto

E nessa procura
A loucura
Se faz mistura
Não pura
Tão crua, tão dura

Vou além do meu olhar
Tentando me decifrar
Se não posso imaginar
Talvez eu possa sonhar
Em como vou me encontrar`
  },

  {
    title: "Amor",
    date: "—",
    text: `Não julgue o amor como sujeito,
Não é simples, nem composto,
Não tem face, não tem rosto,
É amor de qualquer jeito.

O amor não tem fronteira,
É tão simples e complexo,
Não tem gênero, não tem sexo,
Derruba qualquer barreira. 

Não julgue o amor pelo conceito,
Pois não tem classe, não tem posto, 
É uma mistura de gosto,
Não importa como é feito.

O amor não escolhe um lado,
Não tem certo, nem errado, 
Não é feio, nem pecado,
É tão fácil e complicado.`
  }
];

// ====== LÓGICA DO SITE ======

const content = document.getElementById('content');
const menu = document.getElementById('menu');

function renderPoem(index) {
  const p = poems[index];
  content.innerHTML = `
    <article class="poem">
      <h2>${p.title}</h2>
      <div class="meta">${p.date}</div>
      <pre>${p.text}</pre>
    </article>
  `;
}

poems.forEach((p, i) => {
  const btn = document.createElement('button');
  btn.textContent = p.title;
  btn.onclick = () => renderPoem(i);
  menu.appendChild(btn);
});

renderPoem(0);
