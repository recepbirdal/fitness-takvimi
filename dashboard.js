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

// Global değişkenler
let currentUser = null;
let selectedDay = null;
let currentProgram = [];

// Sayfa yüklendiğinde
window.onload = function() {
    checkAuth();
    loadUserData();
    displayWeekView();
    displayCurrentWeek();
    initializeEventListeners();
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
                            Zor geldi
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

// Zor gelen egzersiz bildirimi
function reportDifficult(exerciseId, gun) {
    // Zorlanılan egzersizi kaydet
    if (!currentUser.zorlanılanHareketler) {
        currentUser.zorlanılanHareketler = [];
    }
    currentUser.zorlanılanHareketler.push({
        exerciseId: exerciseId,
        tarih: new Date().toISOString()
    });

    // Kullanıcıyı güncelle
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.username === currentUser.username);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Alternatif egzersizleri göster
    showAlternatives(exerciseId, gun);
}

// Alternatif egzersizleri göster
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

// Alternatif egzersiz seç
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

    // Escape tuşu ile kapatma
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (document.getElementById('alternativeModal').classList.contains('show')) {
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