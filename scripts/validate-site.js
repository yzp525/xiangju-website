const fs = require('fs');
const required = [
  'index.html', 'events/index.html', 'exhibition.html', 'about.html',
  'src/styles.css', 'src/app.js', 'src/year-page.js',
  'src/media/xiangju-logo.png',
  'src/media/years (1)/2016-rural-field-experiment.mp4',
  'src/media/years (1)/2017-rural-field-experiment-2.mp4',
  'src/media/years (1)/2018-rural-commune-film.mp4',
  'src/media/years (1)/2019-rice-field-rock.mp4',
  'src/media/years (1)/2020-chongming-building-workshop.mp4',
  'src/media/years (1)/2021-rice-field-fashion-show.mp4',
  'src/media/years (2)/2022-rice-field-theatre.mp4',
  'src/media/years (2)/2023-rice-field-peace.mp4',
  'src/media/years (2)/2024-rice-field-chess-zh.mp4',
  'src/media/years (2)/2024-rice-field-chess-en.mp4',
  'src/media/years (2)/2025-rice-field-gathering-zh.mp4',
  'src/media/years (2)/2025-rice-field-gathering-en.mp4',
  ...Array.from({ length: 8 }, (_, index) => `src/media/year-covers/${2016 + index}.jpg`),
  'src/media/year-covers/2024-zh.jpg', 'src/media/year-covers/2024-en.jpg',
  'src/media/year-covers/2023-field-gathering.jpg',
  'src/media/year-covers/2025-zh.jpg', 'src/media/year-covers/2025-en.jpg',
  ...['2017', '2018', '2020', '2024', '2025'].map(year => `src/media/year-covers/${year}-film-cover.jpg`),
  'src/media/year-covers/2017-film-cover-v2.jpg', 'src/media/year-covers/2020-film-cover-v2.jpg',
  'src/media/year-covers/2018-film-cover-v2.jpg', 'src/media/year-covers/2019-film-cover-v2.jpg',
  ...['2017', '2018', '2020'].map(year => `src/media/year-covers/${year}-doc-cover.jpg`),
  ...Array.from({ length: 10 }, (_, yearIndex) => Array.from({ length: 3 }, (_, imageIndex) => `src/media/year-stories/${2016 + yearIndex}-${imageIndex + 1}.jpg`)).flat()
  , ...[2023, 2024, 2025].flatMap(year => [1, 2, 3].map(index => `src/media/year-stories/${year}-archive-${index}.jpg`))
  , ...Array.from({ length: 4 }, (_, index) => `src/media/exhibition/behind-${index + 1}.jpg`)
  , ...Array.from({ length: 3 }, (_, index) => `src/media/exhibition/chapter-0${index + 1}.jpg`)
  , 'src/media/exhibition/exhibition-hero.jpg'
  , ...Array.from({ length: 10 }, (_, index) => `src/media/events-archive/${2016 + index}.jpg`)
];
for (let year = 2016; year <= 2026; year++) required.push(`events/${year}.html`);
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('id="home"')) throw new Error('Missing home page content');
for (const page of ['events/index.html', 'exhibition.html', 'about.html']) {
  if (!fs.readFileSync(page, 'utf8').includes('id="nav"')) throw new Error(`Missing navigation in ${page}`);
}
console.log('Static site validation passed.');
