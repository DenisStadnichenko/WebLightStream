window.PAGE_I18N = {
  ru: { main: `
        <h1 style="color: var(--kick-green);">Интеграция с Kick.com</h1>
        <p class="lead">Стримьте на самую быстрорастущую платформу с высоким битрейтом и низкой задержкой.</p>

        <h2>Как подключить</h2>
        <p>StadFlow подключается к Kick нативно через OAuth — ключ трансляции не нужен:</p>
        <ol>
            <li>В StadFlow нажмите <b>Add Account</b> &rarr; <b>Kick</b>.</li>
            <li>Войдите в Kick в браузере и разрешите доступ.</li>
            <li>Вы автоматически вернётесь в StadFlow. Если приложение не открылось, нажмите <b>Open StadFlow</b> на странице.</li>
        </ol>
        <p>После входа StadFlow сам получает ingest-адрес и ключ трансляции и хранит их на устройстве в зашифрованном виде.</p>

        <h2>Через ключ трансляции</h2>
        <p>Если предпочитаете ключ, добавьте Kick как <b>Custom RTMP</b>:</p>
        <ol>
            <li>Откройте <b>Kick Creator Dashboard</b> &rarr; <b>Settings</b> &rarr; <b>Stream Key</b>.</li>
            <li>Скопируйте <b>Stream URL</b> и <b>Stream Key</b>.</li>
            <li>В StadFlow нажмите <b>Add Account</b> &rarr; <b>Custom</b>, вставьте оба значения и сохраните.</li>
        </ol>

        <h2>Рекомендуемые настройки</h2>
        <p>Kick принимает высокий битрейт. На хорошем соединении используйте 1080p / 60 FPS / 8 Мбит/с, в мобильной сети начните с 720p / 30 FPS / 2,5 Мбит/с.</p>

        <div style="background: rgba(83, 252, 24, 0.1); border: 1px solid var(--kick-green); padding: 20px; border-radius: 16px; margin-top: 40px;">
            <p style="margin: 0; color: var(--kick-green); font-weight: 800;">Совет: можно добавить несколько аккаунтов Kick и стримить на них одновременно.</p>
        </div>

        <a href="integrations.html" class="btn secondary" style="margin-top: 40px;">&larr; Все интеграции</a>` },
  uk: { main: `
        <h1 style="color: var(--kick-green);">Інтеграція з Kick.com</h1>
        <p class="lead">Стримте на найшвидше зростаючу платформу з високим бітрейтом і низькою затримкою.</p>

        <h2>Як підключити</h2>
        <p>StadFlow підключається до Kick нативно через OAuth — ключ трансляції не потрібен:</p>
        <ol>
            <li>У StadFlow натисніть <b>Add Account</b> &rarr; <b>Kick</b>.</li>
            <li>Увійдіть у Kick у браузері та дозвольте доступ.</li>
            <li>Ви автоматично повернетеся до StadFlow. Якщо застосунок не відкрився, натисніть <b>Open StadFlow</b> на сторінці.</li>
        </ol>
        <p>Після входу StadFlow сам отримує ingest-адресу та ключ трансляції і зберігає їх на пристрої в зашифрованому вигляді.</p>

        <h2>Через ключ трансляції</h2>
        <p>Якщо надаєте перевагу ключу, додайте Kick як <b>Custom RTMP</b>:</p>
        <ol>
            <li>Відкрийте <b>Kick Creator Dashboard</b> &rarr; <b>Settings</b> &rarr; <b>Stream Key</b>.</li>
            <li>Скопіюйте <b>Stream URL</b> і <b>Stream Key</b>.</li>
            <li>У StadFlow натисніть <b>Add Account</b> &rarr; <b>Custom</b>, вставте обидва значення та збережіть.</li>
        </ol>

        <h2>Рекомендовані налаштування</h2>
        <p>Kick приймає високий бітрейт. На гарному з'єднанні використовуйте 1080p / 60 FPS / 8 Мбіт/с, у мобільній мережі почніть із 720p / 30 FPS / 2,5 Мбіт/с.</p>

        <div style="background: rgba(83, 252, 24, 0.1); border: 1px solid var(--kick-green); padding: 20px; border-radius: 16px; margin-top: 40px;">
            <p style="margin: 0; color: var(--kick-green); font-weight: 800;">Порада: можна додати кілька акаунтів Kick і стримити на них одночасно.</p>
        </div>

        <a href="integrations.html" class="btn secondary" style="margin-top: 40px;">&larr; Усі інтеграції</a>` }
};
