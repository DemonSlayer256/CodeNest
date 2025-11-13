document.addEventListener('DOMContentLoaded', function () {
    const htmlEditor = ace.edit("htmlEditor");
    htmlEditor.setTheme("ace/theme/dracula");
    htmlEditor.session.setMode("ace/mode/xml");
    htmlEditor.setOptions({ autoScrollEditorIntoView: true, wrap: true });
    htmlEditor.setValue("<p>Hello World</p>");
    htmlEditor.setOption("fontSize", 14);
    htmlEditor.renderer.setShowGutter(false);

    const cssEditor = ace.edit("cssEditor");
    cssEditor.setTheme("ace/theme/dracula");
    cssEditor.session.setMode("ace/mode/css");
    cssEditor.setOptions({ autoScrollEditorIntoView: true, wrap: true });
    cssEditor.setValue(`p{
    font-weight: bold;
    font-size: 35px;
    text-align: center;\n}`);
    cssEditor.setOption("fontSize", 14);
    cssEditor.renderer.setShowGutter(false);

    const jsEditor = ace.edit("jsEditor");
    jsEditor.setTheme("ace/theme/dracula");
    jsEditor.session.setMode("ace/mode/javascript");
    jsEditor.setOptions({ autoScrollEditorIntoView: true, wrap: true });
    jsEditor.setValue("// Write your JavaScript here");
    jsEditor.setOption("fontSize", 14);
    jsEditor.renderer.setShowGutter(false);

    const previewFrame = document.getElementById('preview');
    const modeToggleBtn = document.getElementById('modeToggle');

    const main = document.querySelector('#multitoggle');

    // Toggle multiview state
    let multi = true;

    // Buttons for switching views
    const htmlBtn = document.getElementById('htmlBtn');
    const cssBtn = document.getElementById('cssBtn');
    const jsBtn = document.getElementById('jsBtn');

    // Editor containers
    const htmlEditorContainer = document.querySelector('#htmlEditor').parentElement;
    const cssEditorContainer = document.querySelector('#cssEditor').parentElement;
    const jsEditorContainer = document.querySelector('#jsEditor').parentElement;
    let timeout;
    [htmlEditor, cssEditor, jsEditor].forEach(editor => {
        editor.session.on('change', () => {
            clearTimeout(timeout);
            timeout = setTimeout(updatePreview, 500); // auto-update after 0.5s pause
        });
    });

    // Function to toggle between multiview and single view
    function toggleMultiview() {
        multi = !multi;
        if (multi) {
            // Show all panels
            [htmlEditorContainer, cssEditorContainer, jsEditorContainer].forEach(s => {
                s.classList.remove('d-none');
                s.classList.add('col-lg-4');
            });
            // Show the button group
            document.getElementById('viewToggleButtons').classList.add('d-none');
            document.querySelectorAll('.h5.mb-0').forEach(s => s.classList.remove('d-none'));
            // Make all buttons unactive
            setActiveButton(null);
        } else {
            // Show only HTML panel by default
            htmlEditorContainer.classList.remove('d-none', 'col-lg-4');
            [cssEditorContainer, jsEditorContainer].forEach(s => s.classList.remove('col-lg-4'));
            cssEditorContainer.classList.add('d-none');
            jsEditorContainer.classList.add('d-none');
            // Hide the button group
            document.getElementById('viewToggleButtons').classList.remove('d-none');
            document.querySelectorAll('.h5.mb-0').forEach(s => s.classList.add('d-none'));
            // Set HTML as active
            setActiveButton('htmlBtn');
        }
    }

    // Function to set button glow
    function setActiveButton(activeId) {
        [htmlBtn, cssBtn, jsBtn].forEach(btn => {
            if (btn.id === activeId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Event handler for multiview toggle button
    document.querySelector('#multiview').addEventListener('click', () => {
        toggleMultiview();
    });

    // Event handlers for panel switch buttons
    htmlBtn.addEventListener('click', () => {
        setActiveButton('htmlBtn');
        htmlEditorContainer.classList.remove('d-none');
        cssEditorContainer.classList.add('d-none');
        jsEditorContainer.classList.add('d-none');
    });
    cssBtn.addEventListener('click', () => {
        setActiveButton('cssBtn');
        htmlEditorContainer.classList.add('d-none');
        cssEditorContainer.classList.remove('d-none');
        jsEditorContainer.classList.add('d-none');
    });
    jsBtn.addEventListener('click', () => {
        setActiveButton('jsBtn');
        htmlEditorContainer.classList.add('d-none');
        cssEditorContainer.classList.add('d-none');
        jsEditorContainer.classList.remove('d-none');
    });

    // Initialize view
    document.querySelector('#openpreview').addEventListener('click', openPreview);
    // Preview function
    function openPreview() {
        let htmlContent = htmlEditor.getValue();
        let cssContent = cssEditor.getValue();
        let jsContent = jsEditor.getValue();

        let encodedContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssContent}</style>
        </head>
        <body>
            ${htmlContent}
            <script>
            ${jsContent}
            </script>
        </body>
        </html>
        `;
        const blob = new Blob([encodedContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    }

    // Store initial code for reset
    const initialCode = {
        html: "<!--Write-your-HTML-code-here>",
        css: "/* Write your CSS here */",
        js: "//Write your JavaScript here ",
    };

    // Update preview
    function updatePreview() {
        const htmlContent = htmlEditor.getValue();
        const cssContent = cssEditor.getValue();
        const jsContent = jsEditor.getValue();

        const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssContent}</style>
        </head>
        <body>
            ${htmlContent}
            <script>
            ${jsContent}
            </script>
        </body>
        </html>
        `);
        iframeDoc.close();
    }
    updatePreview();

    // Button events
    document.getElementById('resetBtn').addEventListener('click', () => {
        htmlEditor.setValue(initialCode.html);
        cssEditor.setValue(initialCode.css);
        jsEditor.setValue(initialCode.js);
        updatePreview();
    });
    document.getElementById('shareBtn').addEventListener('click', () => {
        const codeObject = {
            html: htmlEditor.getValue(),
            css: cssEditor.getValue(),
            js: jsEditor.getValue(),
        };
        const encoded = btoa(JSON.stringify(codeObject));
        const shareUrl = `${window.location.origin}${window.location.pathname}?code=${encoded}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Shareable URL copied to clipboard!');
        });
    });

    // Dark mode toggle
    let isDarkMode = true;
    modeToggleBtn.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        modeToggleBtn.innerHTML = !isDarkMode
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
        const theme = !isDarkMode ? 'ace/theme/chrome' : 'ace/theme/dracula';
        [htmlEditor, cssEditor, jsEditor].forEach(editor => {
            editor.setTheme(theme);
        });
    });

    // Load code from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');
    if (codeParam) {
        try {
            const decoded = JSON.parse(atob(codeParam));
            htmlEditor.setValue(decoded.html);
            cssEditor.setValue(decoded.css);
            jsEditor.setValue(decoded.js);
        } catch (e) {
            console.error('Failed to decode code from URL:', e);
        }
    }

    // --- Settings Modal Logic ---
    const settingsModal = document.getElementById('settingsModal');
    const tabSizeInput = document.getElementById('tabSizeInput');
    const fontSizeInput = document.getElementById('fontSizeInput');
    const themeSelect = document.getElementById('themeSelect');
    const wordWrapToggle = document.getElementById('wordWrapToggle');
    const settingsBtn = document.getElementById('settingsBtn');
    const lnToggle = document.getElementById('lnToggle');

    // When opening modal, populate with current settings
    settingsBtn.addEventListener('click', () => {
        tabSizeInput.value = htmlEditor.session.getTabSize() || 2;
        fontSizeInput.value = htmlEditor.getOption('fontSize') || 14;
        try {
            themeSelect.value = String(htmlEditor.getTheme()).replace('ace/theme/', "");
        } catch (e) { console.log("Error" + e); }
        wordWrapToggle.checked = htmlEditor.session.getUseWrapMode();
        lnToggle.checked = htmlEditor.renderer.getShowGutter();
        settingsModal.classList.add('open'); // Show modal
    });

    // Save button handler
    document.getElementById('saveSettingsBtn').addEventListener('click', () => {
        const tabSize = parseInt(tabSizeInput.value);
        const fontSize = parseInt(fontSizeInput.value);
        const theme = themeSelect.value;
        const wordWrap = wordWrapToggle.checked;

        [htmlEditor, cssEditor, jsEditor].forEach(editor => {
            editor.session.setTabSize(tabSize);
            editor.setOption('fontSize', fontSize);
            editor.session.setUseWrapMode(wordWrap);
            editor.setTheme(`ace/theme/${theme}`);
            editor.renderer.setShowGutter(lnToggle.checked);
        });
        settingsModal.classList.remove('open'); // Close modal
    });

    // Close settings modal
    document.querySelectorAll('#closeSettingsModal').forEach( (e) => e.addEventListener('click', () => {
        settingsModal.classList.remove('open'); // Close modal
    }))
});
