// CineVerse: catálogo demonstrativo com dados locais e pôsteres via TMDB CDN.
// As notas e sinopses são ilustrativas. Nenhuma conta ou banco de dados é necessário.
const movies = [
  {
    id: 1,
    title: "Interestelar",
    original: "Interstellar",
    year: 2014,
    genre: "Ficção científica",
    rating: 8.7,
    runtime: 169,
    director: "Christopher Nolan",
    poster: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "Uma equipe atravessa o espaço em busca de um novo lar para a humanidade.",
    tag: "OBRA-PRIMA",
  },
  {
    id: 2,
    title: "O Poderoso Chefão",
    original: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
    runtime: 175,
    director: "Francis Ford Coppola",
    poster: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    description: "A história de uma família poderosa e os custos da lealdade.",
    tag: "CLÁSSICO",
  },
  {
    id: 3,
    title: "Batman: O Cavaleiro das Trevas",
    original: "The Dark Knight",
    year: 2008,
    genre: "Ação",
    rating: 9.0,
    runtime: 152,
    director: "Christopher Nolan",
    poster: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "Batman enfrenta um criminoso que transforma Gotham em um teste moral.",
    tag: "DESTAQUE",
  },
  {
    id: 4,
    title: "A Origem",
    original: "Inception",
    year: 2010,
    genre: "Ficção científica",
    rating: 8.8,
    runtime: 148,
    director: "Christopher Nolan",
    poster: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description:
      "Um ladrão de segredos entra em sonhos para realizar uma missão impossível.",
    tag: "MIND-BENDING",
  },
  {
    id: 5,
    title: "Clube da Luta",
    original: "Fight Club",
    year: 1999,
    genre: "Drama",
    rating: 8.8,
    runtime: 139,
    director: "David Fincher",
    poster: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    description:
      "Um homem insatisfeito encontra um caminho perigoso para escapar da rotina.",
    tag: "CULT",
  },
  {
    id: 6,
    title: "Pulp Fiction",
    original: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    runtime: 154,
    director: "Quentin Tarantino",
    poster: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    description:
      "Histórias de criminosos em Los Angeles se cruzam de formas inesperadas.",
    tag: "CLÁSSICO",
  },
  {
    id: 7,
    title: "Forrest Gump",
    original: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    runtime: 142,
    director: "Robert Zemeckis",
    poster: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    description:
      "Uma vida extraordinária atravessa décadas de mudanças e encontros.",
    tag: "EMOCIONANTE",
  },
  {
    id: 8,
    title: "Matrix",
    original: "The Matrix",
    year: 1999,
    genre: "Ficção científica",
    rating: 8.7,
    runtime: 136,
    director: "Lana e Lilly Wachowski",
    poster: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "Um programador descobre que a realidade pode não ser o que parece.",
    tag: "ICÔNICO",
  },
  {
    id: 9,
    title: "Parasita",
    original: "Parasite",
    year: 2019,
    genre: "Suspense",
    rating: 8.5,
    runtime: 132,
    director: "Bong Joon-ho",
    poster: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description:
      "Duas famílias de classes sociais diferentes entram em um jogo de aparências.",
    tag: "PREMIADO",
  },
  {
    id: 10,
    title: "Whiplash",
    original: "Whiplash",
    year: 2014,
    genre: "Drama",
    rating: 8.5,
    runtime: 107,
    director: "Damien Chazelle",
    poster: "/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    description:
      "Um jovem baterista enfrenta os limites da ambição e da disciplina.",
    tag: "INTENSO",
  },
  {
    id: 11,
    title: "Gladiador",
    original: "Gladiator",
    year: 2000,
    genre: "Ação",
    rating: 8.5,
    runtime: 155,
    director: "Ridley Scott",
    poster: "/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description:
      "Um general romano busca justiça em uma arena que mudou seu destino.",
    tag: "ÉPICO",
  },
  {
    id: 12,
    title: "A Viagem de Chihiro",
    original: "Spirited Away",
    year: 2001,
    genre: "Animação",
    rating: 8.6,
    runtime: 125,
    director: "Hayao Miyazaki",
    poster: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    description:
      "Uma garota entra em um mundo mágico e precisa encontrar o caminho de volta.",
    tag: "ENCANTADOR",
  },
  {
    id: 13,
    title: "Duna: Parte Dois",
    original: "Dune: Part Two",
    year: 2024,
    genre: "Ficção científica",
    rating: 8.5,
    runtime: 166,
    director: "Denis Villeneuve",
    poster: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description:
      "Paul Atreides enfrenta escolhas que podem mudar o futuro de Arrakis.",
    tag: "RECENTE",
  },
  {
    id: 14,
    title: "Oppenheimer",
    original: "Oppenheimer",
    year: 2023,
    genre: "Drama",
    rating: 8.6,
    runtime: 180,
    director: "Christopher Nolan",
    poster: "/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    description:
      "Um cientista participa de um projeto que transforma a história mundial.",
    tag: "PREMIADO",
  },
  {
    id: 15,
    title: "Seven: Os Sete Crimes Capitais",
    original: "Se7en",
    year: 1995,
    genre: "Suspense",
    rating: 8.6,
    runtime: 127,
    director: "David Fincher",
    poster: "/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    description:
      "Dois detetives investigam uma sequência perturbadora de crimes.",
    tag: "SUSPENSE",
  },
  {
    id: 16,
    title: "Ilha do Medo",
    original: "Shutter Island",
    year: 2010,
    genre: "Suspense",
    rating: 8.2,
    runtime: 138,
    director: "Martin Scorsese",
    poster: "/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
    description:
      "Uma investigação em um hospital isolado desafia a percepção da realidade.",
    tag: "MISTÉRIO",
  },
  {
    id: 17,
    title: "O Show de Truman",
    original: "The Truman Show",
    year: 1998,
    genre: "Drama",
    rating: 8.2,
    runtime: 103,
    director: "Peter Weir",
    poster: "/vuza0WqY239yBXOadKlGwJsZJFE.jpg",
    description:
      "Um homem começa a questionar o mundo aparentemente perfeito ao seu redor.",
    tag: "REFLEXIVO",
  },
  {
    id: 18,
    title: "WALL-E",
    original: "WALL-E",
    year: 2008,
    genre: "Animação",
    rating: 8.4,
    runtime: 98,
    director: "Andrew Stanton",
    poster: "/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    description:
      "Um pequeno robô descobre uma conexão especial em um planeta abandonado.",
    tag: "ENCANTADOR",
  },
  {
    id: 19,
    title: "Corra!",
    original: "Get Out",
    year: 2017,
    genre: "Terror",
    rating: 7.8,
    runtime: 104,
    director: "Jordan Peele",
    poster: "/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    description:
      "Uma visita à família da namorada revela segredos inquietantes.",
    tag: "TENSÃO",
  },
  {
    id: 20,
    title: "Coringa",
    original: "Joker",
    year: 2019,
    genre: "Crime",
    rating: 8.4,
    runtime: 122,
    director: "Todd Phillips",
    poster: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description: "Um homem solitário percorre um caminho sombrio em Gotham.",
    tag: "IMPACTANTE",
  },
  {
    id: 21,
    title: "La La Land",
    original: "La La Land",
    year: 2016,
    genre: "Romance",
    rating: 8.0,
    runtime: 128,
    director: "Damien Chazelle",
    poster: "/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description:
      "Dois artistas tentam conciliar seus sonhos e seu relacionamento.",
    tag: "MUSICAL",
  },
  {
    id: 22,
    title: "Titanic",
    original: "Titanic",
    year: 1997,
    genre: "Romance",
    rating: 7.9,
    runtime: 194,
    director: "James Cameron",
    poster: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    description:
      "Um encontro inesquecível acontece a bordo de uma viagem histórica.",
    tag: "CLÁSSICO",
  },
  {
    id: 23,
    title: "Mad Max: Estrada da Fúria",
    original: "Mad Max: Fury Road",
    year: 2015,
    genre: "Ação",
    rating: 8.1,
    runtime: 120,
    director: "George Miller",
    poster: "/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    description:
      "Uma perseguição implacável atravessa um deserto pós-apocalíptico.",
    tag: "ADRENALINA",
  },
  {
    id: 24,
    title: "O Grande Hotel Budapeste",
    original: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comédia",
    rating: 8.1,
    runtime: 99,
    director: "Wes Anderson",
    poster: "/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    description:
      "Um concierge e seu aprendiz vivem uma aventura cheia de excentricidades.",
    tag: "ESTILOSO",
  },
];

const $ = (id) => document.getElementById(id);
const posterUrl = (movie) => `https://image.tmdb.org/t/p/w500${movie.poster}`;
const posterLarge = (movie) => `https://image.tmdb.org/t/p/w780${movie.poster}`;
const genres = [
  "Todos",
  "Ação",
  "Drama",
  "Suspense",
  "Ficção científica",
  "Crime",
  "Animação",
  "Terror",
  "Romance",
  "Comédia",
];
const storageKey = "cineverse_watchlist_v1";
function loadList() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(saved)
      ? saved.filter((id) => movies.some((m) => m.id === id))
      : [];
  } catch {
    return [];
  }
}
let watchlist = loadList();
let activeGenre = "Todos";
let spinning = false;
let spinTimeout = null;
const escapeHtml = (text) =>
  String(text).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );

function movieCard(movie) {
  const saved = watchlist.includes(movie.id);
  return `<article class="movie-card"><div class="movie-poster" data-detail="${movie.id}" role="button" tabindex="0" aria-label="Ver detalhes de ${escapeHtml(movie.title)}"><img src="${posterUrl(movie)}" alt="Pôster de ${escapeHtml(movie.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.classList.remove('hidden')"><div class="poster-fallback hidden">${escapeHtml(movie.title)}</div><span class="poster-tag">${escapeHtml(movie.tag)}</span></div><button class="heart-btn ${saved ? "active" : ""}" data-toggle="${movie.id}" aria-label="${saved ? "Remover da" : "Adicionar à"} minha lista">${saved ? "♥" : "♡"}</button><div class="movie-info"><div class="movie-meta">${escapeHtml(movie.genre)} / ${movie.year}</div><h3>${escapeHtml(movie.title)}</h3><div class="movie-details"><span>◷ ${movie.runtime} min</span><span class="rating">★ ${movie.rating.toFixed(1)}</span></div><div class="card-actions"><button data-detail="${movie.id}">DETALHES ↗</button><button class="${saved ? "saved" : ""}" data-toggle="${movie.id}">${saved ? "✓ NA LISTA" : "+ MINHA LISTA"}</button></div></div></article>`;
}
function filteredMovies() {
  const q = $("searchInput").value.trim().toLocaleLowerCase("pt-BR");
  const genre = $("genreSelect").value;
  const sort = $("sortSelect").value;
  let arr = movies.filter(
    (m) =>
      (genre === "all" || m.genre === genre) &&
      (activeGenre === "Todos" || m.genre === activeGenre) &&
      (!q ||
        [m.title, m.original, m.director, String(m.year)].some((v) =>
          v.toLocaleLowerCase("pt-BR").includes(q),
        )),
  );
  if (sort === "rating") arr.sort((a, b) => b.rating - a.rating);
  if (sort === "newest") arr.sort((a, b) => b.year - a.year);
  if (sort === "oldest") arr.sort((a, b) => a.year - b.year);
  if (sort === "az")
    arr.sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
  return arr;
}
function renderCatalog() {
  const arr = filteredMovies();
  $("movieGrid").innerHTML = arr.map(movieCard).join("");
  $("resultCount").textContent = String(arr.length).padStart(2, "0");
  $("emptyState").classList.toggle("hidden", arr.length !== 0);
}
function renderWatchlist() {
  const arr = movies.filter((m) => watchlist.includes(m.id));
  $("watchGrid").innerHTML = arr.map(movieCard).join("");
  $("watchEmpty").classList.toggle("hidden", arr.length !== 0);
  $("watchCount").textContent = arr.length;
  $("headerCount").textContent = arr.length;
}
function renderPills() {
  $("genrePills").innerHTML = genres
    .map(
      (g) =>
        `<button class="pill ${activeGenre === g ? "active" : ""}" data-genre="${escapeHtml(g)}">${escapeHtml(g)}</button>`,
    )
    .join("");
}
function render() {
  renderPills();
  renderCatalog();
  renderWatchlist();
}
function toggleWatch(id) {
  watchlist = watchlist.includes(id)
    ? watchlist.filter((x) => x !== id)
    : [...watchlist, id];
  try {
    localStorage.setItem(storageKey, JSON.stringify(watchlist));
  } catch {}
  render();
  if (!$("movieModal").classList.contains("hidden")) {
    const m = movies.find((x) => x.id === id);
    if (m) openMovie(id);
  }
}
function openMovie(id) {
  const m = movies.find((x) => x.id === id);
  if (!m) return;
  const saved = watchlist.includes(id);
  $("modalContent").innerHTML =
    `<div class="modal-layout"><img src="${posterLarge(m)}" alt="Pôster de ${escapeHtml(m.title)}" onerror="this.style.display='none'"><div><div class="section-kicker">CINEVERSE / MOVIE DETAILS</div><h2 id="modalTitle">${escapeHtml(m.title)}</h2><div class="modal-chips"><span>★ ${m.rating.toFixed(1)}</span><span>${m.year}</span><span>${m.runtime} MIN</span><span>${escapeHtml(m.genre)}</span></div><p>${escapeHtml(m.description)}</p><div class="modal-director">DIREÇÃO: <b>${escapeHtml(m.director)}</b></div><button class="btn btn-primary" data-toggle="${m.id}">${saved ? "✓ REMOVER DA MINHA LISTA" : "+ ADICIONAR À MINHA LISTA"}</button><div class="credit-note">Catálogo demonstrativo · notas ilustrativas · pôsteres TMDB</div></div></div>`;
  $("movieModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  $("closeModal").focus();
}
function closeMovie() {
  $("movieModal").classList.add("hidden");
  document.body.style.overflow = "";
}
function setupHero() {
  const first = movies[0],
    second = movies[2];
  $("heroFront").style.backgroundImage = `url("${posterLarge(first)}")`;
  $("heroBack").style.backgroundImage = `url("${posterLarge(second)}")`;
  $("statMovies").textContent = String(movies.length).padStart(2, "0");
}
function setupFilters() {
  const realGenres = [...new Set(movies.map((m) => m.genre))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );
  $("genreSelect").innerHTML =
    '<option value="all">Todos os gêneros</option>' +
    realGenres
      .map((g) => `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`)
      .join("");
  $("searchInput").addEventListener("input", renderCatalog);
  $("genreSelect").addEventListener("change", renderCatalog);
  $("sortSelect").addEventListener("change", renderCatalog);
  $("resetFilters").addEventListener("click", () => {
    $("searchInput").value = "";
    $("genreSelect").value = "all";
    $("sortSelect").value = "featured";
    activeGenre = "Todos";
    render();
  });
}
function setupEvents() {
  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-toggle]");
    if (toggle) {
      toggleWatch(Number(toggle.dataset.toggle));
      return;
    }
    const detail = event.target.closest("[data-detail]");
    if (detail) {
      openMovie(Number(detail.dataset.detail));
      return;
    }
    const genre = event.target.closest("[data-genre]");
    if (genre) {
      activeGenre = genre.dataset.genre;
      $("genreSelect").value = "all";
      render();
      return;
    }
    if (event.target.closest("[data-close]")) closeMovie();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMovie();
    if (
      (event.key === "Enter" || event.key === " ") &&
      event.target.matches(".movie-poster[data-detail]")
    ) {
      event.preventDefault();
      openMovie(Number(event.target.dataset.detail));
    }
  });
  $("closeModal").addEventListener("click", closeMovie);
  $("menuBtn").addEventListener("click", () => {
    const open = $("nav").classList.toggle("open");
    $("menuBtn").setAttribute("aria-expanded", String(open));
  });
  $("nav").addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      $("nav").classList.remove("open");
      $("menuBtn").setAttribute("aria-expanded", "false");
    }
  });
}

// Carrossel animado: movimento com desaceleração até centralizar o filme sorteado.
function spin() {
  if (spinning) return;
  const source = $("rouletteSource").value;
  const pool =
    source === "watch"
      ? movies.filter((m) => watchlist.includes(m.id))
      : movies;
  if (!pool.length) {
    $("rouletteHint").textContent =
      "Sua lista está vazia. Adicione filmes ou escolha o catálogo completo.";
    return;
  }
  spinning = true;
  $("spinBtn").disabled = true;
  $("rouletteHint").textContent = "O destino está escolhendo...";
  $("rouletteResult").textContent = "✦ ✦ ✦";
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  const sequence = Array.from(
    { length: 32 },
    () => pool[Math.floor(Math.random() * pool.length)].id,
  );
  sequence[27] = chosen.id;
  drawRoulette(sequence);
  const track = $("rouletteTrack");
  const viewport = $("rouletteTrack").parentElement;
  const item = track.querySelector(".roulette-item");
  const itemWidth = item ? item.getBoundingClientRect().width : 155;
  const gap = parseFloat(getComputedStyle(track).gap) || 15;
  const fullWidth = sequence.length * itemWidth + (sequence.length - 1) * gap;
  const centerOfChosen = 27 * (itemWidth + gap) + itemWidth / 2;
  const target = fullWidth / 2 - centerOfChosen;
  void track.offsetWidth;
  requestAnimationFrame(() => {
    track.style.transition = "transform 4200ms cubic-bezier(.12,.76,.16,1)";
    track.style.transform = `translateX(calc(-50% + ${target}px))`;
  });
  clearTimeout(spinTimeout);
  spinTimeout = setTimeout(() => {
    $("rouletteResult").innerHTML =
      `✦ ${escapeHtml(chosen.title)} <span style="color:#b8a4d4;font-size:13px">(${chosen.year})</span> <button id="rouletteDetails" class="reset-btn" style="padding:8px 12px;margin-left:7px">VER DETALHES ↗</button>`;
    $("rouletteDetails").addEventListener("click", () => openMovie(chosen.id));
    $("rouletteHint").textContent = "Não gostou? Pode sortear novamente!";
    $("spinBtn").disabled = false;
    spinning = false;
  }, 4350);
}
function drawRoulette(ids) {
  const track = $("rouletteTrack");
  track.innerHTML = ids
    .map((id) => {
      const m = movies.find((x) => x.id === id);
      return `<div class="roulette-item"><img src="${posterUrl(m)}" alt="${escapeHtml(m.title)}" onerror="this.style.visibility='hidden'"></div>`;
    })
    .join("");
  track.style.transition = "none";
  track.style.transform = "translateX(-50%)";
}
function setupRoulette() {
  drawRoulette([1, 3, 4, 9, 12, 13, 15]);
  $("spinBtn").addEventListener("click", spin);
}
setupHero();
setupFilters();
setupEvents();
setupRoulette();
render();
