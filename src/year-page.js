const year = document.body.dataset.year;
const yearNames = {
  zh: { '2016': '田园迷宫', '2017': '田园剧场', '2018': '稻垛集市', '2019': '稻田摇滚', '2020': '稻田笑脸', '2021': '稻田宇宙', '2022': '稻田戏剧', '2023': '稻田和平', '2024': '稻田曲弈', '2025': '稻田和集', '2026': '下一次相聚' },
  en: { '2016': 'Field Maze', '2017': 'Field Banquet', '2018': 'Field Pyramid', '2019': 'Field Rock N’ Roll', '2020': 'Field Emoji', '2021': 'Field Metaverse', '2022': 'Field Drama', '2023': 'Field Peace', '2024': 'Field Heritage', '2025': 'Field Calligraphy', '2026': 'The Next Gathering' }
};
const yearMedia = {
  '2016': { file: '2016-rural-field-experiment.mp4', posterSrc: '../src/media/year-stories/2016-1.jpg', zh: '2016 崇明田园实验', en: '2016 Chongming Rural Field Experiment' },
  '2017': { file: '2017-rural-field-experiment-2.mp4', poster: '2017-doc-cover.jpg', zh: '2017 田园实验 2.0', en: '2017 Field Banquet' },
  '2018': { file: '2018-rural-commune-film.mp4', poster: '2018-doc-cover.jpg', zh: '2018 乡聚田园', en: '2018 Field Pyramid' },
  '2019': { file: '2019-rice-field-rock.mp4', poster: '2019-film-cover-v2.jpg', zh: '2019 稻田摇滚', en: '2019 Field Rock N’ Roll' },
  '2020': { file: '2020-chongming-building-workshop.mp4', poster: '2020-doc-cover.jpg', zh: '2020 崇明营造', en: '2020 Field Emoji' },
  '2021': { file: '2021-rice-field-fashion-show.mp4', posterSrc: '../src/media/year-stories/2021-3.jpg', zh: '2021 稻田宇宙 · 稻田走秀', en: '2021 Field Metaverse' },
  '2022': { file: '2022-rice-field-theatre.mp4', zh: '2022 稻田戏剧', en: '2022 Field Drama' },
  '2023': { file: '2023-rice-field-peace.mp4', posterSrc: '../src/media/year-stories/2023-1.jpg', zh: '2023 稻田和平', en: '2023 Field Peace' },
  '2024': { zhFile: '2024-rice-field-chess-zh.mp4', enFile: '2024-rice-field-chess-en.mp4', posterSrc: '../src/media/year-stories/2024-1.jpg', zh: '2024 稻田曲弈', en: '2024 Field Heritage' },
  '2025': { zhFile: '2025-rice-field-gathering-zh.mp4', enFile: '2025-rice-field-gathering-en.mp4', posterSrc: '../src/media/year-stories/2025-1.jpg', zh: '2025 稻田和集', en: '2025 Field Calligraphy' }
};
const yearMediaFolder = Number(year) <= 2021 ? 'years%20%281%29' : 'years%20%282%29';
const yearMediaBase = 'https://xiangju-2026.oss-cn-shanghai.aliyuncs.com';
const yearStoryImages = {
  '2023': ['2023-archive-1.jpg', '2023-archive-2.jpg', '2023-archive-3.jpg'],
  '2024': ['2024-archive-1.jpg', '2024-archive-2.jpg', '2024-archive-3.jpg'],
  '2025': ['2025-archive-1.jpg', '2025-archive-2.jpg', '2025-archive-3.jpg']
};
const yearStories = {
  '2016': {
    zh: { label: '乡聚实验田 · 第一章', title: '稻田迷宫：让设计真正落地', intro: '同济大学建筑与城市规划学院的17位学生，用23天完成设计，并在崇明稻田中建成五组主题空间。迷宫把课程、营造与乡村体验连在一起，也开启了乡聚实验田持续十年的实践。', detailTitle: '从农田到共同创作的场所', detail: '糸园、童心园、网红园、闲于山水道与镜田共同组成大型迷宫。竹、木、绳索、纱布与稻穗成为设计材料；村民、师生和儿童共同参与，让生产性土地显现出教育、游戏与公共生活的价值。', captions: ['稻田迷宫的整体鸟瞰', '夕阳下，儿童在糸园秋千上玩耍', '稻田路径中的红色空间装置'] },
    en: { label: 'Rural Field Laboratory · Chapter One', title: 'Rice Field Maze: Design Made Real', intro: 'Seventeen Tongji University students developed the project over 23 days, then built five themed spaces in a Chongming rice field. The maze connected studio learning, hands-on construction and rural experience, beginning Xiangju’s decade-long field practice.', detailTitle: 'From farmland to a place of co-creation', detail: 'Thread Garden, Children’s Garden, Internet Pavilion, Landscape Path and Mirror Field formed one large maze. Bamboo, timber, rope, fabric and rice became design materials, while villagers, students and children revealed the field’s value for learning, play and public life.', captions: ['Aerial view of the rice field maze', 'A child on the Thread Garden swing at sunset', 'Red installation woven through the rice paths'] }
  },
  '2017': {
    zh: { label: '乡聚实验田 · 第二章', title: '稻田剧场：在水稻中坐下来', intro: '2017年，团队不再重复复杂的迷宫，而是在稻田中做减法：收割出一个直径16米的圆，让二十个家庭在真正的水稻田里聚餐、绘画和交流。', detailTitle: '一个圆，容纳许多相遇', detail: '稻田剧场成为不同社群聚集、互动与分享的场所。蔬菜和水果变成绘画工具，儿童自由地接触动物与田野；入夜后，发光手环在稻田中留下光绘轨迹。', captions: ['圆形稻田剧场中的聚餐', '儿童与家庭共同完成稻田童画', '夜色中的稻田光绘'] },
    en: { label: 'Rural Field Laboratory · Chapter Two', title: 'Rice Field Theatre: A Table Among the Rice', intro: 'In 2017 the team chose subtraction over another complex maze. A 16-metre circle was cut into the crop, allowing twenty families to eat, paint and meet while seated inside a working rice field.', detailTitle: 'One circle, many encounters', detail: 'The field theatre became a shared setting for different communities. Fruit and vegetables became painting tools, children explored animals and the landscape, and after dark illuminated wristbands traced moving drawings through the rice.', captions: ['A shared meal inside the circular field theatre', 'Children and families create a collective field painting', 'Light painting across the rice field at dusk'] }
  },
  '2018': {
    zh: { label: '乡聚实验田 · 第三章', title: '稻垛集市：一座儿童的稻草山', intro: '团队在稻田中央收割出正方形，用脚手架和稻垛搭起金字塔形的儿童乐园，并加入蓝色滑梯和木构“稻山木谷”。活动同时容纳集市、游戏、婚礼与乡村美食。', detailTitle: '生产、游玩与乡村生活相遇', detail: '17个崇明特色摊位把本地农产品与手艺带到田边。孩子们在稻垛山上攀爬滑行，志愿者、设计师、村民和游客共同完成活动；结束后设施被拆除，土地恢复耕作。', captions: ['稻垛集市与活动场地鸟瞰', '儿童在稻垛山与蓝色滑梯上玩耍', '17个崇明特色摊位汇聚在稻田边'] },
    en: { label: 'Rural Field Laboratory · Chapter Three', title: 'Haystack Market: A Mountain for Children', intro: 'A square was harvested at the centre of the field and transformed into a pyramid playground built from scaffolding and rice bales, with a blue slide and the timber “Rice Mountain Valley.” The event held a market, play, a wedding and local food together.', detailTitle: 'Production, play and rural life meet', detail: 'Seventeen Chongming stalls brought local produce and craft to the field. Children climbed and slid across the haystack mountain while volunteers, designers, villagers and visitors made the day together. Afterwards, the structures were removed and the land returned to cultivation.', captions: ['Aerial view of the haystack market', 'Children play on the haystack mountain and blue slide', 'Seventeen local stalls gather beside the rice field'] }
  },
  '2019': {
    zh: { label: '乡聚实验田 · 第四章', title: '大暑营造与稻田摇滚', intro: '夏季，乡聚公社与西安建筑科技大学师生用十天现场设计并建成竹桥、竹亭和森林迷园，让教学成果真正服务村民。秋季，“大眼睛”形稻田成为一座开放的摇滚舞台。', detailTitle: '从解决问题到释放天赋', detail: '竹桥解决了附近村民过河的实际需要，竹亭为养殖者提供遮蔽。11月，儿童与乐队在稻田中表演，六米高的稻草模度人向包豪斯百年致意，音乐、建筑启蒙与乡村景观在此交汇。', captions: ['师生与村民站在共同搭建的竹桥上', '森林迷园的空中路径', '乐队在稻田舞台现场演出'] },
    en: { label: 'Rural Field Laboratory · Chapter Four', title: 'Summer Building and Rice Field Rock', intro: 'In summer, Xiangju and Xi’an University of Architecture and Technology students spent ten days designing and building a bamboo bridge, pavilion and forest maze that served local residents. In autumn, an eye-shaped field became an open rock stage.', detailTitle: 'From solving problems to releasing talent', detail: 'The bridge answered a practical need for nearby villagers, while the pavilion sheltered aquaculture workers. In November, children and bands performed beside a six-metre straw Modulor figure marking the Bauhaus centenary—bringing music, architectural learning and rural landscape together.', captions: ['Students and villagers on their shared bamboo bridge', 'The forest maze seen from above', 'A live band performs on the field stage'] }
  },
  '2020': {
    zh: { label: '乡聚实验田 · 第五章', title: '稻田笑脸：在特殊年份传递希望', intro: '疫情改变了相聚的方式。乡聚以“稻田笑脸”为主题，让参与者在田中组成哭泣、戴口罩与微笑三组表情，以共同创作回应不安，并祝愿生活重回健康与欢聚。', detailTitle: '艺术成为彼此连接的语言', detail: '孩子们学习折纸，彩色纸球像麦浪中的魔方；红灯笼写下祝福，本地摊主和上海美术学院师生也参与其中。活动以轻盈的艺术行动记录了社区的韧性。', captions: ['稻田中展开的笑脸图案', '参与者放飞彩色折纸作品', '孩子们在田边挂起祈福灯笼'] },
    en: { label: 'Rural Field Laboratory · Chapter Five', title: 'Rice Field Smiles: Hope in an Unusual Year', intro: 'The pandemic changed how people could gather. Xiangju responded with “Rice Field Smiles,” arranging crying, masked and smiling expressions in the crop as a collective answer to uncertainty and a wish for health and reunion.', detailTitle: 'Art as a language of connection', detail: 'Children learned paper-folding and released colourful forms like bright cubes above the grain. Red lanterns carried wishes, while local stallholders and Shanghai Academy of Fine Arts students joined a gentle record of community resilience.', captions: ['The smiling face formed within the rice field', 'Participants release colourful folded-paper forms', 'Children hang blessing lanterns beside the field'] }
  },
  '2021': {
    zh: { label: '乡聚实验田 · 第六章', title: '稻田宇宙：从儿童视角看世界', intro: '“Field Meta”从星座与宇宙获得灵感，以蝎子形的收割路径构成舞台。150余人共同收割水稻，一场稻田走秀随后在金色田野中展开。', detailTitle: '真实世界里的沉浸式秀场', detail: '项目用孩子能理解的故事组织设计，让收割、奔跑、服装与音乐自然发生在田野中。参与者不是旁观者，而是共同完成空间和表演的人。', captions: ['蝎子形收割图案的完整鸟瞰', '儿童参与水稻收割', '家庭共同走上稻田秀场'] },
    en: { label: 'Rural Field Laboratory · Chapter Six', title: 'Field Universe: Seeing Through Children’s Eyes', intro: '“Field Meta” drew on constellations and the universe, shaping a scorpion-like harvested path into a stage. More than 150 people cut the rice together before a field fashion show unfolded across the golden landscape.', detailTitle: 'An immersive show in the real world', detail: 'The project used a story children could follow, allowing harvesting, running, clothing and music to happen naturally outdoors. Visitors were not spectators but participants who completed both the place and the performance.', captions: ['Complete aerial view of the scorpion-shaped field', 'A child takes part in harvesting the rice', 'Families walk the rice field runway together'] }
  },
  '2022': {
    zh: { label: '乡聚实验田 · 第七章', title: '稻田戏剧：黄粱一梦', intro: '乡聚邀请上海大学电影学院刘正直教授带领儿童学习戏剧《黄粱一梦》，并由崇明山歌非遗传承人张顺法教授当地歌谣。悲剧与喜剧的面孔成为当年的稻田图案。', detailTitle: '戏剧、非遗与户外社交', detail: '大天幕和小帐篷为讲解、展览与休息提供空间。观众看戏、品尝故事中的黄粱米饭，并在篝火旁交流，让文化传承成为可以参与、可以感受的乡村日常。', captions: ['悲剧与喜剧面孔组成的稻田图案', '崇明山歌在稻田中被重新唱响', '儿童与家庭围绕篝火相聚'] },
    en: { label: 'Rural Field Laboratory · Chapter Seven', title: 'Rice Field Theatre: A Dream of Yellow Millet', intro: 'Professor Liu Zhengzhi from Shanghai University introduced children to the play “A Dream of Yellow Millet,” while Chongming folk-song inheritor Zhang Shunfa taught local songs. The masks of tragedy and comedy became the year’s field pattern.', detailTitle: 'Theatre, living heritage and outdoor gathering', detail: 'A large canopy and small tents supported talks, displays and rest. Visitors watched theatre, tasted the yellow-millet rice from the story and gathered around a fire, turning cultural inheritance into something participatory and felt.', captions: ['Tragic and comic faces drawn through the rice field', 'Chongming folk song returns to the field', 'Children and families gather around the fire'] }
  },
  '2023': {
    zh: { label: '乡聚实验田 · 第八章', title: '稻田和平：在希望的田野上相聚', intro: '2023年的影像从“冲突”出发，把视线重新带回崇明的土地。参与者在稻田中共同收割、围合出和平图案，并用爱情、幸运与和平回应世界的不确定，让一年一度的相聚成为温柔而坚定的公共表达。', detailTitle: '收获、分享与和平的共同语言', detail: '儿童、家庭、村民与志愿者一起进入稻田，在劳动中完成图案，也在田边集市分享本地食物和手作。人们唱歌、交流并围绕篝火相聚；设计不再只是观看的景观，而成为每个人都能参与的和平行动。', captions: ['夕阳下的稻田和平活动全景', '儿童在乡聚田野中观察与成长', '家庭在稻田活动中记录温暖时刻'] },
    en: { label: 'Rural Field Laboratory · Chapter Eight', title: 'Rice Field Peace: Gathering in a Field of Hope', intro: 'The 2023 film begins with conflict, then returns our attention to the land of Chongming. Participants harvest together and shape a peace symbol in the rice, answering uncertainty with love, luck and peace and turning the annual gathering into a gentle but resolute public statement.', detailTitle: 'A shared language of harvest, exchange and peace', detail: 'Children, families, villagers and volunteers enter the field together, completing the pattern through collective work and sharing local produce and craft at the market. Singing, conversation and a bonfire make the landscape more than something to observe: it becomes an act of peace in which everyone can take part.', captions: ['The Rice Field Peace gathering at sunset', 'A child discovers the landscape at Xiangju', 'A family records a warm moment in the field'] }
  },
  '2024': {
    zh: { label: '乡聚实验田 · 第九章', title: '稻田曲弈：在田野中落子、听曲', intro: '2024年的“稻田曲弈”把棋局、书法与戏曲带进收获后的田野。写有汉字的六边形装置成为可以移动的棋子，人在其中行走、观看和参与，让传统文化以开放、轻松的方式重新进入乡村公共生活。', detailTitle: '一盘由所有人共同完成的棋', detail: '参与者为棋子书写文字，儿童用彩色手印留下自己的痕迹；戏曲表演穿行于水稻、装置与观众之间。棋局没有唯一的观看位置，每一次移动与停留都在重新组织人与土地、传统与当代的关系。', captions: ['稻田曲弈的完整棋局鸟瞰', '参与者围绕写有汉字的田野棋子相聚', '稻田中的装置、稻草人与丰收景观'] },
    en: { label: 'Rural Field Laboratory · Chapter Nine', title: 'Rice Field Chess: Moves, Music and the Landscape', intro: 'In 2024, Rice Field Chess brought a board game, calligraphy and Chinese opera into the harvested landscape. Hexagonal pieces carrying handwritten characters could be moved through the site, allowing tradition to re-enter rural public life in an open and playful form.', detailTitle: 'A game completed by everyone', detail: 'Participants wrote on the field pieces while children added coloured handprints. Opera unfolded among rice, installations and visitors. With no single viewing position, every move and pause rearranged the relationship between people and land, and between inherited culture and contemporary life.', captions: ['Complete aerial view of Rice Field Chess', 'Participants gather around a hand-lettered field piece', 'Installations and a scarecrow within the harvest landscape'] }
  },
  '2025': {
    zh: { label: '乡聚实验田 · 第十章', title: '稻田和集：十年实践，再次汇聚', intro: '从2016年的稻田迷宫走到2025年的“稻田和集”，乡聚公社以第十次年度实践回望人与土地共同成长的轨迹。新的活动继续从真实的农事出发，让收割、艺术、表演、分享与讨论在同一片田野中自然发生。', detailTitle: '“和”是相聚，也是共同创造', detail: '影像记录了儿童与家庭进入稻田收割，也呈现戏曲、稻田沙龙和社区交流。设计在这里不是一次性的布景，而是连接不同年龄、职业与生活经验的方法；十年的累积，让这片生产性土地成为持续生长的公共文化现场。', captions: ['稻田和集活动场地与乡村环境全景', '十周年图案在稻田中展开', '从田野到餐桌的乡村美食陈列'] },
    en: { label: 'Rural Field Laboratory · Chapter Ten', title: 'Rice Field Gathering: Ten Years, Meeting Again', intro: 'From the 2016 Field Maze to the 2025 Rice Field Gathering, Xiangju’s tenth annual practice reflects on a decade of people and land growing together. The new event still begins with real agricultural work, allowing harvest, art, performance, exchange and conversation to unfold in one field.', detailTitle: 'Gathering as a form of making together', detail: 'The film follows children and families harvesting rice and brings performance, a field salon and community exchange into the same landscape. Design is not a temporary backdrop but a way to connect ages, professions and lived experience. Ten years of accumulation have made this productive land an evolving public-cultural place.', captions: ['The Rice Field Gathering within its rural setting', 'The tenth-anniversary figure shaped through the crop', 'A field-to-table display of local food'] }
  }
};
const content = {
  zh: { title: `${year}年活动与项目`, empty: '内容待补充', back: '← 返回活动与项目', brand: '乡聚公社', nav: ['首页', '活动与项目', '展览', '关于我们'], switchLabel: '切换语言', light: '浅色', dark: '深色' },
  en: { title: `${year} Events & Projects`, empty: 'Content coming soon', back: '← Back to Events & Projects', brand: 'Rural Commune', nav: ['Home', 'Events & Projects', 'Exhibition', 'About Us'], switchLabel: 'Switch language', light: 'Light', dark: 'Dark' }
};
let lang = localStorage.getItem('xiangju-language') || 'zh';
function applySavedTheme() {
  const savedTheme = localStorage.getItem('xiangju-theme');
  const theme = savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.body.classList.toggle('dark', theme === 'dark');
}
applySavedTheme();
function setupMobileYearMenu() {
  const dropdown = document.querySelector('.nav-dropdown');
  const trigger = dropdown?.querySelector(':scope > a');
  if (!dropdown || !trigger) return;
  trigger.setAttribute('aria-haspopup', 'true');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.addEventListener('click', (event) => {
    if (!window.matchMedia('(max-width: 620px)').matches) return;
    event.preventDefault();
    const open = dropdown.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(open));
  });
}
function renderYear() {
  const t = content[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = t.title;
  const brand = document.getElementById('yearBrand');
  if (brand) brand.textContent = '';
  document.getElementById('yearTitle').textContent = t.title;
  document.getElementById('yearEmpty').textContent = t.empty;
  document.getElementById('backLink').textContent = t.back;
  const routes = ['../index.html', 'index.html', '../exhibition-2.html', '../about.html'];
  const years = Array.from({ length: 10 }, (_, index) => 2025 - index);
  document.getElementById('yearNav').innerHTML = routes.map((route, index) => {
    if (index === 1) return `<div class="nav-dropdown"><a class="active" href="${route}">${t.nav[index]} <span class="nav-chevron" aria-hidden="true">⌄</span></a><div class="nav-year-menu" aria-label="${lang === 'zh' ? '选择年份' : 'Select a year'}">${years.map(item => `<a class="year-menu-link" href="${item}.html"><span class="numeric">${item}</span><span>${yearNames[lang][item]}</span></a>`).join('')}</div></div>`;
    return `<a href="${route}">${t.nav[index]}</a>`;
  }).join('');
  setupMobileYearMenu();
  const button = document.getElementById('yearLang');
  button.textContent = '中 / EN';
  button.ariaLabel = t.switchLabel;
  button.title = t.switchLabel;
  document.getElementById('yearModeText').textContent = document.documentElement.classList.contains('dark') ? t.light : t.dark;
  const media = yearMedia[year];
  const canvas = document.querySelector('.blank-canvas');
  if (media && canvas) {
    let mediaSection = document.getElementById('yearSharedMedia');
    if (!mediaSection) {
      mediaSection = document.createElement('section');
      mediaSection.id = 'yearSharedMedia';
      mediaSection.className = 'year-feature-media year-shared-media';
      canvas.insertAdjacentElement('afterend', mediaSection);
    }
    const title = lang === 'zh' ? media.zh : media.en;
    const mediaFile = media[`${lang}File`] || media.file;
    const source = media[`${lang}Src`] || `${yearMediaBase}/${yearMediaFolder}/${mediaFile}`;
    const posterFile = media[`${lang}Poster`] || media.poster || `${year}.jpg`;
    const posterSource = media.posterSrc || `../src/media/year-covers/${posterFile}`;
    mediaSection.innerHTML = `<div class="year-video-frame"><video src="${source}" poster="${posterSource}" controls preload="metadata" playsinline aria-label="${title}"></video></div><div class="year-video-copy"><p class="eyebrow">${year}</p><h2>${title}</h2><p>${lang === 'zh' ? '观看本年度乡聚活动与项目影像。' : 'Watch the film from this year’s Rural Commune events and projects.'}</p></div>`;
    document.getElementById('yearEmpty').hidden = true;
    canvas.hidden = true;
  }
  const story = yearStories[year]?.[lang];
  if (story && canvas) {
    let storySection = document.getElementById('yearStory');
    if (!storySection) {
      storySection = document.createElement('section');
      storySection.id = 'yearStory';
      storySection.className = 'year-story';
      (document.getElementById('yearSharedMedia') || canvas).insertAdjacentElement('afterend', storySection);
    }
    const storyImages = yearStoryImages[year] || [`${year}-1.jpg`, `${year}-2.jpg`, `${year}-3.jpg`];
    storySection.innerHTML = `<header class="year-story-header"><p class="eyebrow">${story.label}</p><h2>${story.title}</h2><p>${story.intro}</p></header><div class="year-story-feature"><figure><img src="../src/media/year-stories/${storyImages[0]}" alt="${story.captions[0]}" loading="lazy"><figcaption>${story.captions[0]}</figcaption></figure><div><p class="eyebrow">${year}</p><h3>${story.detailTitle}</h3><p>${story.detail}</p></div></div><div class="year-story-gallery"><figure><img src="../src/media/year-stories/${storyImages[1]}" alt="${story.captions[1]}" loading="lazy"><figcaption>${story.captions[1]}</figcaption></figure><figure><img src="../src/media/year-stories/${storyImages[2]}" alt="${story.captions[2]}" loading="lazy"><figcaption>${story.captions[2]}</figcaption></figure></div>`;
  }
}
document.getElementById('yearLang').addEventListener('click', () => {
  lang = lang === 'zh' ? 'en' : 'zh';
  localStorage.setItem('xiangju-language', lang);
  renderYear();
});
document.getElementById('yearMode').addEventListener('click', () => {
  const dark = !document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', dark);
  document.body.classList.toggle('dark', dark);
  localStorage.setItem('xiangju-theme', dark ? 'dark' : 'light');
  renderYear();
});
document.addEventListener('click', (event) => {
  if (event.target.closest('.nav-dropdown')) return;
  const dropdown = document.querySelector('.nav-dropdown.open');
  if (!dropdown) return;
  dropdown.classList.remove('open');
  dropdown.querySelector(':scope > a')?.setAttribute('aria-expanded', 'false');
});
renderYear();
