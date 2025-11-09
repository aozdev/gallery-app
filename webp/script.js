// Kullanıcının lokal saatini göster
function updateClock() {
  const now = new Date(); // Lokal saat
  const hours = String(now.getHours()).padStart(2,'0');
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2,'0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();


// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
});

// Galeriye resim ekleme
function addEmbed(imageUrl, description="") {
  const gallery = document.getElementById('gallery');
  const embed = document.createElement('div');
  embed.className = 'embed';
  embed.innerHTML = `
    <img src="${imageUrl}" alt="Resim">
    <div class="desc">${description}</div>
  `;
  gallery.prepend(embed);

  // Modal açma
  embed.querySelector('img').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalDesc = document.getElementById('modalDesc');
    modal.style.display = "block";
    modalImg.src = imageUrl;
    modalDesc.textContent = description;
  });
}

// Modal kapatma
document.getElementById('modalClose').onclick = function() {
  document.getElementById('modal').style.display = "none";
}


// Örnek resimler
addEmbed('https://i.pinimg.com/736x/31/76/57/31765791a92e9a3ff5550947be45e89a.jpg','10 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/1200x/ee/a2/2a/eea22ae9ee5dba28288b6170942a8cd7.jpg','9 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/1200x/63/80/37/6380378fd47cab75f429ca932bcd0915.jpg','8 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/1200x/cf/c7/30/cfc730c2b5898c5a0db3f6de2492b729.jpg', '7 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/81/25/aa/8125aa3707566252530a47ca685458cc.jpg', '6 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/e8/63/68/e86368084e649734865063ba58736b69.jpg', '5 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/bf/a5/18/bfa518d13b0c35a09f93f8d3c111eaf2.jpg', '4 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/1200x/91/a5/61/91a5617f6bea6f3edfdc9ecefc819911.jpg', '3 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/91/d9/6e/91d96ead035fd001af4868e5a7460305.jpg', '2 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/1200x/87/5c/13/875c13c2f3a561653f60b1532a4e94b4.jpg', '1 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.'); 
