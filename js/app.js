const defaultShortcuts = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github', color: '#fff' },
    { name: '哔哩哔哩', url: 'https://bilibili.com', icon: 'bilibili', color: '#fb7299' },
    { name: '知乎', url: 'https://zhihu.com', icon: 'zhihu', color: '#0084ff' },
    { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube', color: '#ff0000' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter', color: '#1da1f2' },
    { name: 'Notion', url: 'https://notion.so', icon: 'notion', color: '#fff' },
    { name: 'Figma', url: 'https://figma.com', icon: 'figma', color: '#f24e1e' },
    { name: 'Vercel', url: 'https://vercel.com', icon: 'vercel', color: '#fff' }
];

const icons = {
    github: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    bilibili: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/></svg>',
    zhihu: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.168.445 1.171H9.384a58.104 58.104 0 0 1-.112 3.797h2.726c.388.023.393 1.251.393 1.251H9.183c.062 1.191.328 2.559.837 4.107.317.938.668 1.729 1.055 2.373.387.643.737.999 1.051 1.066.313.067.469-.169.469-.707 0-.538-.029-1.082-.086-1.631.057-.044.126-.065.209-.065.266 0 .622.168 1.068.503.446.335.837.755 1.172 1.26.335.505.503 1.024.503 1.557 0 .534-.168.968-.503 1.303-.335.335-.754.503-1.256.503-.503 0-1.025-.168-1.567-.503a5.16 5.16 0 0 1-1.406-1.26c-.39-.538-.683-1.111-.879-1.718-.196-.607-.337-1.244-.422-1.91a17.264 17.264 0 0 1-.128-1.98c-.006-.335-.009-.67-.009-1.005h-2.33c-.006-.335-.009-.67-.009-1.005h2.348c.062-1.266.112-2.532.149-3.797H6.005c-.006-.335-.009-.67-.009-1.005h4.165c.18-.676.409-1.38.68-2.11z"/></svg>',
    youtube: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    twitter: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"/></svg>',
    notion: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.449.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.448-1.632z"/></svg>',
    figma: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.588 4.539zm-.001-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019c1.692 0 3.06-1.377 3.06-3.061v-2.977H8.147zM8.148 8.981c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981H8.148zm-.001-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.147zM8.148 15.02c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.981H8.148zm-.001-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V7.51H8.147zM15.852 15.02h-4.588V6.039h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zm-3.117-1.471h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117v6.038z"/></svg>',
    vercel: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>',
    link: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>'
};

// 全局变量
let shortcuts = [];
let draggedItem = null;
let draggedIndex = null;
let contextMenuTarget = null;
let editingIndex = null;
let db = null;
let userId = null;
let userRef = null;
let isSyncing = false;

// DOM 元素
const grid = document.getElementById('shortcutsGrid');
const contextMenu = document.getElementById('contextMenu');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const siteName = document.getElementById('siteName');
const siteUrl = document.getElementById('siteUrl');
const confirmBtn = document.getElementById('confirmBtn');
const syncStatus = document.getElementById('syncStatus');

// 初始化 Firebase
async function initFirebase() {
    if (typeof firebaseConfig === 'undefined' || !firebaseConfig.apiKey || firebaseConfig.apiKey === 'YOUR_API_KEY') {
        console.log('Firebase 未配置，使用本地存储模式');
        return false;
    }

    try {
        // 动态加载 Firebase
        if (typeof firebase === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
            document.head.appendChild(script);
            await new Promise(resolve => script.onload = resolve);
            
            const script2 = document.createElement('script');
            script2.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js';
            document.head.appendChild(script2);
            await new Promise(resolve => script2.onload = resolve);
        }

        firebase.initializeApp(firebaseConfig);
        db = firebase.database();
        
        // 生成匿名用户ID
        userId = localStorage.getItem('otter_user_id');
        if (!userId) {
            userId = 'user_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('otter_user_id', userId);
        }

        // 创建用户数据引用
        userRef = db.ref('users/' + userId);

        // 监听云端数据变化
        userRef.on('value', (snapshot) => {
            const cloudData = snapshot.val();
            if (cloudData && cloudData.shortcuts) {
                const cloudShortcuts = cloudData.shortcuts;
                // 合并数据：以云端为准，但保留本地新增的
                if (!localStorage.getItem('otterShortcuts')) {
                    shortcuts = cloudShortcuts;
                    localStorage.setItem('otterShortcuts', JSON.stringify(shortcuts));
                    renderShortcuts();
                    updateSyncStatus('已同步', 'success');
                } else if (!isSyncing) {
                    // 检查是否需要更新（比较时间戳）
                    const localTime = parseInt(localStorage.getItem('otter_sync_time') || '0');
                    const cloudTime = cloudData.updatedAt || 0;
                    if (cloudTime > localTime) {
                        shortcuts = cloudShortcuts;
                        localStorage.setItem('otterShortcuts', JSON.stringify(shortcuts));
                        localStorage.setItem('otter_sync_time', cloudTime);
                        renderShortcuts();
                        updateSyncStatus('已同步', 'success');
                    }
                }
            }
        });

        updateSyncStatus('已连接', 'success');
        return true;
    } catch (error) {
        console.error('Firebase 初始化失败:', error);
        return false;
    }
}

// 同步数据到云端
async function syncToCloud() {
    if (!db || !userRef || isSyncing) return;
    
    isSyncing = true;
    updateSyncStatus('同步中...', 'syncing');
    
    try {
        await userRef.set({
            shortcuts: shortcuts,
            updatedAt: Date.now()
        });
        localStorage.setItem('otter_sync_time', Date.now());
        updateSyncStatus('已同步', 'success');
    } catch (error) {
        console.error('同步失败:', error);
        updateSyncStatus('同步失败', 'error');
    }
    
    isSyncing = false;
}

// 更新同步状态显示
function updateSyncStatus(text, type) {
    if (!syncStatus) return;
    syncStatus.textContent = text;
    syncStatus.className = 'sync-status ' + type;
}

// 渲染快捷方式
function renderShortcuts() {
    grid.innerHTML = '';

    shortcuts.forEach((shortcut, index) => {
        const card = document.createElement('div');
        card.className = 'shortcut-card';
        card.draggable = true;
        card.dataset.index = index;
        
        const iconSvg = icons[shortcut.icon] || icons.link;
        
        card.innerHTML = `
            <div class="shortcut-icon" style="color: ${shortcut.color || '#fff'}">
                ${iconSvg}
            </div>
            <span class="shortcut-name">${shortcut.name}</span>
        `;

        // 点击跳转
        card.addEventListener('click', (e) => {
            if (!card.classList.contains('dragging')) {
                window.open(shortcut.url, '_blank');
            }
        });

        // 拖拽事件
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        card.addEventListener('dragover', handleDragOver);
        card.addEventListener('drop', handleDrop);
        card.addEventListener('dragenter', handleDragEnter);
        card.addEventListener('dragleave', handleDragLeave);

        // 右键菜单
        card.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            showContextMenu(e, index);
        });

        // 触摸支持
        let touchStartTime = 0;
        let touchStartX = 0;
        let touchStartY = 0;
        let isLongPress = false;

        card.addEventListener('touchstart', (e) => {
            touchStartTime = Date.now();
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isLongPress = false;

            setTimeout(() => {
                if (Date.now() - touchStartTime >= 500) {
                    isLongPress = true;
                    showContextMenu({ clientX: touchStartX, clientY: touchStartY }, index);
                }
            }, 500);
        }, { passive: true });

        card.addEventListener('touchmove', (e) => {
            if (Date.now() - touchStartTime < 500) {
                touchStartTime = 0;
            }
        }, { passive: true });

        card.addEventListener('touchend', (e) => {
            if (isLongPress) {
                e.preventDefault();
            }
        });

        grid.appendChild(card);
    });

    // 新增卡片
    const addCard = document.createElement('div');
    addCard.className = 'add-card';
    addCard.innerHTML = `
        <div class="add-icon">+</div>
        <span class="add-text">新增</span>
    `;
    addCard.addEventListener('click', () => openModal());
    grid.appendChild(addCard);
}

// 拖拽处理
function handleDragStart(e) {
    draggedItem = this;
    draggedIndex = parseInt(this.dataset.index);
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.shortcut-card').forEach(card => {
        card.classList.remove('drag-over');
    });
    draggedItem = null;
    draggedIndex = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.preventDefault();
    if (this !== draggedItem) {
        this.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    const dropIndex = parseInt(this.dataset.index);
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
        const item = shortcuts[draggedIndex];
        shortcuts.splice(draggedIndex, 1);
        shortcuts.splice(dropIndex, 0, item);
        saveShortcuts();
        renderShortcuts();
    }
}

// 右键菜单
function showContextMenu(e, index) {
    contextMenuTarget = index;
    contextMenu.style.left = e.clientX + 'px';
    contextMenu.style.top = e.clientY + 'px';
    contextMenu.classList.add('active');
}

function hideContextMenu() {
    contextMenu.classList.remove('active');
    contextMenuTarget = null;
}

document.addEventListener('click', hideContextMenu);
document.addEventListener('scroll', hideContextMenu);

document.getElementById('menuEdit').addEventListener('click', () => {
    if (contextMenuTarget !== null) {
        openModal(contextMenuTarget);
    }
    hideContextMenu();
});

document.getElementById('menuDelete').addEventListener('click', () => {
    if (contextMenuTarget !== null) {
        shortcuts.splice(contextMenuTarget, 1);
        saveShortcuts();
        renderShortcuts();
    }
    hideContextMenu();
});

// 模态框
function openModal(index = null) {
    editingIndex = index;
    modalTitle.textContent = index !== null ? '编辑快捷方式' : '添加快捷方式';
    confirmBtn.textContent = index !== null ? '保存' : '添加';
    
    if (index !== null) {
        siteName.value = shortcuts[index].name;
        siteUrl.value = shortcuts[index].url;
    } else {
        siteName.value = '';
        siteUrl.value = '';
    }
    
    modal.classList.add('active');
    siteName.focus();
}

function closeModal() {
    modal.classList.remove('active');
    editingIndex = null;
}

document.getElementById('cancelBtn').addEventListener('click', closeModal);
confirmBtn.addEventListener('click', saveShortcut);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
siteUrl.addEventListener('keypress', (e) => { if (e.key === 'Enter') saveShortcut(); });

function saveShortcut() {
    const name = siteName.value.trim();
    let url = siteUrl.value.trim();
    if (!name || !url) return;
    if (!url.startsWith('http')) url = 'https://' + url;

    let icon = 'link', color = '#fff';
    const domain = url.toLowerCase();
    if (domain.includes('github')) { icon = 'github'; color = '#fff'; }
    else if (domain.includes('bilibili')) { icon = 'bilibili'; color = '#fb7299'; }
    else if (domain.includes('zhihu')) { icon = 'zhihu'; color = '#0084ff'; }
    else if (domain.includes('youtube')) { icon = 'youtube'; color = '#ff0000'; }
    else if (domain.includes('twitter') || domain.includes('x.com')) { icon = 'twitter'; color = '#1da1f2'; }
    else if (domain.includes('notion')) { icon = 'notion'; color = '#fff'; }
    else if (domain.includes('figma')) { icon = 'figma'; color = '#f24e1e'; }
    else if (domain.includes('vercel')) { icon = 'vercel'; color = '#fff'; }

    if (editingIndex !== null) {
        shortcuts[editingIndex] = { name, url, icon, color };
    } else {
        shortcuts.push({ name, url, icon, color });
    }
    
    saveShortcuts();
    renderShortcuts();
    closeModal();
}

function saveShortcuts() {
    localStorage.setItem('otterShortcuts', JSON.stringify(shortcuts));
    // 同步到云端
    if (db) {
        syncToCloud();
    }
}

// 时钟
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
    
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    document.getElementById('date').textContent = `${year}年${month}月${date}日 · ${weekDays[now.getDay()]}`;
}

// 搜索
const searchEngines = { google: 'https://www.google.com/search?q=', baidu: 'https://www.baidu.com/s?wd=', bing: 'https://www.bing.com/search?q=' };
let currentEngine = 'google';

document.querySelectorAll('.engine-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.engine-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentEngine = this.dataset.engine;
    });
});

document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim()) {
        window.open(searchEngines[currentEngine] + encodeURIComponent(this.value.trim()), '_blank');
    }
});

// 初始化
async function init() {
    // 加载本地数据
    const localData = localStorage.getItem('otterShortcuts');
    shortcuts = localData ? JSON.parse(localData) : defaultShortcuts;
    
    // 尝试初始化 Firebase
    await initFirebase();
    
    // 渲染
    renderShortcuts();
    updateClock();
    setInterval(updateClock, 1000);
}

// 启动
init();
