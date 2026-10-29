/* Seraf homepage: i18n, account state, pricing, guest batch optimizer + ZIP. */
(function () {
  'use strict';

  // ---- i18n ---------------------------------------------------------------------
  var FA = {
    nav_tool: 'بهینه‌ساز رایگان', nav_features: 'امکانات', nav_api: 'API', nav_wp: 'وردپرس', nav_pricing: 'تعرفه‌ها', nav_docs: 'مستندات',
    btn_docs: 'مستندات API', btn_login: 'ورود / ثبت‌نام', btn_dashboard: 'پنل کاربری',
    hero_pill: 'WebP · AVIF · JPEG · PNG — پردازش روی سرور، در چند ثانیه',
    hero_h1a: 'تصاویر سبک‌تر.', hero_h1b: 'سایت سریع‌تر.',
    hero_lead: 'تا ۱۰ تصویر را رها کنید و نسخهٔ بهینه‌شده را تحویل بگیرید — رایگان و بدون ثبت‌نام. برای حجم بیشتر، سراف را با وب‌سرویس REST یا افزونهٔ وردپرس به سایت خود وصل کنید و از کیف پول پرداخت کنید.',
    cta_start: 'دریافت کلید API', cta_docs: 'مطالعهٔ مستندات',
    tn1: '~۸۰٪', tn2: '۴', tn3: '۰',
    trust1: 'کاهش حجم میانگین', trust2: 'فرمت خروجی', trust3: 'فایل ذخیره‌شده برای مهمان',
    tool_title: 'بهینه‌ساز گروهی', tool_limits: 'تا {n} تصویر · هرکدام تا {mb} مگابایت · پردازش یکی‌یکی', free: 'رایگان',
    drop_title: 'تصاویر را اینجا رها کنید یا برای انتخاب کلیک کنید', drop_sub: 'JPEG، PNG، WebP، AVIF',
    set_format: 'فرمت خروجی', fmt_original: 'همان فرمت اصلی', set_quality: 'کیفیت', set_width: 'حداکثر عرض', w_original: 'اندازهٔ اصلی',
    btn_clear: 'پاک کردن', btn_run: 'بهینه‌سازی', btn_zip: 'دانلود همه (ZIP)',
    feat_kicker: 'چرا سراف', feat_title: 'هر آنچه برای تصاویر سبک‌تر لازم دارید',
    f1_t: 'وب‌سرویس REST', f1_d: 'فقط یک درخواست POST: فایل یا آدرس تصویر را بفرستید و تصویر بهینه یا لینک دانلود بگیرید. با هر زبان برنامه‌نویسی.',
    f2_t: 'افزونهٔ وردپرس', f2_d: 'تصاویر جدید را در پس‌زمینه بهینه می‌کند و کل کتابخانه را یکی‌یکی پردازش می‌کند — بدون فشار به هاست.',
    f3_t: 'فرمت‌های مدرن', f3_d: 'تبدیل به WebP یا AVIF، کوچک‌کردن عکس‌های بزرگ، حذف متادیتا با حفظ پروفایل رنگ.',
    f4_t: 'کیف پول و پلن', f4_d: 'شارژ آنلاین، پرداخت به ازای هر تصویر یا خرید پلن ماهانه. تصویری که کوچک‌تر نشود هزینه‌ای ندارد.',
    f5_t: 'مدیریت‌شده و منصفانه', f5_d: 'محدودیت نرخ، صف پردازش و راهنمای Retry-After سرعت و پایداری را برای همه حفظ می‌کند.',
    f6_t: 'ورود با موبایل', f6_d: 'بدون رمز: با کد پیامکی وارد شوید، کلید بسازید و مصرف را در پنل دوزبانه ببینید.',
    s1_t: 'ورود', s1_d: 'با شماره موبایل — حساب شما فوراً ساخته می‌شود.',
    s2_t: 'شارژ یا خرید پلن', s2_d: 'کیف پول را با هر کارت بانکی شارژ کنید.',
    s3_t: 'ساخت کلید API', s3_d: 'یک کلید برای هر سایت، با امکان محدودسازی به دامنه.',
    s4_t: 'بهینه‌سازی همه‌چیز', s4_d: 'از کد، از وردپرس یا همین‌جا در مرورگر.',
    api_kicker: 'برای توسعه‌دهندگان', api_title: 'یک API کوچک که کار سنگین را انجام می‌دهد',
    api_text: 'با کلید Bearer احراز هویت کنید، تصویر را بفرستید و کیفیت، فرمت و اندازه را انتخاب کنید. آمار JSON با لینک دانلود بگیرید یا با response=binary خود فایل را.',
    api_c1: 'پاسخ JSON یا باینری', api_c2: 'بهینه‌سازی با آپلود یا آدرس', api_c3: 'سرویس موجودی و گزارش مصرف', api_c4: 'خطاهای شفاف با Retry-After',
    btn_docs_full: 'مستندات کامل', btn_key: 'ساخت کلید',
    wp_kicker: 'وردپرس', wp_title: 'کل کتابخانهٔ رسانه، به‌صورت خودکار بهینه',
    wp_text: 'افزونه را نصب کنید، کلید API را وارد کنید و تمام. آپلودهای جدید در پس‌زمینه بهینه می‌شوند و تصاویر قبلی یکی‌یکی با مکث قابل تنظیم پردازش می‌شوند تا هاست شما چیزی حس نکند.',
    wp_c1: 'پشتیبان با بازگردانی یک‌کلیکی', wp_c2: 'نمایش اختیاری WebP', wp_c3: 'موجودی و صرفه‌جویی زنده در پیشخوان', wp_c4: 'رابط فارسی و انگلیسی',
    btn_plugin: 'دانلود افزونه',
    price_kicker: 'تعرفه‌ها', price_title: 'ساده، پیش‌پرداخت، بدون غافلگیری', price_sub: 'کیف پول را شارژ کنید و به ازای هر تصویر پرداخت کنید، یا با پلن ماهانه صرفه‌جویی کنید.',
    cta_title: 'آماده‌اید سایتتان سبک‌تر شود؟', cta_text: 'در چند ثانیه با شماره موبایل حساب بسازید. برای تنظیم دقیق یک تصویر و مقایسهٔ کنار‌به‌کنار، ویرایشگر پیشرفتهٔ درون‌مرورگر را امتحان کنید.',
    cta_signup: 'ساخت حساب رایگان', cta_editor: 'ویرایشگر پیشرفته',
    // dynamic
    toman: 'تومان', per_image: 'هر تصویر', days: '{n} روز', images_n: '{n} تصویر بهینه', file_mb: 'فایل تا {n} مگابایت', rate_n: '{n} درخواست در دقیقه', keys_n: '{n} کلید API',
    payg: 'پرداخت به ازای مصرف', payg_desc: 'بدون تعهد؛ هزینهٔ هر تصویر از کیف پول کسر می‌شود.', no_charge: 'بدون هزینه اگر کوچک‌تر نشود',
    popular: 'محبوب', choose: 'انتخاب پلن', topup: 'شارژ کیف پول',
    st_wait: 'در صف', st_proc: 'در حال پردازش…', st_skip: 'از قبل بهینه بود', st_err: 'خطا',
    too_many: 'حداکثر {n} تصویر در هر نوبت. برای حجم بیشتر وارد شوید.', too_big: '{name} بزرگ‌تر از {mb} مگابایت است و اضافه نشد.', not_img: '{name} تصویر پشتیبانی‌شده نیست.',
    limit_hit: 'سقف استفادهٔ رایگان این ساعت پر شد. <a href="/panel/login">وارد شوید</a> تا بدون محدودیت ادامه دهید.',
    busy: 'سرور مشغول است؛ {s} ثانیه دیگر دوباره تلاش می‌کنیم…', net_err: 'اتصال برقرار نشد.',
    summary: '{done} از {total} · {saved} صرفه‌جویی ({pct})', remove: 'حذف', download: 'دانلود',
    btn_retry: 'تلاش دوباره', st_queue: 'در صف', st_stale: 'به‌روزرسانی با تنظیمات جدید…', original: 'اصلی', add_more: 'افزودن تصاویر بیشتر', drop_title2: 'تصاویر را اینجا رها کنید یا برای انتخاب کلیک کنید'
  };
  var EN = {
    tool_limits: 'Up to {n} images · {mb} MB each · processed one by one',
    btn_dashboard: 'Dashboard',
    toman: 'Toman', per_image: 'per image', days: '{n} days', images_n: '{n} optimized images', file_mb: 'Files up to {n} MB', rate_n: '{n} requests / minute', keys_n: '{n} API keys',
    payg: 'Pay as you go', payg_desc: 'No commitment — each optimized image is charged from your wallet.', no_charge: 'Free if it can\'t be made smaller',
    popular: 'Popular', choose: 'Choose plan', topup: 'Top up wallet',
    st_wait: 'Waiting', st_proc: 'Optimizing…', st_skip: 'Already optimal', st_err: 'Error',
    too_many: 'Up to {n} images per batch. Sign in for more.', too_big: '{name} is larger than {mb} MB and was skipped.', not_img: '{name} is not a supported image.',
    limit_hit: 'You\'ve reached the free hourly limit. <a href="/panel/login">Sign in</a> to keep optimizing without limits.',
    busy: 'Server is busy — retrying in {s}s…', net_err: 'Could not connect.',
    summary: '{done} of {total} · saved {saved} ({pct})', remove: 'Remove', download: 'Download',
    btn_retry: 'Retry failed', st_queue: 'Queued', st_stale: 'Updating with new settings…', original: 'Original', add_more: 'Add more images', drop_title2: 'Drop images here or click to choose'
  };
  var defaults = {};
  var lang = 'en';

  function readCookie(n) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + n + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : '';
  }
  function t(key, vars) {
    var s = (lang === 'fa' ? FA[key] : EN[key]) || defaults[key] || EN[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }
  function num(n, opts) {
    return Number(n).toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US', opts);
  }
  function bytes(b) {
    var u = lang === 'fa' ? ['بایت', 'کیلوبایت', 'مگابایت', 'گیگابایت'] : ['B', 'KB', 'MB', 'GB'];
    var i = 0;
    while (b >= 1024 && i < u.length - 1) { b /= 1024; i++; }
    return num(i ? Math.round(b * 10) / 10 : b) + ' ' + u[i];
  }
  function pct(p) { return num(Math.round(p * 10) / 10) + (lang === 'fa' ? '٪' : '%'); }

  function applyLang(l) {
    lang = l === 'fa' ? 'fa' : 'en';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in defaults)) defaults[k] = el.innerHTML;
      el.innerHTML = lang === 'fa' && FA[k] ? FA[k] : defaults[k];
    });
    document.getElementById('lang-toggle').textContent = lang === 'fa' ? 'EN' : 'فا';
    document.cookie = 'seraf_lang=' + lang + ';path=/;max-age=31536000;samesite=lax';
    try { localStorage.setItem('seraf_lang', lang); } catch (e) {}
    renderLimits();
    renderPlans();
    renderAccount();
    renderQueue();
    if (typeof renderPreview === "function") renderPreview();
  }

  // ---- Account state ----------------------------------------------------------------
  var me = null;
  function renderAccount() {
    var b = document.getElementById('account-btn');
    if (me && me.logged_in) {
      b.textContent = t('btn_dashboard');
      b.href = me.admin ? '/panel/admin' : '/panel/dashboard';
      b.removeAttribute('data-i18n');
    }
  }
  fetch('/panel/me', { credentials: 'same-origin' }).then(function (r) { return r.json(); })
    .then(function (d) { me = d; renderAccount(); }).catch(function () {});

  // ---- Pricing ----------------------------------------------------------------------
  var catalog = null;
  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; }
  function renderPlans() {
    var box = document.getElementById('plans');
    if (!catalog || !box) return;
    var html = '';
    catalog.plans.forEach(function (p) {
      var name = lang === 'fa' && p.name_fa ? p.name_fa : p.name_en;
      var desc = lang === 'fa' && p.description_fa ? p.description_fa : p.description_en;
      html += '<div class="plan glass' + (p.featured ? ' featured' : '') + '">' + (p.featured ? '<span class="tag">' + t('popular') + '</span>' : '') +
        '<h3>' + esc(name) + '</h3><div class="price"><strong>' + num(p.price) + '</strong><span>' + t('toman') + ' / ' + t('days', { n: num(p.duration_days) }) + '</span></div>' +
        '<p>' + esc(desc) + '</p><ul><li>' + t('images_n', { n: num(p.image_quota) }) + '</li><li>' + t('file_mb', { n: num(p.max_file_mb) }) + '</li><li>' +
        t('rate_n', { n: num(p.rate_per_minute) }) + '</li><li>' + t('keys_n', { n: num(p.max_api_keys) }) + '</li></ul>' +
        '<a class="btn ' + (p.featured ? 'btn-primary' : 'btn-ghost') + '" href="/panel/plans">' + t('choose') + '</a></div>';
    });
    var g = catalog.pay_as_you_go;
    html += '<div class="plan glass"><h3>' + t('payg') + '</h3><div class="price"><strong>' + num(g.price_per_image) + '</strong><span>' + t('toman') + ' / ' + t('per_image') + '</span></div>' +
      '<p>' + t('payg_desc') + '</p><ul><li>' + t('file_mb', { n: num(g.max_file_mb) }) + '</li><li>' + t('rate_n', { n: num(g.rate_per_minute) }) + '</li><li>' + t('no_charge') + '</li></ul>' +
      '<a class="btn btn-ghost" href="/panel/wallet">' + t('topup') + '</a></div>';
    box.innerHTML = html;
  }
  fetch('/api/v1/plans').then(function (r) { return r.json(); }).then(function (d) {
    if (!d.ok) return;
    catalog = d.data;
    LIMITS.batch = catalog.guest.max_batch || 10;
    LIMITS.mb = catalog.guest.max_file_mb || 5;
    if (!catalog.guest.enabled) document.getElementById('tool').style.display = 'none';
    var fmt = document.getElementById('opt-format');
    Array.prototype.forEach.call(fmt.options, function (o) {
      if (o.value !== 'original' && catalog.formats.indexOf(o.value) < 0) o.disabled = true;
    });
    renderLimits();
    renderPlans();
  }).catch(function () {});

  // ---- Guest batch optimizer -----------------------------------------------------------
  // Images start optimizing as soon as they are added, strictly one at a time. Changing a
  // setting re-optimizes the image in the preview first, then the rest of the batch.
  var LIMITS = { batch: 10, mb: 5 };
  var items = [];          // {id, file, url, status: queue|proc|done|skip|err, stale, blob, outUrl, format, sig}
  var running = false;
  var selected = null;
  var stopped = false;     // set when the free hourly limit is hit
  var seq = 0;
  var $ = function (id) { return document.getElementById(id); };

  var guestId = (function () {
    try {
      var g = localStorage.getItem('seraf_guest');
      if (!g) { g = Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem('seraf_guest', g); }
      return g;
    } catch (e) { return ''; }
  })();

  function renderLimits() {
    var el = $('tool-limits');
    if (el) el.textContent = t('tool_limits', { n: num(LIMITS.batch), mb: num(LIMITS.mb) });
  }
  function msg(html) {
    var m = $('tool-msg');
    if (!html) { m.hidden = true; return; }
    m.innerHTML = html;
    m.hidden = false;
  }
  function settings() {
    return { format: $('opt-format').value, quality: $('opt-quality').value, width: $('opt-width').value };
  }
  function sigOf(s) { return s.format + '|' + s.quality + '|' + s.width; }
  function extFor(fmt) { return fmt === 'jpeg' ? 'jpg' : fmt; }
  function fmtLabel(fmt) { return (fmt || '').toUpperCase().replace('JPEG', 'JPG'); }
  function outName(it) {
    var base = it.file.name.replace(/\.[^.]+$/, '');
    return base + '.' + extFor(it.format || it.file.name.split('.').pop().toLowerCase());
  }
  function find(id) { for (var i = 0; i < items.length; i++) if (items[i].id === id) return items[i]; return null; }

  function addFiles(list) {
    msg('');
    stopped = false;
    var errors = [], added = null;
    Array.prototype.forEach.call(list, function (f) {
      if (items.length >= LIMITS.batch) { errors.push(t('too_many', { n: num(LIMITS.batch) })); return; }
      if (!/^image\/(jpeg|png|webp|avif|gif)$/.test(f.type)) { errors.push(t('not_img', { name: esc(f.name) })); return; }
      if (f.size > LIMITS.mb * 1048576) { errors.push(t('too_big', { name: esc(f.name), mb: num(LIMITS.mb) })); return; }
      var it = { id: ++seq, file: f, url: URL.createObjectURL(f), status: 'queue' };
      items.push(it);
      if (!added) added = it;
    });
    if (errors.length) msg(errors.filter(function (e, i, a) { return a.indexOf(e) === i; }).join('<br>'));
    if (added && !selected) selected = added.id;
    renderQueue();
    renderPreview();
    pump();
  }

  // Picks the next job: the previewed image first (so the preview reacts instantly), then queue order.
  function nextJob() {
    var want = sigOf(settings());
    var needs = function (it) { return it.status === 'queue' || ((it.status === 'done' || it.status === 'skip') && it.sig !== want); };
    var sel = find(selected);
    if (sel && needs(sel)) return sel;
    for (var i = 0; i < items.length; i++) if (needs(items[i])) return items[i];
    return null;
  }

  async function pump() {
    if (running || stopped) return;
    running = true;
    var it;
    while (!stopped && (it = nextJob())) {
      var s = settings();
      var sig = sigOf(s);
      var hadResult = !!it.blob;
      it.status = hadResult ? it.status : 'proc';
      it.busy = true;
      renderQueue();
      if (it.id === selected) renderPreview();
      var r = await processOne(it, s);
      it.busy = false;
      if (r === 'limit') {
        stopped = true;
        if (!hadResult) it.status = 'queue';
        msg(t('limit_hit'));
      } else if (r === 'ok') {
        it.sig = sig;
      } else if (!hadResult) {
        it.status = 'err';
      }
      renderQueue();
      if (it.id === selected) renderPreview();
      await sleep(150); // gentle pacing between requests
    }
    running = false;
    renderQueue();
  }

  function processOne(it, s) {
    var attempt = 0;
    var send = function () {
      var fd = new FormData();
      fd.append('image', it.file, it.file.name);
      fd.append('quality', s.quality);
      fd.append('format', s.format);
      if (s.width !== '0') fd.append('max_width', s.width);
      return fetch('/api/v1/guest/optimize', { method: 'POST', body: fd, headers: guestId ? { 'X-Seraf-Guest': guestId } : {} });
    };
    var handle = function (res) {
      if (res.ok) {
        var fmt = res.headers.get('X-Seraf-Output-Format') || '';
        var st = res.headers.get('X-Seraf-Status');
        return res.blob().then(function (b) {
          if (it.outUrl) URL.revokeObjectURL(it.outUrl);
          it.blob = b;
          it.outUrl = URL.createObjectURL(b);
          it.format = fmt;
          it.quality = s.quality;
          it.status = st === 'skipped' ? 'skip' : 'done';
          it.error = '';
          return 'ok';
        });
      }
      return res.json().catch(function () { return {}; }).then(function (d) {
        var e = (d && d.error) || {};
        if (e.code === 'guest_limit') return 'limit';
        if ((e.code === 'server_busy' || res.status >= 500) && attempt < 4) {
          attempt++;
          msg(t('busy', { s: num(e.retry_after || 5) }));
          return sleep((e.retry_after || 5) * 1000).then(function () { msg(''); return send().then(handle, fail); });
        }
        it.error = e.message || ('HTTP ' + res.status);
        return 'err';
      });
    };
    var fail = function () {
      if (attempt < 3) {
        attempt++;
        return sleep(3000).then(function () { return send().then(handle, fail); });
      }
      it.error = t('net_err');
      return 'err';
    };
    return send().then(handle, fail);
  }

  function renderPreview() {
    var box = $('preview');
    var it = find(selected);
    if (!it) { box.hidden = true; return; }
    box.hidden = false;
    var before = $('cmp-before'), after = $('cmp-after');
    if (before.getAttribute('src') !== it.url) before.src = it.url;
    var afterSrc = it.outUrl || it.url;
    if (after.getAttribute('src') !== afterSrc) after.src = afterSrc;
    $('tag-before').textContent = t('original') + ' · ' + fmtLabel(it.file.type.split('/')[1]) + ' · ' + bytes(it.file.size);
    if (it.blob) {
      var p = it.file.size ? (it.file.size - it.blob.size) * 100 / it.file.size : 0;
      $('tag-after').textContent = fmtLabel(it.format) + ' · q' + num(it.quality) + ' · ' + bytes(it.blob.size);
      $('cmp-saving').textContent = p > 0 ? '−' + pct(p) : t('st_skip');
    } else {
      $('tag-after').textContent = it.status === 'err' ? t('st_err') : t('st_proc');
      $('cmp-saving').textContent = '';
    }
    $('cmp-name').textContent = it.file.name;
    $('cmp-busy').hidden = !(it.busy || it.status === 'queue' || it.status === 'proc');
  }

  function setSplit(v) {
    $('cmp-after-wrap').style.clipPath = 'inset(0 0 0 ' + v + '%)';
    $('cmp-line').style.left = v + '%';
  }

  function renderQueue() {
    var q = $('queue');
    if (!q) return;
    var want = sigOf(settings());
    q.innerHTML = '';
    var done = 0, inB = 0, outB = 0, failed = 0;
    items.forEach(function (it) {
      var li = document.createElement('li');
      var stale = (it.status === 'done' || it.status === 'skip') && it.sig !== want;
      var cls = it.status === 'proc' || it.busy ? 'processing' : it.status === 'done' || it.status === 'skip' ? 'done' : it.status === 'err' ? 'error' : '';
      if (stale && !it.busy) cls += ' stale';
      if (it.id === selected) cls += ' sel';
      li.className = cls;
      li.setAttribute('data-id', it.id);
      var meta = bytes(it.file.size);
      var side = '';
      if (it.blob) {
        done++; inB += it.file.size; outB += it.blob.size;
        var p = it.file.size ? (it.file.size - it.blob.size) * 100 / it.file.size : 0;
        meta = bytes(it.file.size) + ' → ' + bytes(it.blob.size) + ' · ' + fmtLabel(it.format) + (it.busy || stale ? ' · ' + t('st_stale') : it.status === 'skip' ? ' · ' + t('st_skip') : '');
        side = (p > 0 ? '<span class="saving">−' + pct(p) + '</span>' : '') +
          '<a class="icon-btn" title="' + t('download') + '" download="' + esc(outName(it)) + '" href="' + it.outUrl + '">⤓</a>';
      } else if (it.status === 'proc' || it.busy) {
        meta += ' · ' + t('st_proc');
      } else if (it.status === 'err') {
        failed++;
        meta += ' · <span class="q-err">' + esc(it.error || t('st_err')) + '</span>';
      } else {
        meta += ' · ' + t('st_queue');
      }
      if (!it.busy) side += '<button class="icon-btn" type="button" data-rm="' + it.id + '" title="' + t('remove') + '">×</button>';
      li.innerHTML = '<img alt="" src="' + it.url + '"><div style="min-width:0"><div class="q-name">' + esc(it.file.name) + '</div><div class="q-meta">' + meta +
        '</div><div class="q-bar"><span></span></div></div><div class="q-side">' + side + '</div>';
      q.appendChild(li);
    });
    var fresh = items.filter(function (it) { return it.blob && it.sig === want && !it.busy; }).length;
    $('overall').hidden = items.length === 0;
    $('overall').firstElementChild.style.width = (items.length ? Math.round(fresh * 100 / items.length) : 0) + '%';
    $('run-btn').hidden = failed === 0 || running;
    $('zip-btn').hidden = done === 0;
    $('zip-btn').disabled = running;
    $('clear-btn').hidden = items.length === 0;
    $('drop').classList.toggle('compact', items.length > 0);
    var dt = $('drop').querySelector('strong');
    if (dt) dt.textContent = items.length ? t('add_more') : t('drop_title2');
    $('summary').textContent = done ? t('summary', { done: num(done), total: num(items.length), saved: bytes(Math.max(0, inB - outB)), pct: pct(inB ? (inB - outB) * 100 / inB : 0) }) : '';
  }

  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  // ---- Minimal ZIP writer (stored, no compression — images are already compressed) ----
  var CRC = (function () {
    var c, table = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c >>> 0;
    }
    return table;
  })();
  function crc32(buf) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }
  async function makeZip(files) {
    var enc = new TextEncoder(), parts = [], central = [], offset = 0;
    var d = new Date();
    var time = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
    var date = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
    for (var i = 0; i < files.length; i++) {
      var name = enc.encode(files[i].name);
      var data = new Uint8Array(await files[i].blob.arrayBuffer());
      var crc = crc32(data);
      var lh = new DataView(new ArrayBuffer(30));
      lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
      lh.setUint16(10, time, true); lh.setUint16(12, date, true); lh.setUint32(14, crc, true);
      lh.setUint32(18, data.length, true); lh.setUint32(22, data.length, true); lh.setUint16(26, name.length, true); lh.setUint16(28, 0, true);
      parts.push(lh.buffer, name, data);
      var ch = new DataView(new ArrayBuffer(46));
      ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint16(10, 0, true);
      ch.setUint16(12, time, true); ch.setUint16(14, date, true); ch.setUint32(16, crc, true); ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true);
      ch.setUint16(28, name.length, true); ch.setUint32(42, offset, true);
      central.push(ch.buffer, name);
      offset += 30 + name.length + data.length;
    }
    var cdSize = central.reduce(function (s, p) { return s + (p.byteLength || p.length); }, 0);
    var end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
    end.setUint32(12, cdSize, true); end.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [end.buffer]), { type: 'application/zip' });
  }
  async function downloadZip() {
    var used = {};
    var files = items.filter(function (it) { return it.blob; }).map(function (it) {
      var n = outName(it), base = n, k = 1;
      while (used[n]) { n = base.replace(/(\.[^.]+)$/, '-' + (k++) + '$1'); }
      used[n] = true;
      return { name: n, blob: it.blob };
    });
    if (!files.length) return;
    var zip = await makeZip(files);
    var a = document.createElement('a');
    a.href = URL.createObjectURL(zip);
    a.download = 'seraf-optimized.zip';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
  }

  // ---- Wiring ------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    var saved = '';
    try { saved = localStorage.getItem('seraf_lang') || ''; } catch (e) {}
    applyLang(readCookie('seraf_lang') || saved || 'en');
    $('year').textContent = new Date().getFullYear();

    $('lang-toggle').addEventListener('click', function () { applyLang(lang === 'fa' ? 'en' : 'fa'); renderPreview(); });
    $('burger').addEventListener('click', function () { $('links').classList.toggle('open'); });
    $('links').addEventListener('click', function (e) { if (e.target.tagName === 'A') $('links').classList.remove('open'); });

    var drop = $('drop'), input = $('file-input');
    input.addEventListener('change', function () { addFiles(input.files); input.value = ''; });
    ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
    ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('over'); }); });
    drop.addEventListener('drop', function (e) { addFiles(e.dataTransfer.files); });
    document.addEventListener('paste', function (e) {
      if (!e.clipboardData) return;
      var files = Array.prototype.filter.call(e.clipboardData.files || [], function (f) { return /^image\//.test(f.type); });
      if (files.length) addFiles(files);
    });

    // Settings: quality updates its label while dragging and re-optimizes when released;
    // selects re-optimize immediately. Debounced so quick changes cost one request.
    var timer = null;
    var changed = function () {
      clearTimeout(timer);
      timer = setTimeout(function () { stopped = false; msg(''); renderQueue(); renderPreview(); pump(); }, 350);
    };
    $('opt-quality').addEventListener('input', function () { $('q-val').textContent = num(this.value); });
    $('opt-quality').addEventListener('change', changed);
    $('opt-format').addEventListener('change', changed);
    $('opt-width').addEventListener('change', changed);
    $('q-val').textContent = num($('opt-quality').value);

    $('cmp-range').addEventListener('input', function () { setSplit(this.value); });
    setSplit(50);

    $('run-btn').addEventListener('click', function () {
      items.forEach(function (it) { if (it.status === 'err') { it.status = 'queue'; it.error = ''; } });
      stopped = false;
      msg('');
      renderQueue();
      pump();
    });
    $('zip-btn').addEventListener('click', downloadZip);
    $('clear-btn').addEventListener('click', function () {
      items.forEach(function (it) { URL.revokeObjectURL(it.url); if (it.outUrl) URL.revokeObjectURL(it.outUrl); });
      items = [];
      selected = null;
      msg('');
      renderQueue();
      renderPreview();
    });
    $('queue').addEventListener('click', function (e) {
      if (e.target.closest('a')) return; // download link
      var rm = e.target.closest('[data-rm]');
      if (rm) {
        var id = Number(rm.getAttribute('data-rm'));
        items = items.filter(function (it) {
          if (it.id !== id) return true;
          URL.revokeObjectURL(it.url);
          if (it.outUrl) URL.revokeObjectURL(it.outUrl);
          return false;
        });
        if (selected === id) selected = items.length ? items[0].id : null;
        renderQueue();
        renderPreview();
        return;
      }
      var li = e.target.closest('li[data-id]');
      if (li) {
        selected = Number(li.getAttribute('data-id'));
        renderQueue();
        renderPreview();
        pump(); // if it needs the new settings, it goes first
      }
    });

    document.querySelectorAll('.tabs button').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.tabs button').forEach(function (x) { x.classList.toggle('on', x === b); });
        document.querySelectorAll('[data-code]').forEach(function (p) { p.hidden = p.getAttribute('data-code') !== b.getAttribute('data-tab'); });
      });
    });
  });
})();
