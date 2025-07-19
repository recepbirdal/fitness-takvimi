// Egzersiz veritabanı
const exerciseDB = {
    gogus: [
        { id: 1, isim: "Barbell Bench Press", zorluk: 3, set: "4x8-10" },
        { id: 2, isim: "Dumbbell Press", zorluk: 2, set: "3x10-12" },
        { id: 3, isim: "Push-up", zorluk: 1, set: "3x15-20" },
        { id: 4, isim: "Cable Fly", zorluk: 2, set: "3x12-15" },
        { id: 5, isim: "Incline Dumbbell Press", zorluk: 2, set: "3x10-12" }
    ],
    sirt: [
        { id: 6, isim: "Pull-up", zorluk: 3, set: "4x6-8" },
        { id: 7, isim: "Lat Pulldown", zorluk: 2, set: "3x10-12" },
        { id: 8, isim: "Barbell Row", zorluk: 3, set: "4x8-10" },
        { id: 9, isim: "Cable Row", zorluk: 2, set: "3x12-15" },
        { id: 10, isim: "T-Bar Row", zorluk: 2, set: "3x10-12" }
    ],
    omuz: [
        { id: 11, isim: "Military Press", zorluk: 3, set: "4x8-10" },
        { id: 12, isim: "Dumbbell Shoulder Press", zorluk: 2, set: "3x10-12" },
        { id: 13, isim: "Lateral Raise", zorluk: 1, set: "3x12-15" },
        { id: 14, isim: "Front Raise", zorluk: 1, set: "3x12-15" },
        { id: 15, isim: "Face Pull", zorluk: 2, set: "3x15-20" }
    ],
    kol: [
        { id: 16, isim: "Barbell Curl", zorluk: 2, set: "3x10-12" },
        { id: 17, isim: "Hammer Curl", zorluk: 1, set: "3x12-15" },
        { id: 18, isim: "Tricep Dips", zorluk: 3, set: "3x8-10" },
        { id: 19, isim: "Cable Tricep Extension", zorluk: 2, set: "3x12-15" },
        { id: 20, isim: "Preacher Curl", zorluk: 2, set: "3x10-12" }
    ],
    bacak: [
        { id: 21, isim: "Squat", zorluk: 3, set: "4x8-10" },
        { id: 22, isim: "Leg Press", zorluk: 2, set: "3x10-12" },
        { id: 23, isim: "Leg Extension", zorluk: 1, set: "3x12-15" },
        { id: 24, isim: "Romanian Deadlift", zorluk: 3, set: "4x8-10" },
        { id: 25, isim: "Leg Curl", zorluk: 1, set: "3x12-15" }
    ],
    core: [
        { id: 26, isim: "Plank", zorluk: 1, set: "3x60sn" },
        { id: 27, isim: "Crunch", zorluk: 1, set: "3x20-25" },
        { id: 28, isim: "Russian Twist", zorluk: 2, set: "3x15-20" },
        { id: 29, isim: "Leg Raise", zorluk: 2, set: "3x10-15" },
        { id: 30, isim: "Cable Crunch", zorluk: 2, set: "3x15-20" }
    ]
};

// Geliştirilmiş detaylı egzersiz veritabanı
const detailedExerciseDB = {
    gogus: [
        {
            id: 1,
            isim: "Barbell Bench Press",
            zorluk: 3,
            set: "4x8-10",
            teknik: "Sırt üstü yatarak barı göğüs hizasında tutun. Omuz çapından biraz geniş kavrayışla barı kontrollü şekilde göğsünüze indirin ve güçlü bir şekilde yukarı itin.",
            hedefKas: "Göğüs (pectoralis major), ön deltoid, triceps",
            ekipman: "Barbell, bench press sehpası",
            dikkatEt: [
                "Sırtınızı aşırı kamaştırmayın - doğal lordoz korunmalı",
                "Barı tam göğüs hizasına indirin, çok aşağı inmeyeceğin",
                "Bileklerinizi düz tutun ve güçlü kavrayış yapın",
                "Ayaklarınızı sağlam şekilde yere basın"
            ],
            yaygınHatalar: [
                "Çok hızlı hareket yapmak",
                "Barı göğse zıplatmak",
                "Eksik hareket açısı (yarım rep)",
                "Yanlış nefes tekniği kullanmak",
                "Simetrik olmayan bar pozisyonu"
            ],
            modifikasyonlar: {
                kolay: "Dumbbell Press, İncline Push-up, Smith Machine Bench Press",
                zor: "Pause Bench Press, Close Grip Bench Press, Deficit Bench Press"
            },
            guvenlikOnerileri: [
                "Mutlaka spotter kullanın",
                "Isınma setleri yapın",
                "Aşırı ağırlık kullanmayın"
            ]
        },
        {
            id: 2,
            isim: "Dumbbell Press",
            zorluk: 2,
            set: "3x10-12",
            teknik: "Bench üzerine sırt üstü uzanın. Dumbbell'ları omuz hizasında, dirsekler 90 derece açıyla tutun. Dumbbell'ları yukarı doğru itin ve kontrollü şekilde başlangıç pozisyonuna dönün.",
            hedefKas: "Göğüs (pectoralis major), ön deltoid, triceps, stabilizatör kaslar",
            ekipman: "Dumbbells, bench",
            dikkatEt: [
                "Dumbbell'ları çok aşağı indirmeyin - omuz esnekliğinize uygun olmalı",
                "Omuz sıkışmasına dikkat edin",
                "Simetrik hareket yapın - tek taraf baskın olmasın",
                "Core kaslarınızı aktif tutun"
            ],
            yaygınHatalar: [
                "Ağırlıkları birbirine vurma",
                "Aşırı hareket açısı yapmak",
                "Dengesiz hareket",
                "Çok hızlı tempo"
            ],
            modifikasyonlar: {
                kolay: "Hafif ağırlık ile yavaş tempo, İncline angle kullanımı",
                zor: "İncline veya Decline açısında yapma, Single arm versiyonu"
            }
        },
        {
            id: 3,
            isim: "Push-up",
            zorluk: 1,
            set: "3x15-20",
            teknik: "Plank pozisyonunda başlayın. Eller omuz çapında, vücut düz bir çizgide. Göğsü yere yaklaştırın ve güçlü bir şekilde yukarı itin.",
            hedefKas: "Göğüs, triceps, ön deltoid, core kasları",
            ekipman: "Kendi vücut ağırlığı",
            dikkatEt: [
                "Vücut düz bir çizgide olmalı - kalça çökmemeli",
                "Boyun nötr pozisyonda - aşağı/yukarı bakmamalı",
                "Tam hareket açısı yapın",
                "Nefes kontrolüne dikkat edin"
            ],
            yaygınHatalar: [
                "Kalçanın çökmesi veya yüksek olması",
                "Yarım hareket açısı",
                "Hızlı ve kontrolsüz hareket",
                "Yanlış el pozisyonu"
            ],
            modifikasyonlar: {
                kolay: "Dizüstü push-up, Duvar push-up, İncline push-up",
                zor: "Decline push-up, Diamond push-up, Single arm push-up"
            }
        }
    ],
    sirt: [
        {
            id: 6,
            isim: "Pull-up",
            zorluk: 3,
            set: "4x6-8",
            teknik: "Bardan asılın, eller omuz çapından biraz geniş. Çene bar seviyesini geçene kadar vücudunuzu yukarı çekin. Kontrollü şekilde başlangıç pozisyonuna dönün.",
            hedefKas: "Latissimus dorsi, rhomboids, middle trapezius, biceps",
            ekipman: "Pull-up bar",
            dikkatEt: [
                "Omuzları aktif tutun - sarkık durmamalı",
                "Tam hareket açısı yapın - çene bar seviyesini geçmeli",
                "Sallanmayın - kontrollü hareket",
                "Sırt kaslarını sıkıştırarak çekin"
            ],
            yaygınHatalar: [
                "Momentum kullanarak sallanma",
                "Yarım hareket açısı",
                "Boynu aşırı germe",
                "Sadece kollarla çekme"
            ],
            modifikasyonlar: {
                kolay: "Assisted Pull-up, Lat Pulldown, Negative Pull-up",
                zor: "Weighted Pull-up, L-sit Pull-up, Commando Pull-up"
            }
        },
        {
            id: 7,
            isim: "Lat Pulldown",
            zorluk: 2,
            set: "3x10-12",
            teknik: "Lat pulldown makinesinde oturun. Barı omuz çapından geniş kavrayın. Barı göğüs hizasına doğru çekin, sırt kaslarını sıkıştırın.",
            hedefKas: "Latissimus dorsi, rhomboids, middle trapezius, biceps",
            ekipman: "Lat pulldown makinesi",
            dikkatEt: [
                "Sırtınızı hafif arkaya eğin",
                "Dirsekleri vücuda yakın tutun",
                "Sırt kaslarını kullanarak çekin",
                "Kontrollü geri dönüş yapın"
            ],
            yaygınHatalar: [
                "Çok arkaya yaslanma",
                "Momentum kullanma",
                "Sadece kollarla çekme",
                "Aşırı ağırlık kullanma"
            ],
            modifikasyonlar: {
                kolay: "Hafif ağırlık ile yavaş tempo",
                zor: "Wide grip, Close grip, Single arm versiyonu"
            }
        }
    ],
    bacak: [
        {
            id: 21,
            isim: "Squat",
            zorluk: 3,
            set: "4x8-10",
            teknik: "Ayaklar omuz çapında, parmak uçları hafif dışa dönük. Kalçalarınızı geriye iterek dizlerinizi bükerek squat pozisyonuna inin. Topukları yerden kesmeden ayağa kalkın.",
            hedefKas: "Quadriceps, gluteus, hamstring, calves, core",
            ekipman: "Barbell, squat rack (opsiyonel)",
            dikkatEt: [
                "Dizler parmak uçları hizasında - içe kapanmamalı",
                "Sırt düz tutun - öne eğilmeyin",
                "Topukları yerden kesmeyin",
                "Kalça dominantlı hareket yapın"
            ],
            yaygınHatalar: [
                "Dizlerin içe kapanması",
                "Aşırı öne eğilme",
                "Topukların kalkması",
                "Yetersiz derinlik"
            ],
            modifikasyonlar: {
                kolay: "Bodyweight squat, Box squat, Goblet squat",
                zor: "Front squat, Bulgarian split squat, Jump squat"
            }
        },
        {
            id: 22,
            isim: "Leg Press",
            zorluk: 2,
            set: "3x10-12",
            teknik: "Leg press makinesine oturun. Ayakları platform üzerine omuz çapında yerleştirin. Dizleri 90 derece bükerek ağırlığı kontrollü şekilde indirin ve güçlü bir şekilde itin.",
            hedefKas: "Quadriceps, gluteus, hamstring",
            ekipman: "Leg press makinesi",
            dikkatEt: [
                "Sırtınızı sehpaya tam yapıştırın",
                "Dizleri 90 derece kadar büküp daha fazla indirmeyin",
                "Topuk ve parmak ucu eşit basınç",
                "Kontrollu hareket yapın"
            ],
            yaygınHatalar: [
                "Aşırı derinliğe inme",
                "Dizleri kilitleyerek bırakma",
                "Sırtı sehpadan ayırma",
                "Tek ayakla itme"
            ],
            modifikasyonlar: {
                kolay: "Hafif ağırlık ile tam hareket açısı",
                zor: "Single leg press, High feet position"
            }
        }
    ]
};

// Global değişkenler
let currentUser = null;
let selectedDay = null;
let currentProgram = [];
let currentExerciseContext = null;
let aiSuggestions = [];
let selectedSuggestions = [];

// OpenAI API Key - Buraya kendi API key'inizi koyun
const OPENAI_API_KEY = 'YOUR_API_KEY_HERE'; // ⚠️ GÜVENLİK UYARISI: Production'da bu key'i backend'de saklayın!

// Sayfa yüklendiğinde
window.onload = function() {
    checkAuth();
    loadUserData();
    displayWeekView();
    displayCurrentWeek();
    initializeEventListeners();

    // Hızlı yanıt butonlarını ekle
    setTimeout(() => {
        if (document.getElementById('chatInput')) {
            addQuickResponseButtons();
        }
    }, 1000);

    // Ek stiller ekle
    addAdditionalStyles();
};

// Kimlik doğrulama kontrolü
function checkAuth() {
    const username = localStorage.getItem('currentUser');
    if (!username) {
        window.location.href = 'index.html';
        return;
    }
}

// Kullanıcı verilerini yükle
function loadUserData() {
    const username = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    currentUser = users.find(u => u.username === username);

    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }

    // UI güncelle
    document.getElementById('welcomeUser').textContent = `Hoş geldin, ${escapeHtml(username)}!`;
    document.getElementById('username').textContent = escapeHtml(username);
    document.getElementById('userKilo').textContent = currentUser.profile.kilo || '--';
    document.getElementById('userBoy').textContent = currentUser.profile.boy || '--';
    document.getElementById('userTecrube').textContent =
        currentUser.profile.tecrube ?
            currentUser.profile.tecrube.charAt(0).toUpperCase() + currentUser.profile.tecrube.slice(1) :
            '--';
    document.getElementById('userGunSayisi').textContent =
        currentUser.profile.sporGunleri ? currentUser.profile.sporGunleri.length : 0;
    document.getElementById('userAvatar').textContent = username.charAt(0).toUpperCase();

    // Program yoksa oluştur
    if (!currentUser.takvim || currentUser.takvim.length === 0) {
        generateNewProgram();
    } else {
        currentProgram = currentUser.takvim;
    }
}

// HTML escape fonksiyonu
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Haftalık görünüm
function displayWeekView() {
    const weekView = document.getElementById('weekView');
    const gunler = ['pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'cumartesi', 'pazar'];
    const gunIsimleri = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

    weekView.innerHTML = '';

    // Bugünün gününü hesapla
    const today = new Date();
    const todayDayIndex = (today.getDay() + 6) % 7; // Pazartesi = 0

    gunler.forEach((gun, index) => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';

        // Bugün işaretleme
        if (index === todayDayIndex) {
            dayCard.classList.add('today');
        }

        const isWorkoutDay = currentUser.profile.sporGunleri && currentUser.profile.sporGunleri.includes(gun);
        if (!isWorkoutDay) {
            dayCard.classList.add('rest-day');
            dayCard.onclick = () => showToast('Bu bir dinlenme günü');
        } else {
            dayCard.onclick = () => selectDay(gun);
        }

        const dayProgram = currentProgram.find(p => p.gun === gun);

        dayCard.innerHTML = `
            <div class="day-name">${gunIsimleri[index]}</div>
            ${isWorkoutDay ?
            (dayProgram ?
                `<div class="workout-type">${dayProgram.tip}</div>
                     <div class="exercise-count">${dayProgram.egzersizler.length} egzersiz</div>` :
                '<div class="exercise-count">Program bekleniyor</div>') :
            '<div class="exercise-count">Dinlenme</div>'}
        `;

        weekView.appendChild(dayCard);
    });
}

// Mevcut hafta
function displayCurrentWeek() {
    const today = new Date();
    const firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7));

    const options = { day: 'numeric', month: 'long' };
    document.getElementById('currentWeek').textContent =
        `${firstDay.toLocaleDateString('tr-TR', options)} - ${lastDay.toLocaleDateString('tr-TR', options)}`;
}

// Gün seçimi
function selectDay(gun) {
    if (!currentUser.profile.sporGunleri.includes(gun)) return;

    selectedDay = gun;

    // Aktif günü işaretle
    document.querySelectorAll('.day-card').forEach((card, index) => {
        const gunler = ['pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'cumartesi', 'pazar'];
        if (gunler[index] === gun) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Bottom sheet'i göster
    showBottomSheet(gun);
}

// Bottom sheet göster
function showBottomSheet(gun) {
    const bottomSheet = document.getElementById('bottomSheet');
    const backdrop = document.getElementById('backdrop');
    const title = document.getElementById('bottomSheetTitle');
    const content = document.getElementById('exerciseContent');

    const dayProgram = currentProgram.find(p => p.gun === gun);

    title.textContent = `${gun.charAt(0).toUpperCase() + gun.slice(1)} Antrenmanı`;

    if (!dayProgram) {
        content.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📅</div>
                <p>Bu gün için program oluşturulmamış</p>
            </div>
        `;
    } else {
        content.innerHTML = `
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1rem; border-radius: 15px; margin-bottom: 1rem; text-align: center;">
                <h4 style="margin: 0; font-size: 1.1rem;">${dayProgram.tip}</h4>
                <p style="margin: 0.5rem 0 0; opacity: 0.9; font-size: 0.9rem;">${dayProgram.egzersizler.length} egzersiz</p>
            </div>
            <div class="exercise-list">
                ${dayProgram.egzersizler.map(egz => `
                    <div class="exercise-item">
                        <div class="exercise-info">
                            <div class="exercise-name">${escapeHtml(egz.isim)}</div>
                            <div class="exercise-sets">${egz.set}</div>
                        </div>
                        <button class="difficulty-btn" onclick="reportDifficult(${egz.id}, '${gun}')">
                            <span class="chat-icon">💬</span>
                            AI Koç
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    backdrop.classList.add('show');
    bottomSheet.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Bottom sheet kapat
function closeBottomSheet() {
    const bottomSheet = document.getElementById('bottomSheet');
    const backdrop = document.getElementById('backdrop');

    backdrop.classList.remove('show');
    bottomSheet.classList.remove('show');
    document.body.style.overflow = '';

    // Aktif gün işaretini kaldır
    document.querySelectorAll('.day-card').forEach(card => {
        card.classList.remove('active');
    });
}

// Toast mesajı göster
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Program oluşturma algoritması
function generateNewProgram() {
    const generateBtn = document.getElementById('generateBtn');
    const generateBtnText = document.getElementById('generateBtnText');
    const generateBtnLoader = document.getElementById('generateBtnLoader');

    // Yükleme durumunu ayarla
    generateBtn.disabled = true;
    generateBtnText.style.display = 'none';
    generateBtnLoader.style.display = 'inline-block';

    setTimeout(() => {
        try {
            const { sporGunleri, tecrube } = currentUser.profile;
            currentProgram = [];

            // Zorluk seviyesi
            const maxZorluk = tecrube === 'baslangic' ? 2 : tecrube === 'orta' ? 3 : 4;

            if (!sporGunleri || sporGunleri.length === 0) {
                showToast('Lütfen antrenman günlerini ayarlayın');
                return;
            }

            if (sporGunleri.length <= 3) {
                // Full-body program
                sporGunleri.forEach(gun => {
                    const egzersizler = [];

                    // Her kas grubundan 1-2 egzersiz
                    ['gogus', 'sirt', 'omuz', 'bacak'].forEach(kasGrubu => {
                        const uygunEgzersizler = exerciseDB[kasGrubu].filter(e => e.zorluk <= maxZorluk);
                        shuffleArray(uygunEgzersizler);
                        egzersizler.push(uygunEgzersizler[0]);
                        if (Math.random() > 0.5 && uygunEgzersizler.length > 1) {
                            egzersizler.push(uygunEgzersizler[1]);
                        }
                    });

                    // Core egzersizi ekle
                    const coreEgzersizi = exerciseDB.core[Math.floor(Math.random() * 2)];
                    egzersizler.push(coreEgzersizi);

                    currentProgram.push({
                        gun: gun,
                        tip: 'Full Body',
                        egzersizler: egzersizler
                    });
                });
            } else if (sporGunleri.length === 4) {
                // Upper/Lower split
                const upperDays = [sporGunleri[0], sporGunleri[2]];
                const lowerDays = [sporGunleri[1], sporGunleri[3]];

                upperDays.forEach(gun => {
                    const egzersizler = [];
                    ['gogus', 'sirt', 'omuz', 'kol'].forEach(kasGrubu => {
                        const uygunEgzersizler = exerciseDB[kasGrubu].filter(e => e.zorluk <= maxZorluk);
                        shuffleArray(uygunEgzersizler);
                        egzersizler.push(uygunEgzersizler[0]);
                    });

                    currentProgram.push({
                        gun: gun,
                        tip: 'Üst Vücut',
                        egzersizler: egzersizler
                    });
                });

                lowerDays.forEach(gun => {
                    const egzersizler = [];
                    const bacakEgzersizleri = exerciseDB.bacak.filter(e => e.zorluk <= maxZorluk);
                    shuffleArray(bacakEgzersizleri);

                    // 3 bacak egzersizi
                    for (let i = 0; i < 3; i++) {
                        if (bacakEgzersizleri[i]) {
                            egzersizler.push(bacakEgzersizleri[i]);
                        }
                    }

                    // 2 core egzersizi
                    shuffleArray(exerciseDB.core);
                    egzersizler.push(exerciseDB.core[0]);
                    egzersizler.push(exerciseDB.core[1]);

                    currentProgram.push({
                        gun: gun,
                        tip: 'Alt Vücut',
                        egzersizler: egzersizler
                    });
                });
            } else {
                // 5+ gün - Kas grubu split
                const kasGruplari = ['gogus', 'sirt', 'omuz', 'bacak', 'kol'];
                sporGunleri.forEach((gun, index) => {
                    const kasGrubu = kasGruplari[index % kasGruplari.length];
                    const egzersizler = [];

                    const uygunEgzersizler = exerciseDB[kasGrubu].filter(e => e.zorluk <= maxZorluk);
                    shuffleArray(uygunEgzersizler);

                    // Ana kas grubu için 3-4 egzersiz
                    for (let i = 0; i < Math.min(4, uygunEgzersizler.length); i++) {
                        egzersizler.push(uygunEgzersizler[i]);
                    }

                    // Core egzersizi ekle
                    if (Math.random() > 0.5) {
                        const coreEgzersiz = exerciseDB.core[Math.floor(Math.random() * exerciseDB.core.length)];
                        egzersizler.push(coreEgzersiz);
                    }

                    currentProgram.push({
                        gun: gun,
                        tip: kasGrubu.charAt(0).toUpperCase() + kasGrubu.slice(1),
                        egzersizler: egzersizler
                    });
                });
            }

            // Programı kaydet
            saveProgram();
            displayWeekView();
            showToast('🎉 Yeni program başarıyla oluşturuldu!');
        } catch (error) {
            console.error('Program oluşturma hatası:', error);
            showToast('❌ Program oluşturulurken hata oluştu', 5000);
        } finally {
            // Yükleme durumunu kaldır
            generateBtn.disabled = false;
            generateBtnText.style.display = 'inline-block';
            generateBtnLoader.style.display = 'none';
        }
    }, 1000); // Yapay gecikme
}

// Array karıştırma
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Zor gelen egzersiz bildirimi (AI Chat için güncellendi)
function reportDifficult(exerciseId, gun) {
    // Mevcut egzersizi context olarak sakla
    currentExerciseContext = {
        exerciseId: exerciseId,
        gun: gun,
        exercise: findExerciseById(exerciseId)
    };

    // Chat modal'ı aç
    openChatModal();
}

// Egzersizi ID'ye göre bul
function findExerciseById(id) {
    for (const [grup, exercises] of Object.entries(exerciseDB)) {
        const found = exercises.find(e => e.id === id);
        if (found) {
            return { ...found, kasGrubu: grup };
        }
    }
    return null;
}

// Chat modal'ı aç
function openChatModal() {
    const modal = document.getElementById('aiChatModal');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const suggestionContainer = document.getElementById('suggestionContainer');

    // Reset
    chatMessages.innerHTML = '';
    chatInput.value = '';
    suggestionContainer.style.display = 'none';
    aiSuggestions = [];
    selectedSuggestions = [];

    // Hoş geldin mesajı
    addChatMessage('ai', `Merhaba! 👋 ${currentExerciseContext.exercise.isim} egzersizi ile ilgili size nasıl yardımcı olabilirim? 

Örneğin:
• "Dizim ağrıyor"
• "Çok kolay geldi"
• "Form konusunda zorlanıyorum"
• "Daha hafif alternatif istiyorum"

gibi durumları benimle paylaşabilirsiniz.`);

    modal.classList.add('show');
    chatInput.focus();
}

// Chat modal'ı kapat
function closeChatModal() {
    document.getElementById('aiChatModal').classList.remove('show');
}

// Markdown formatını destekleyen mesaj ekleme fonksiyonu
function addChatMessage(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;

    const time = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

    // Basit markdown desteği
    const formattedMessage = formatMarkdown(message);

    messageDiv.innerHTML = `
        ${sender === 'ai' ? '<div class="ai-badge">🤖 AI Koç</div>' : ''}
        <div class="message-bubble">${formattedMessage}</div>
        <div class="message-time">${time}</div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Basit markdown formatlaması
function formatMarkdown(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^### (.*$)/gm, '<h4>$1</h4>')
        .replace(/^## (.*$)/gm, '<h3>$1</h3>')
        .replace(/^# (.*$)/gm, '<h2>$1</h2>')
        .replace(/^• (.*$)/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
        .replace(/\n/g, '<br>');
}

// Typing indicator göster
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message ai';
    typingDiv.id = 'typingIndicator';

    typingDiv.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;

    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Typing indicator kaldır
function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// Enter tuşu ile mesaj gönder
function handleChatKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendChatMessage();
    }
}

// Gelişmiş mesaj gönderme fonksiyonu
async function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();

    if (!message) return;

    // Kullanıcı mesajını ekle
    addChatMessage('user', message);
    chatInput.value = '';
    chatInput.disabled = true;
    document.querySelector('.chat-send-btn').disabled = true;

    // Typing indicator
    showTypingIndicator();

    try {
        // Gelişmiş AI analizi kullan
        const analysis = await analyzeUserFeedbackDetailed(message);

        removeTypingIndicator();

        // AI yanıtını ekle (Markdown formatında)
        addChatMessage('ai', analysis.response);

        // Eğer öneriler varsa göster
        if (analysis.suggestions && analysis.suggestions.length > 0) {
            aiSuggestions = analysis.suggestions;
            showSuggestions(analysis.suggestions);
        }

    } catch (error) {
        removeTypingIndicator();
        addChatMessage('ai', '❌ Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.');
        console.error('AI Error:', error);
    } finally {
        chatInput.disabled = false;
        document.querySelector('.chat-send-btn').disabled = false;
        chatInput.focus();
    }
}

// Detaylı egzersiz bilgisini getir
function getDetailedExerciseInfo(exerciseId) {
    for (const [grup, exercises] of Object.entries(detailedExerciseDB)) {
        const found = exercises.find(e => e.id === exerciseId);
        if (found) {
            return { ...found, kasGrubu: grup };
        }
    }
    // Eğer detaylı bilgi yoksa, temel bilgiyi kullan
    return currentExerciseContext.exercise;
}

// Gelişmiş AI analiz sistemi
async function analyzeUserFeedbackDetailed(userInput) {
    const currentExercise = currentExerciseContext.exercise;
    const userProfile = currentUser.profile;

    // Detaylı egzersiz bilgisini al
    const detailedExercise = getDetailedExerciseInfo(currentExercise.id);

    return simulateDetailedAIResponse(userInput, detailedExercise, userProfile);
}

// Gelişmiş AI yanıt simülasyonu
function simulateDetailedAIResponse(userInput, detailedExercise, userProfile) {
    const lowerInput = userInput.toLowerCase();
    let response = '';
    let suggestions = [];

    // Form ve teknik soruları için detaylı açıklama
    if (lowerInput.includes('form') || lowerInput.includes('teknik') || lowerInput.includes('nasıl')) {
        response = generateTechniqueResponse(detailedExercise);
        suggestions = getFormFriendlyAlternatives(detailedExercise);
    }
    // Ağrı ve rahatsızlık durumları
    else if (lowerInput.includes('ağrı') || lowerInput.includes('acı') || lowerInput.includes('rahatsız')) {
        response = generatePainResponse(userInput, detailedExercise);
        suggestions = getSafeAlternatives(detailedExercise, userInput);
    }
    // Zorluk seviyeleri
    else if (lowerInput.includes('kolay') || lowerInput.includes('basit')) {
        response = generateProgressionResponse(detailedExercise, 'harder');
        suggestions = getHarderAlternatives(detailedExercise);
    }
    else if (lowerInput.includes('zor') || lowerInput.includes('ağır') || lowerInput.includes('yapamıyorum')) {
        response = generateRegressionResponse(detailedExercise, userProfile);
        suggestions = getEasierAlternatives(detailedExercise);
    }
    // Genel sorular
    else {
        response = generateGeneralResponse(detailedExercise, userInput);
        suggestions = getGeneralAlternatives(detailedExercise);
    }

    return {
        response: response,
        suggestions: suggestions
    };
}

// Teknik açıklaması oluştur
function generateTechniqueResponse(exercise) {
    return `🎯 **${exercise.isim} - Detaylı Teknik Rehberi**

**📋 Adım Adım Teknik:**
${exercise.teknik || 'Kontrollü ve doğru form ile gerçekleştirin.'}

**🎯 Hedef Kaslar:**
${exercise.hedefKas || 'Ana kas grupları'}

**⚠️ Dikkat Edilmesi Gerekenler:**
${exercise.dikkatEt ? exercise.dikkatEt.map(item => `• ${item}`).join('\n') : '• Kontrollü hareket yapın\n• Nefes kontrolüne dikkat edin'}

**❌ Yaygın Hatalar:**
${exercise.yaygınHatalar ? exercise.yaygınHatalar.map(item => `• ${item}`).join('\n') : '• Çok hızlı hareket\n• Yanlış form'}

**💡 Pro İpuçları:**
• Hareketi ayna karşısında kontrol edin
• Ağırlığı azaltıp form üzerine odaklanın
• Nefes verirken kaldırın, alırken indirin
• Her tekrarı 2-3 saniye sürecek şekilde yapın

Size daha kolay form öğrenebileceğiniz alternatifler de önerebilirim:`;
}

// Ağrı durumu yanıtı
function generatePainResponse(userInput, exercise) {
    const painArea = detectPainArea(userInput);

    let response = `🚨 **Ağrı Durumu Değerlendirmesi - ${exercise.isim}**

`;

    switch(painArea) {
        case 'diz':
            response += `**Diz Ağrısı Analizi:**
• ${exercise.isim} egzersizi diz eklemine yük bindiren bir hareket
• Diz ağrısı ciddi bir durumdur ve göz ardı edilmemelidir
• Hareket açınızı sınırlayın veya egzersizi durdurun

**Öneriler:**
• Egzersiz öncesi 10 dakika ısınma yapın
• Diz bandajı kullanmayı düşünün
• Ağırlığı %50 azaltın
• Hareket açısını sınırlayın (90 derece maksimum)

**⚠️ Uyarı:** Ağrı devam ederse mutlaka bir fizyoterapiste danışın.`;
            break;

        case 'sirt':
            response += `**Sırt/Bel Ağrısı Analizi:**
• ${exercise.isim} bel bölgesine yük bindiriyor olabilir
• Yanlış postür ağrının ana nedeni olabilir
• Core kaslarınız yeterince güçlü olmayabilir

**Acil Öneriler:**
• Hemen egzersizi durdurun
• Sırtınızı destekleyen bir yüzeye yaslanın
• Hafif germe hareketleri yapın

**Önleme Stratejileri:**
• Core güçlendirme egzersizlerine odaklanın
• Plank ve dead bug gibi stabilizasyon hareketleri yapın
• Ağırlığı önemli ölçüde azaltın`;
            break;

        case 'omuz':
            response += `**Omuz Ağrısı Analizi:**
• Omuz eklemi çok hassas bir bölgedir
• ${exercise.isim} omuz sıkışmasına neden olabilir
• Hareket açınız aşırı geniş olabilir

**Düzeltici Yaklaşım:**
• Hareket açınızı daraltın
• Ağırlığı en az %40 azaltın
• Sıcak uygulama yapın (egzersiz öncesi)
• Soğuk uygulama yapın (egzersiz sonrası)`;
            break;

        default:
            response += `**Genel Ağrı Değerlendirmesi:**
• Ağrı vücudunuzun bir uyarı sinyalidir
• ${exercise.isim} egzersizini geçici olarak bırakın
• Alternatif egzersizlerle devam edin

**Genel Öneriler:**
• 24-48 saat dinlendirin
• Hafif germe ve mobilizasyon yapın
• Anti-inflamatuar besinler tüketin
• Bol su için`;
    }

    response += `

Acil durumda doktora başvurmayı unutmayın. Size güvenli alternatifler öneriyorum:`;

    return response;
}

// Ağrı bölgesi tespit et
function detectPainArea(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('diz') || lowerInput.includes('knee')) return 'diz';
    if (lowerInput.includes('sırt') || lowerInput.includes('bel') || lowerInput.includes('back')) return 'sirt';
    if (lowerInput.includes('omuz') || lowerInput.includes('shoulder')) return 'omuz';
    if (lowerInput.includes('bilek') || lowerInput.includes('wrist')) return 'bilek';
    if (lowerInput.includes('boyun') || lowerInput.includes('neck')) return 'boyun';

    return 'genel';
}

// İlerleme yanıtı (egzersiz kolay geldiğinde)
function generateProgressionResponse(exercise, direction) {
    if (direction === 'harder') {
        return `🚀 **Harika! Gelişim Gösteriyorsunuz - ${exercise.isim}**

**📈 İlerleme Analizi:**
• ${exercise.isim} artık size kolay geliyor
• Bu, kas gücünüzün ve dayanıklılığınızın arttığının göstergesi
• Yeni zorluklar için hazırsınız!

**🔥 İlerleme Seçenekleri:**

**1. Ağırlık Artışı:**
• Mevcut ağırlığı %5-10 artırın
• Aynı tekrar sayısını koruyun
• 2 hafta boyunca bu ağırlıkla çalışın

**2. Volüm Artışı:**
• Tekrar sayısını 2-3 artırın
• Ekstra 1 set ekleyin
• Toplam antrenman volümünü artırın

**3. Tempo Değişikliği:**
• Negatif fazı 3-4 saniyeye çıkarın
• Pause rep'ler ekleyin (alt pozisyonda 2 saniye bekleyin)
• Eksplosif hareket yapın

**4. Gelişmiş Varyasyonlar:**
Size daha zorlu varyasyonlar öneriyorum. Bu egzersizler kas gelişiminizi hızlandıracak:`;
    }

    return '';
}

// Gerileme yanıtı (egzersiz zor geldiğinde)
function generateRegressionResponse(exercise, userProfile) {
    return `💪 **Endişelenmeyin! Her Başlangıç Zordur - ${exercise.isim}**

**🎯 Durum Analizi:**
• ${exercise.isim} şu anda seviyenize göre zorlu
• Bu tamamen normal ve beklenen bir durum
• Doğru yaklaşımla kısa sürede ilerleme kaydedeceksiniz

**📊 Tecrübe Seviyeniz: ${userProfile.tecrube || 'Bilinmiyor'}**

**🔧 Önerilen Yaklaşım:**

**1. Ağırlık Azaltma:**
• Mevcut ağırlığı %30-50 azaltın
• Form mükemmelliğine odaklanın
• Kas-zihin bağlantısını kurun

**2. Hareket Açısı Sınırlaması:**
• Tam hareket açısının %70'ini kullanın
• Ağrısız hareket aralığında kalın
• Kademeli olarak hareket açısını artırın

**3. Tempo Kontrolü:**
• Her tekrarı 4-6 saniyede tamamlayın
• 2 saniye kaldırın, 2 saniye indirin
• Kontrolü asla kaybetmeyin

**4. Destek Kullanımı:**
• Partner yardımı alın
• Assisted versiyonlarını deneyin
• Makine varyasyonlarını tercih edin

**⏱️ İlerleme Planı:**
• Hafta 1-2: Form öğrenimi
• Hafta 3-4: Ağırlık artışı (%5-10)
• Hafta 5-6: Tekrar sayısı artışı
• Hafta 7+: Normal programa geçiş

Size daha kolay alternatifleri öneriyorum:`;
}

// Genel yanıt oluştur
function generateGeneralResponse(exercise, userInput) {
    return `🤖 **AI Koç Analizi - ${exercise.isim}**

**📋 Egzersiz Özeti:**
• **Hedef Kaslar:** ${exercise.hedefKas || 'Ana kas grupları'}
• **Zorluk Seviyesi:** ${'⭐'.repeat(exercise.zorluk)} (5 üzerinden ${exercise.zorluk})
• **Önerilen Set/Tekrar:** ${exercise.set}

**🎯 Bu Egzersizin Faydaları:**
• Hedef kas grubunu etkili şekilde çalıştırır
• Fonksiyonel güç gelişimi sağlar
• Koordinasyon ve denge becerilerini artırır

**💡 Optimize Etme İpuçları:**
• Her set arasında 2-3 dakika dinlenin
• Son 2-3 tekrarın zorlu olmasını sağlayın
• İlerleme kaydetmek için ağırlık/tekrar notları tutun
• Haftada 2-3 kez bu kas grubunu çalıştırın

**🔄 Varyasyon Önerileri:**
• Farklı açılardan çalışma
• Tempo değişiklikleri
• Superset kombinasyonları

Geri bildiriminize göre size uygun alternatifler sunuyorum:`;
}

// Güvenli alternatifler (ağrı durumunda)
function getSafeAlternatives(exercise, userInput) {
    const painArea = detectPainArea(userInput);
    const kasGrubu = exercise.kasGrubu;

    let safeExercises = [];

    switch(painArea) {
        case 'diz':
            if (kasGrubu === 'bacak') {
                safeExercises = [
                    { id: 22, isim: 'Leg Press', reason: 'Kapalı kinetik zincir - dize daha az yük', set: '3x15-20' },
                    { id: 25, isim: 'Leg Curl', reason: 'İzole hareket - diz eklemine minimal yük', set: '3x12-15' },
                    { id: 999, isim: 'Duvar Squat', reason: 'Destek ile güvenli hareket', set: '3x10-15' }
                ];
            }
            break;

        case 'sirt':
            safeExercises = [
                { id: 22, isim: 'Leg Press', reason: 'Bel desteği var - güvenli', set: '3x12-15' },
                { id: 7, isim: 'Lat Pulldown', reason: 'Oturarak - bel desteği', set: '3x10-12' },
                { id: 998, isim: 'Göğüs Presi Makinesi', reason: 'Sırt desteği ile güvenli', set: '3x10-12' }
            ];
            break;

        case 'omuz':
            safeExercises = [
                { id: 997, isim: 'Duvar İtmesi', reason: 'Minimal omuz yükü', set: '3x15-20' },
                { id: 996, isim: 'İzometrik Tutma', reason: 'Hareket yok - güvenli', set: '3x30sn' },
                { id: 995, isim: 'Hafif Theraband', reason: 'Dirençli çalışma', set: '3x15-20' }
            ];
            break;
    }

    return safeExercises.length > 0 ? safeExercises : getEasierAlternatives(exercise);
}

// Daha zor alternatifler
function getHarderAlternatives(exercise) {
    const kasGrubu = exercise.kasGrubu;
    return exerciseDB[kasGrubu]
        .filter(e => e.zorluk > exercise.zorluk)
        .map(e => ({
            ...e,
            reason: `Zorluk: ${'⭐'.repeat(e.zorluk)} - Daha fazla kas lifi aktive eder`
        }))
        .slice(0, 3);
}

// Daha kolay alternatifler
function getEasierAlternatives(exercise) {
    const kasGrubu = exercise.kasGrubu;
    return exerciseDB[kasGrubu]
        .filter(e => e.zorluk < exercise.zorluk)
        .map(e => ({
            ...e,
            reason: `Zorluk: ${'⭐'.repeat(e.zorluk)} - Form öğrenmek için ideal`
        }))
        .slice(0, 3);
}

// Form dostu alternatifler
function getFormFriendlyAlternatives(exercise) {
    const kasGrubu = exercise.kasGrubu;
    return exerciseDB[kasGrubu]
        .filter(e => e.zorluk <= 2 && e.id !== exercise.id)
        .map(e => ({
            ...e,
            reason: 'Makine veya sabit hareket - Form öğrenmek için ideal'
        }))
        .slice(0, 3);
}

// Genel alternatifler
function getGeneralAlternatives(exercise) {
    const kasGrubu = exercise.kasGrubu;
    return exerciseDB[kasGrubu]
        .filter(e => e.id !== exercise.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(e => ({
            ...e,
            reason: 'Kas grubunu farklı açıdan çalıştırır'
        }));
}

// Önerileri göster
function showSuggestions(suggestions) {
    const container = document.getElementById('suggestionContainer');
    const list = document.getElementById('suggestionList');

    // Önce container'ı temizle
    container.innerHTML = '';

    // Suggestion list div'ini oluştur
    const suggestionListDiv = document.createElement('div');
    suggestionListDiv.id = 'suggestionList';
    suggestionListDiv.innerHTML = suggestions.map((sug, index) => `
        <div class="suggestion-item" onclick="toggleSuggestion(${index})">
            <div class="suggestion-exercise">${sug.isim}</div>
            <div class="suggestion-reason">${sug.reason}</div>
            <div class="suggestion-sets">${sug.set}</div>
        </div>
    `).join('');

    // Uygula butonu oluştur
    const applyBtn = document.createElement('button');
    applyBtn.className = 'apply-suggestions-btn';
    applyBtn.innerHTML = '✅ Seçili Önerileri Uygula';
    applyBtn.onclick = applySuggestions;
    applyBtn.disabled = true;

    // Container'a ekle
    container.appendChild(suggestionListDiv);
    container.appendChild(applyBtn);
    container.style.display = 'block';
}

// Öneri seçimi
function toggleSuggestion(index) {
    const items = document.querySelectorAll('.suggestion-item');
    const item = items[index];
    const suggestion = aiSuggestions[index];

    if (item.classList.contains('selected')) {
        item.classList.remove('selected');
        selectedSuggestions = selectedSuggestions.filter(s => s.id !== suggestion.id);
    } else {
        item.classList.add('selected');
        selectedSuggestions.push(suggestion);
    }

    // Buton durumunu güncelle
    const applyBtn = document.querySelector('.apply-suggestions-btn');
    applyBtn.disabled = selectedSuggestions.length === 0;
}

// Önerileri uygula
function applySuggestions() {
    if (selectedSuggestions.length === 0) {
        showToast('❌ Lütfen en az bir öneri seçin');
        return;
    }

    const { gun, exerciseId } = currentExerciseContext;
    const dayProgram = currentProgram.find(p => p.gun === gun);

    if (!dayProgram) {
        showToast('❌ Program bulunamadı');
        return;
    }

    // Mevcut egzersizin indexini bul
    const exerciseIndex = dayProgram.egzersizler.findIndex(e => e.id === exerciseId);

    if (exerciseIndex === -1) {
        showToast('❌ Egzersiz bulunamadı');
        return;
    }

    // Egzersizi seçilen önerilerle değiştir
    if (selectedSuggestions.length === 1) {
        // Tek öneri varsa direkt değiştir
        dayProgram.egzersizler[exerciseIndex] = selectedSuggestions[0];
    } else {
        // Birden fazla öneri varsa, mevcut egzersizi kaldır ve yenilerini ekle
        dayProgram.egzersizler.splice(exerciseIndex, 1, ...selectedSuggestions);
    }

    // AI geri bildirimini kaydet
    if (!currentUser.aiFeedbacks) {
        currentUser.aiFeedbacks = [];
    }

    currentUser.aiFeedbacks.push({
        date: new Date().toISOString(),
        originalExercise: currentExerciseContext.exercise,
        selectedAlternatives: selectedSuggestions,
        gun: gun
    });

    // Kaydet ve güncelle
    saveProgram();
    closeChatModal();
    displayWeekView();

    // Bottom sheet'i güncelle
    if (selectedDay === gun) {
        showBottomSheet(gun);
    }

    showToast('✅ Program başarıyla güncellendi!');
}

// Hızlı yanıt butonları ekle
function addQuickResponseButtons() {
    const quickResponses = [
        "Dizim ağrıyor",
        "Çok kolay geldi",
        "Form nasıl olmalı?",
        "Daha zor alternatif istiyorum",
        "Sırtım ağrıyor",
        "Teknik detaylarını anlat"
    ];

    const chatInput = document.getElementById('chatInput');
    const container = chatInput.parentElement;

    const quickResponseDiv = document.createElement('div');
    quickResponseDiv.className = 'quick-responses';
    quickResponseDiv.innerHTML = quickResponses.map(response =>
        `<button class="quick-response-btn" onclick="useQuickResponse('${response}')">${response}</button>`
    ).join('');

    container.insertBefore(quickResponseDiv, chatInput);
}

// Hızlı yanıt kullan
function useQuickResponse(response) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value = response;
    sendChatMessage();
}

// Ek CSS stilleri
function addAdditionalStyles() {
    const additionalStyles = `
        <style>
        .quick-responses {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
            padding: 10px;
        }

        .quick-response-btn {
            background: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: 15px;
            padding: 8px 12px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .quick-response-btn:hover {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }

        .message-bubble h2, .message-bubble h3, .message-bubble h4 {
            margin: 10px 0 5px 0;
            color: #333;
        }

        .message-bubble ul {
            margin: 10px 0;
            padding-left: 20px;
        }

        .message-bubble li {
            margin: 5px 0;
        }

        .message-bubble strong {
            color: #667eea;
        }

        .ai-response-detailed {
            max-height: 400px;
            overflow-y: auto;
            padding: 15px;
            background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
            border-radius: 15px;
            margin: 10px 0;
        }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', additionalStyles);
}

// Alternatif egzersizleri göster (Eski sistem için)
function showAlternatives(exerciseId, gun) {
    const modal = document.getElementById('alternativeModal');
    const alternativeList = document.getElementById('alternativeList');

    // Mevcut egzersizi bul
    let currentExercise = null;
    let kasGrubu = null;

    for (const [grup, exercises] of Object.entries(exerciseDB)) {
        const found = exercises.find(e => e.id === exerciseId);
        if (found) {
            currentExercise = found;
            kasGrubu = grup;
            break;
        }
    }

    if (!currentExercise) {
        showToast('❌ Egzersiz bulunamadı');
        return;
    }

    // Alternatif egzersizleri filtrele (daha düşük zorluk)
    let alternatives = exerciseDB[kasGrubu].filter(e =>
        e.id !== exerciseId && e.zorluk < currentExercise.zorluk
    );

    if (alternatives.length === 0) {
        // Aynı zorluk seviyesinden alternatifler
        alternatives = exerciseDB[kasGrubu].filter(e =>
            e.id !== exerciseId && e.zorluk === currentExercise.zorluk
        );

        if (alternatives.length === 0) {
            // Hiç alternatif yoksa
            alternativeList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">😔</div>
                    <p>Uygun alternatif bulunamadı</p>
                </div>
            `;
            modal.classList.add('show');
            return;
        }
    }

    alternativeList.innerHTML = alternatives.map(alt => `
        <div class="alternative-item" onclick="selectAlternative(${exerciseId}, ${alt.id}, '${gun}')">
            <div class="alternative-name">${alt.isim}</div>
            <div class="alternative-difficulty">Zorluk: ${'⭐'.repeat(alt.zorluk)}</div>
            <div class="alternative-sets">${alt.set}</div>
        </div>
    `).join('');

    modal.classList.add('show');
}

// Alternatif egzersiz seç (Eski sistem için)
function selectAlternative(oldId, newId, gun) {
    // Programda değiştir
    const dayProgram = currentProgram.find(p => p.gun === gun);
    if (!dayProgram) {
        showToast('❌ Program bulunamadı');
        return;
    }

    const exerciseIndex = dayProgram.egzersizler.findIndex(e => e.id === oldId);
    if (exerciseIndex === -1) {
        showToast('❌ Egzersiz bulunamadı');
        return;
    }

    // Yeni egzersizi bul
    let newExercise = null;
    for (const exercises of Object.values(exerciseDB)) {
        const found = exercises.find(e => e.id === newId);
        if (found) {
            newExercise = found;
            break;
        }
    }

    if (!newExercise) {
        showToast('❌ Alternatif egzersiz bulunamadı');
        return;
    }

    dayProgram.egzersizler[exerciseIndex] = newExercise;

    // Kaydet ve güncelle
    saveProgram();
    closeModal();

    // Bottom sheet'i güncelle
    if (selectedDay === gun) {
        showBottomSheet(gun);
    }

    showToast('✅ Egzersiz başarıyla değiştirildi');
}

// Modal kapat
function closeModal() {
    document.getElementById('alternativeModal').classList.remove('show');
}

// Programı kaydet
function saveProgram() {
    currentUser.takvim = currentProgram;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.username === currentUser.username);

    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// Çıkış yap
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Event listeners'ı başlat
function initializeEventListeners() {
    // Touch event listeners for better mobile interaction
    let touchStartY = 0;
    let touchEndY = 0;

    document.getElementById('bottomSheet').addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.getElementById('bottomSheet').addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].screenY;
        const deltaY = touchStartY - touchEndY;

        // Aşağı kaydırma ile kapatma
        if (deltaY < -50) {
            closeBottomSheet();
        }
    });

    // Modal dışına tıklama
    document.getElementById('alternativeModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    document.getElementById('aiChatModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeChatModal();
        }
    });

    // Escape tuşu ile kapatma
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (document.getElementById('aiChatModal').classList.contains('show')) {
                closeChatModal();
            } else if (document.getElementById('alternativeModal').classList.contains('show')) {
                closeModal();
            } else if (document.getElementById('bottomSheet').classList.contains('show')) {
                closeBottomSheet();
            }
        }
    });

    // Viewport height fix for mobile browsers
    function setViewportHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('resize', setViewportHeight);
    setViewportHeight();
}

// Kullanıcı geri bildirimini analiz et (Eski fonksiyon - backward compatibility için)
async function analyzeUserFeedback(userInput) {
    return analyzeUserFeedbackDetailed(userInput);
}

// AI yanıtını simüle et (Eski fonksiyon - backward compatibility için)
function simulateAIResponse(userInput, currentExercise, userProfile) {
    const detailedExercise = getDetailedExerciseInfo(currentExercise.id) || currentExercise;
    return simulateDetailedAIResponse(userInput, detailedExercise, userProfile);
}

// Diz dostu alternatifler (Eski fonksiyon)
function getJointFriendlyAlternatives(exercise) {
    const kasGrubu = exercise.kasGrubu;
    const alternatives = [];

    if (kasGrubu === 'bacak') {
        alternatives.push(
            { id: 22, isim: 'Leg Press', reason: 'Dize daha az yük biner', set: '3x12-15' },
            { id: 25, isim: 'Leg Curl', reason: 'İzole hareket, diz dostu', set: '3x12-15' },
            { id: 23, isim: 'Leg Extension', reason: 'Kontrollü hareket', set: '3x15-20' }
        );
    } else {
        // Diğer kas grupları için diz dostu öneriler
        alternatives.push(...getEasierAlternatives(exercise));
    }

    return alternatives.slice(0, 3);
}

// Bel dostu alternatifler (Eski fonksiyon)
function getBackFriendlyAlternatives(exercise) {
    const kasGrubu = exercise.kasGrubu;
    const backFriendly = {
        'bacak': [22, 23, 25], // Leg press, extension, curl
        'sirt': [7, 9], // Lat pulldown, cable row
        'gogus': [2, 4], // Dumbbell press, cable fly
        'omuz': [13, 14] // Lateral raise, front raise
    };

    const friendlyIds = backFriendly[kasGrubu] || [];
    return exerciseDB[kasGrubu]
        .filter(e => friendlyIds.includes(e.id))
        .map(e => ({
            ...e,
            reason: 'Bel bölgesine minimum yük - Güvenli hareket'
        }))
        .slice(0, 3);
}

// Kardiyo alternatifleri (Eski fonksiyon)
function getCardioAlternatives(exercise) {
    return [
        {
            id: 999,
            isim: `${exercise.isim} Superset`,
            reason: 'Dinlenme süresini azaltarak kardiyo etkisi',
            set: '3x15-20 (30sn dinlenme)'
        },
        {
            id: 998,
            isim: 'Circuit Training',
            reason: '3 farklı egzersizi art arda yaparak',
            set: '3 tur x 12 tekrar'
        },
        {
            id: 997,
            isim: 'HIIT Versiyonu',
            reason: 'Yüksek tempo, kısa dinlenme',
            set: '4x20sn çalışma/10sn dinlenme'
        }
    ];
}

// Gerçek OpenAI API çağrısı (opsiyonel - backend'de kullanılmalı)
async function callOpenAIAPI(userInput, exercise, userProfile) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `Sen deneyimli bir fitness koçusun. Kullanıcının profili: 
                    Tecrübe: ${userProfile.tecrube}, 
                    Kilo: ${userProfile.kilo}kg, 
                    Boy: ${userProfile.boy}cm. 
                    
                    Kullanıcı "${exercise.isim}" egzersizi hakkında geri bildirim veriyor. 
                    Analiz et ve uygun alternatif egzersizler öner. 
                    Yanıtını JSON formatında ver: 
                    {
                        "response": "Kullanıcıya vereceğin yanıt",
                        "suggestions": [
                            {
                                "id": egzersiz_id,
                                "isim": "Egzersiz adı",
                                "reason": "Neden bu egzersiz önerildi",
                                "set": "Set ve tekrar sayısı"
                            }
                        ]
                    }`
                },
                {
                    role: "user",
                    content: userInput
                }
            ],
            temperature: 0.7,
            max_tokens: 500
        })
    });

    const data = await response.json();
    if (data.choices && data.choices[0]) {
        try {
            return JSON.parse(data.choices[0].message.content);
        } catch (e) {
            // JSON parse edilemezse düz metin olarak kullan
            return {
                response: data.choices[0].message.content,
                suggestions: []
            };
        }
    }

    throw new Error('API yanıtı alınamadı');
}
