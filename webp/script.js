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
addEmbed('https://i.pinimg.com/736x/0d/fd/f7/0dfdf7776a0ed05697d1a879f73fa86d.jpg','10 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/0d/fd/f7/0dfdf7776a0ed05697d1a879f73fa86d.jpg','9 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/0d/fd/f7/0dfdf7776a0ed05697d1a879f73fa86d.jpg','8 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/0d/fd/f7/0dfdf7776a0ed05697d1a879f73fa86d.jpg', '7 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/0d/fd/f7/0dfdf7776a0ed05697d1a879f73fa86d.jpg', '6 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/0d/fd/f7/0dfdf7776a0ed05697d1a879f73fa86d.jpg', '4 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/0d/fd/f7/0dfdf7776a0ed05697d1a879f73fa86d.jpg', '3 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/0d/fd/f7/0dfdf7776a0ed05697d1a879f73fa86d.jpg', '2 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.');
addEmbed('https://i.pinimg.com/736x/0d/fd/f7/0dfdf7776a0ed05697d1a879f73fa86d.jpg', '1 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam voluptas assumenda vitae vero cupiditate beatae sed voluptates sit facilis, officiis culpa laudantium suscipit ab ipsam possimus recusandae fuga tempora similique labore, eum placeat consequatur, sequi aperiam. Maxime itaque, eligendi alias doloribus nesciunt perspiciatis ipsa blanditiis labore odio impedit voluptatibus.'); 
