// Veritabanı kontrolü
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

// Tab değiştirme
function changeTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
    document.getElementById('message').innerHTML = '';
}

// Mesaj gösterme
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<div class="message ${type}">${text}</div>`;
    setTimeout(() => {
        messageDiv.innerHTML = '';
    }, 3000);
}

// Basit hash fonksiyonu
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString();
}

// Giriş
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const hashedPassword = simpleHash(password);

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(u => u.username === username && u.password === hashedPassword);

    if (user) {
        localStorage.setItem('currentUser', username);
        showMessage('Giriş başarılı! Yönlendiriliyorsunuz...', 'success');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    } else {
        showMessage('Kullanıcı adı veya şifre hatalı!', 'error');
    }
});

// Kayıt
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const kilo = document.getElementById('regKilo').value;
    const boy = document.getElementById('regBoy').value;
    const tecrube = document.getElementById('regTecrube').value;

    const sporGunleri = [];
    document.querySelectorAll('input[name="sporGunleri"]:checked').forEach(checkbox => {
        sporGunleri.push(checkbox.value);
    });

    if (sporGunleri.length === 0) {
        showMessage('En az 1 gün seçmelisiniz!', 'error');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users'));

    if (users.find(u => u.username === username)) {
        showMessage('Bu kullanıcı adı zaten kullanılıyor!', 'error');
        return;
    }

    const newUser = {
        username: username,
        password: simpleHash(password),
        profile: {
            kilo: parseInt(kilo),
            boy: parseInt(boy),
            tecrube: tecrube,
            sporGunleri: sporGunleri
        },
        takvim: [],
        zorlanılanHareketler: [],
        kayitTarihi: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    showMessage('Kayıt başarılı! Giriş yapabilirsiniz.', 'success');
    setTimeout(() => {
        changeTab('login');
    }, 1500);
});