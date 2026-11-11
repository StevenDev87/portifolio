const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden") === false;
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  });
}

const typingElement = document.getElementById("typing");

if (typingElement) {
  const words = ["Medium.", "Design.", "Brand.", "Art."];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    typingElement.textContent = "Design.";
  } else {
    let wordIndex = 0;
    let characterIndex = 0;

    function typeNextCharacter() {
      const word = words[wordIndex];
      typingElement.textContent = word.slice(0, characterIndex);
      characterIndex += 1;

      if (characterIndex > word.length) {
        window.setTimeout(() => {
          characterIndex = 0;
          wordIndex = (wordIndex + 1) % words.length;
          typeNextCharacter();
        }, 1400);
        return;
      }

      window.setTimeout(typeNextCharacter, 130);
    }

    typeNextCharacter();
  }
}
  const words = ["Area", "Services", "Work"];
  let wi = 0, ci = 0;
  const typingEl = document.getElementById('typing');
  function type(){
    let w = words[wi];
    typingEl.textContent = w.substring(0, ci);
    ci++;
    if(ci > w.length){ setTimeout(()=>{ ci=0; wi=(wi+1)%words.length; },1200); }
    setTimeout(type, 120);
  }
  type();

  // 2. COUNTER
  let count = 0;
  let timer = setInterval(()=>{
    count += 2;
    document.getElementById('counter').textContent = count;
    if(count >= 120) clearInterval(timer);
  }, 30);

  // 3. FILTER
  function filterService(cat, btn){
    document.querySelectorAll('.filter-btn').forEach(b => b.className = 'filter-btn bg-gray-100 px-5 py-2 rounded-full text-xs font-bold transition');
    btn.className = 'filter-btn bg-black text-white px-5 py-2 rounded-full text-xs font-bold transition';
    document.querySelectorAll('.card').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'flex' : 'none';
    });
  }

  // 4. CLICK CARD = MOVE RIGHT + TURN DARK + OPEN POPUP
  function clickCard(card, title, text){
    // Remove dark/right from other cards
    document.querySelectorAll('.card').forEach(c => {
      c.classList.remove('bg-[#1a1a1a]', 'translate-x-4', 'md:translate-x-8', 'shadow-2xl', 'scale-[1.03]');
      c.classList.add('bg-[#e5e5e5]');
      c.querySelector('.card-title').classList.remove('text-white');
      c.querySelector('.card-desc').classList.remove('text-gray-300');
      c.querySelector('.card-desc').classList.add('text-gray-500');
    });
    // Add dark + right to clicked card
    card.classList.remove('bg-[#e5e5e5]');
    card.classList.add('bg-[#1a1a1a]', 'translate-x-4', 'md:translate-x-8', 'shadow-2xl', 'scale-[1.03]');
    card.querySelector('.card-title').classList.add('text-white');
    card.querySelector('.card-desc').classList.remove('text-gray-500');
    card.querySelector('.card-desc').classList.add('text-gray-300');

    // Open popup
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupText').innerText = text;
    document.getElementById('popup').classList.remove('hidden');
  }
  function closePopup(){ document.getElementById('popup').classList.add('hidden'); }

  // 5. DARK MODE WHOLE PAGE - ON CLICK
  let isDark = false;
  function toggleDark(){
    isDark = !isDark;
    let body = document.getElementById('mainBody');
    let btn = document.getElementById('darkBtn');
    let title = document.getElementById('mainTitle');
    let sub = document.getElementById('subTitle');

    if(isDark){
      body.classList.remove('bg-white'); body.classList.add('bg-[#121212]');
      title.classList.add('text-white');
      sub.classList.remove('text-gray-500'); sub.classList.add('text-gray-300');
      btn.innerText = '☀️ Light Mode';
      btn.classList.remove('bg-black','text-white'); btn.classList.add('bg-white','text-black');
    } else {
      body.classList.remove('bg-[#121212]'); body.classList.add('bg-white');
      title.classList.remove('text-white');
      sub.classList.remove('text-gray-300'); sub.classList.add('text-gray-500');
      btn.innerText = '🌙 Dark Mode';
      btn.classList.remove('bg-white','text-black'); btn.classList.add('bg-black','text-white');
    }
  }

  // 6. REVEAL
  function reveal(){
    document.querySelectorAll('.reveal').forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight - 50){
        el.classList.remove('opacity-0','translate-y-8');
        el.classList.add('opacity-100','translate-y-0');
      }
    });
  }
  window.addEventListener('scroll', reveal); reveal();