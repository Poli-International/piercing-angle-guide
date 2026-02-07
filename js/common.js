// =====================================================
// COMMON.JS - Dark Mode & Embed Modal (REQUIRED)
// Standard for all Poli International Tools
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    // ==================== DARK MODE TOGGLE ====================
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode',
            body.classList.contains('dark-mode') ? 'enabled' : 'disabled'
        );
    });

    // ==================== EMBED MODAL LOGIC ====================
    const embedBtn = document.getElementById('embedBtn');
    const embedModal = document.getElementById('embedModal');
    const modalClose = document.getElementById('modalClose');
    const copyEmbedCode = document.getElementById('copyEmbedCode');
    const embedCode = document.getElementById('embedCode');

    // Set embed code
    const currentUrl = window.location.href.replace('index.html', 'embed.html');
    embedCode.value = `<iframe src="${currentUrl}" width="100%" height="1200" frameborder="0"></iframe>`;

    // Open modal
    embedBtn.addEventListener('click', () => {
        embedModal.style.display = 'flex';
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        embedModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === embedModal) {
            embedModal.style.display = 'none';
        }
    });

    // Copy embed code
    copyEmbedCode.addEventListener('click', () => {
        embedCode.select();
        document.execCommand('copy');
        copyEmbedCode.textContent = '✓ Copied!';
        setTimeout(() => {
            copyEmbedCode.textContent = 'Copy Code';
        }, 2000);
    });
});
