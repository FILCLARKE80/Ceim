/**
 * Property Price Index - Mobile App
 * Interactive search and visualization of residential property price indices
 */

// ============================
// State
// ============================
const state = {
    regions: [],
    results: [],
    selectedType: "all",
    currentView: "search",
    compareSelected: new Set(),
    charts: {},
};

const PROPERTY_TYPES = {
    all: "All Types",
    detached: "Detached",
    semi_detached: "Semi-Detached",
    terraced: "Terraced",
    flat: "Flat",
};

const TYPE_COLORS = {
    detached: "#1a73e8",
    semi_detached: "#e8710a",
    terraced: "#9334e6",
    flat: "#1e8e3e",
    all: "#5f6368",
};

const COMPARE_COLORS = [
    "#1a73e8", "#e8710a", "#9334e6", "#1e8e3e",
    "#d93025", "#f9ab00", "#137333", "#185abc",
    "#b31412", "#e37400", "#7627bb", "#0d652d",
];

// ============================
// DOM References
// ============================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ============================
// Init
// ============================
document.addEventListener("DOMContentLoaded", init);

async function init() {
    await loadData();
    setupEventListeners();
    hideSplash();
}

async function loadData() {
    try {
        const res = await fetch("/api/search?type=" + state.selectedType);
        const data = await res.json();
        state.results = data.results;

        const regRes = await fetch("/api/regions");
        const regData = await regRes.json();
        state.regions = regData.regions;

        renderResults(state.results);
        updateSummary(state.results);
    } catch (err) {
        console.error("Failed to load data:", err);
    }
}

function hideSplash() {
    setTimeout(() => {
        const splash = $("#splash");
        const app = $("#app");
        splash.classList.add("fade-out");
        app.classList.remove("hidden");
        setTimeout(() => splash.classList.add("hidden"), 400);
    }, 800);
}

// ============================
// Event Listeners
// ============================
function setupEventListeners() {
    // Search
    const searchInput = $("#searchInput");
    const searchBar = $("#searchBar");
    const searchClear = $("#searchClear");

    searchInput.addEventListener("focus", () => searchBar.classList.add("focused"));
    searchInput.addEventListener("blur", () => {
        if (!searchInput.value) searchBar.classList.remove("focused");
    });
    searchInput.addEventListener("input", debounce(handleSearch, 250));
    searchClear.addEventListener("click", () => {
        searchInput.value = "";
        searchClear.classList.add("hidden");
        searchBar.classList.remove("focused");
        searchInput.blur();
        handleSearch();
    });

    // Filter chips
    $$(".chip").forEach((chip) => {
        chip.addEventListener("click", () => {
            $$(".chip").forEach((c) => c.classList.remove("active"));
            chip.classList.add("active");
            state.selectedType = chip.dataset.type;
            handleSearch();
        });
    });

    // Scroll shadow on header
    window.addEventListener("scroll", () => {
        const header = $("#header");
        header.classList.toggle("scrolled", window.scrollY > 2);
    });

    // Info modal
    $("#infoBtn").addEventListener("click", openInfoModal);
    $("#infoClose").addEventListener("click", closeInfoModal);
    $("#infoModal").addEventListener("click", (e) => {
        if (e.target === $("#infoModal")) closeInfoModal();
    });

    // Bottom sheet
    $("#sheetOverlay").addEventListener("click", closeSheet);
    $("#sheetClose").addEventListener("click", closeSheet);

    // Bottom navigation
    $$(".nav-item").forEach((item) => {
        item.addEventListener("click", () => switchView(item.dataset.view));
    });

    // PWA install
    let deferredPrompt;
    window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        deferredPrompt = e;
        const installSection = $("#installSection");
        if (installSection) installSection.style.display = "block";
        $("#installBtn").addEventListener("click", () => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => {
                deferredPrompt = null;
                installSection.style.display = "none";
            });
        });
    });
}

// ============================
// Search
// ============================
async function handleSearch() {
    const query = $("#searchInput").value.trim();
    const searchClear = $("#searchClear");
    searchClear.classList.toggle("hidden", !query);

    try {
        const params = new URLSearchParams({
            q: query,
            type: state.selectedType,
        });
        const res = await fetch("/api/search?" + params);
        const data = await res.json();
        state.results = data.results;

        renderResults(state.results);
        updateSummary(state.results);
        updateResultsTitle(query);
    } catch (err) {
        console.error("Search error:", err);
    }
}

function updateResultsTitle(query) {
    const title = $("#resultsTitle");
    if (query) {
        title.textContent = `Results for "${query}"`;
    } else {
        title.textContent = "All Regions";
    }
}

// ============================
// Render Results
// ============================
function renderResults(results) {
    const list = $("#resultsList");
    const count = $("#resultsCount");
    count.textContent = `${results.length} region${results.length !== 1 ? "s" : ""}`;

    if (results.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <span class="material-symbols-rounded">search_off</span>
                <h3>No regions found</h3>
                <p>Try a different search term or filter</p>
            </div>`;
        return;
    }

    list.innerHTML = results
        .map(
            (r, i) => `
        <div class="region-card animate-in" onclick="openRegionDetail('${r.id}')" style="animation-delay: ${i * 0.03}s">
            <div class="region-card-icon">
                <span class="material-symbols-rounded">location_city</span>
            </div>
            <div class="region-card-info">
                <div class="region-card-name">${r.name}</div>
                <div class="region-card-country">${r.country}</div>
            </div>
            <div class="region-card-stats">
                <div class="region-card-index">${r.latest_index.toFixed(1)}</div>
                <div class="region-card-change ${r.change_percent >= 0 ? "positive" : "negative"}">
                    <span class="material-symbols-rounded">${r.change_percent >= 0 ? "arrow_upward" : "arrow_downward"}</span>
                    ${Math.abs(r.change_percent)}%
                </div>
                <div class="region-card-price">${formatPrice(r.latest_avg_price)}</div>
            </div>
        </div>`
        )
        .join("");
}

function updateSummary(results) {
    if (results.length === 0) return;

    // Highest index
    const highest = results.reduce((a, b) => (a.latest_index > b.latest_index ? a : b));
    $("#summaryHighest").textContent = highest.latest_index.toFixed(1);
    $("#summaryHighestRegion").textContent = highest.name;

    // Average
    const avg = results.reduce((sum, r) => sum + r.latest_index, 0) / results.length;
    $("#summaryAvg").textContent = avg.toFixed(1);
    $("#summaryAvgLabel").textContent = `Across ${results.length} regions`;

    // Top growth
    const topGrowth = results.reduce((a, b) => (a.change_percent > b.change_percent ? a : b));
    const growthEl = $("#summaryGrowth");
    growthEl.textContent = `+${topGrowth.change_percent}%`;
    growthEl.className = "summary-value " + (topGrowth.change_percent >= 0 ? "positive" : "negative");
    $("#summaryGrowthRegion").textContent = topGrowth.name;
}

// ============================
// Region Detail (Bottom Sheet)
// ============================
async function openRegionDetail(regionId) {
    try {
        const res = await fetch(`/api/region/${regionId}`);
        const region = await res.json();

        // Populate header
        $("#sheetTitle").textContent = region.name;
        $("#sheetSubtitle").textContent = region.country;

        const latest = region.data[region.data.length - 1];
        const earliest = region.data[0];
        const indexVal = latest[state.selectedType] || latest.all;
        const prevVal = earliest[state.selectedType] || earliest.all;
        const change = ((indexVal - prevVal) / prevVal * 100).toFixed(1);

        // Stats
        $("#statIndex").textContent = indexVal.toFixed(1);
        $("#statPrice").textContent = formatPrice(latest.avg_price);
        const changeEl = $("#statChange");
        changeEl.textContent = `${change >= 0 ? "+" : ""}${change}%`;
        changeEl.style.color = change >= 0 ? "var(--positive)" : "var(--negative)";

        // Chart
        renderTrendChart(region.data);

        // Breakdown
        renderBreakdown(latest);

        // Table
        renderDataTable(region.data);

        // Show sheet
        showSheet();
    } catch (err) {
        console.error("Error loading region:", err);
    }
}

function renderTrendChart(data) {
    const ctx = $("#trendChart");
    if (state.charts.trend) state.charts.trend.destroy();

    const labels = data.map((d) => formatDate(d.date));
    const datasets = [];

    if (state.selectedType === "all") {
        // Show all types
        ["detached", "semi_detached", "terraced", "flat"].forEach((type) => {
            datasets.push({
                label: PROPERTY_TYPES[type],
                data: data.map((d) => d[type]),
                borderColor: TYPE_COLORS[type],
                backgroundColor: TYPE_COLORS[type] + "15",
                borderWidth: 2,
                pointRadius: 3,
                pointHoverRadius: 5,
                tension: 0.3,
                fill: false,
            });
        });
    } else {
        datasets.push({
            label: PROPERTY_TYPES[state.selectedType],
            data: data.map((d) => d[state.selectedType]),
            borderColor: TYPE_COLORS[state.selectedType] || TYPE_COLORS.all,
            backgroundColor: (TYPE_COLORS[state.selectedType] || TYPE_COLORS.all) + "20",
            borderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.3,
            fill: true,
        });
    }

    state.charts.trend = new Chart(ctx, {
        type: "line",
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: "index" },
            plugins: {
                legend: {
                    display: state.selectedType === "all",
                    position: "bottom",
                    labels: {
                        boxWidth: 10,
                        padding: 12,
                        font: { size: 11, family: "'Inter', sans-serif" },
                    },
                },
                tooltip: {
                    backgroundColor: "rgba(31,31,31,0.9)",
                    titleFont: { size: 12, family: "'Inter', sans-serif" },
                    bodyFont: { size: 12, family: "'Inter', sans-serif" },
                    padding: 10,
                    cornerRadius: 8,
                    callbacks: {
                        label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)}`,
                    },
                },
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 10, family: "'Inter', sans-serif" }, maxRotation: 45 },
                },
                y: {
                    grid: { color: "rgba(0,0,0,0.05)" },
                    ticks: { font: { size: 10, family: "'Inter', sans-serif" } },
                },
            },
        },
    });
}

function renderBreakdown(latest) {
    const list = $("#breakdownList");
    const types = ["detached", "semi_detached", "terraced", "flat"];
    const maxVal = Math.max(...types.map((t) => latest[t]));

    list.innerHTML = types
        .map((type) => {
            const val = latest[type];
            const pct = (val / maxVal) * 100;
            return `
            <div class="breakdown-item">
                <div class="breakdown-dot" style="background: ${TYPE_COLORS[type]}"></div>
                <div class="breakdown-name">${PROPERTY_TYPES[type]}</div>
                <div class="breakdown-bar-bg">
                    <div class="breakdown-bar" style="width: ${pct}%; background: ${TYPE_COLORS[type]}"></div>
                </div>
                <div class="breakdown-value">${val.toFixed(1)}</div>
            </div>`;
        })
        .join("");
}

function renderDataTable(data) {
    const tbody = $("#dataTableBody");
    const type = state.selectedType;

    tbody.innerHTML = data
        .slice()
        .reverse()
        .map(
            (d) => `
        <tr>
            <td>${formatDate(d.date)}</td>
            <td>${(d[type] || d.all).toFixed(1)}</td>
            <td>${formatPrice(d.avg_price)}</td>
        </tr>`
        )
        .join("");
}

// ============================
// Bottom Sheet Controls
// ============================
function showSheet() {
    const overlay = $("#sheetOverlay");
    const sheet = $("#bottomSheet");
    overlay.classList.remove("hidden");
    sheet.classList.remove("hidden");
    requestAnimationFrame(() => {
        overlay.classList.add("visible");
        sheet.classList.add("visible");
    });
    document.body.style.overflow = "hidden";
}

function closeSheet() {
    const overlay = $("#sheetOverlay");
    const sheet = $("#bottomSheet");
    overlay.classList.remove("visible");
    sheet.classList.remove("visible");
    document.body.style.overflow = "";
    setTimeout(() => {
        overlay.classList.add("hidden");
        sheet.classList.add("hidden");
    }, 350);
}

// ============================
// Info Modal
// ============================
function openInfoModal() {
    const modal = $("#infoModal");
    modal.classList.remove("hidden");
    requestAnimationFrame(() => modal.classList.add("visible"));
}

function closeInfoModal() {
    const modal = $("#infoModal");
    modal.classList.remove("visible");
    setTimeout(() => modal.classList.add("hidden"), 250);
}

// ============================
// View Switching
// ============================
function switchView(view) {
    state.currentView = view;

    // Update nav
    $$(".nav-item").forEach((item) => {
        item.classList.toggle("active", item.dataset.view === view);
    });

    // Toggle views
    const content = $("#content");
    const compareView = $("#compareView");
    const trendsView = $("#trendsView");
    const header = $("#header");

    content.classList.toggle("hidden", view !== "search");
    compareView.classList.toggle("hidden", view !== "compare");
    trendsView.classList.toggle("hidden", view !== "trends");

    // Show/hide search header elements for non-search views
    const searchContainer = $(".search-container");
    const filterBar = $(".filter-bar");
    searchContainer.style.display = view === "search" ? "" : "none";
    filterBar.style.display = view === "search" ? "" : "none";

    if (view === "compare") renderCompareView();
    if (view === "trends") renderTrendsView();

    window.scrollTo(0, 0);
}

// ============================
// Compare View
// ============================
function renderCompareView() {
    const selectContainer = $("#compareSelect");

    selectContainer.innerHTML = state.regions
        .map(
            (r) => `
        <div class="compare-item ${state.compareSelected.has(r.id) ? "selected" : ""}" onclick="toggleCompare('${r.id}')">
            <div class="compare-checkbox">
                <span class="material-symbols-rounded">check</span>
            </div>
            <div class="compare-item-name">${r.name}</div>
        </div>`
        )
        .join("");

    if (state.compareSelected.size >= 2) {
        updateCompareChart();
    }
}

function toggleCompare(regionId) {
    if (state.compareSelected.has(regionId)) {
        state.compareSelected.delete(regionId);
    } else if (state.compareSelected.size < 5) {
        state.compareSelected.add(regionId);
    }
    renderCompareView();

    if (state.compareSelected.size >= 2) {
        updateCompareChart();
    } else {
        $("#compareChartContainer").classList.add("hidden");
    }
}

async function updateCompareChart() {
    const ids = Array.from(state.compareSelected).join(",");
    const params = new URLSearchParams({
        regions: ids,
        type: state.selectedType,
    });

    try {
        const res = await fetch("/api/compare?" + params);
        const data = await res.json();

        const container = $("#compareChartContainer");
        container.classList.remove("hidden");

        const ctx = $("#compareChart");
        if (state.charts.compare) state.charts.compare.destroy();

        const labels = data.comparison[0]?.series.map((s) => formatDate(s.date)) || [];
        const datasets = data.comparison.map((region, i) => ({
            label: region.name,
            data: region.series.map((s) => s.value),
            borderColor: COMPARE_COLORS[i],
            backgroundColor: COMPARE_COLORS[i] + "15",
            borderWidth: 2.5,
            pointRadius: 3,
            tension: 0.3,
            fill: false,
        }));

        state.charts.compare = new Chart(ctx, {
            type: "line",
            data: { labels, datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { intersect: false, mode: "index" },
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            boxWidth: 10,
                            padding: 12,
                            font: { size: 11, family: "'Inter', sans-serif" },
                        },
                    },
                    tooltip: {
                        backgroundColor: "rgba(31,31,31,0.9)",
                        titleFont: { size: 12, family: "'Inter', sans-serif" },
                        bodyFont: { size: 12, family: "'Inter', sans-serif" },
                        padding: 10,
                        cornerRadius: 8,
                    },
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { font: { size: 10 }, maxRotation: 45 },
                    },
                    y: {
                        grid: { color: "rgba(0,0,0,0.05)" },
                        ticks: { font: { size: 10 } },
                    },
                },
            },
        });
    } catch (err) {
        console.error("Compare error:", err);
    }
}

// ============================
// Trends View
// ============================
async function renderTrendsView() {
    try {
        const res = await fetch("/api/search?type=" + state.selectedType);
        const data = await res.json();
        const results = data.results;

        // Render national overview chart - all regions
        const ctx = $("#trendsChart");
        if (state.charts.trends) state.charts.trends.destroy();

        const datasets = results.slice(0, 6).map((region, i) => ({
            label: region.name,
            data: region.data.map((d) => d[state.selectedType] || d.all),
            borderColor: COMPARE_COLORS[i],
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.3,
            fill: false,
        }));

        const labels = results[0]?.data.map((d) => formatDate(d.date)) || [];

        state.charts.trends = new Chart(ctx, {
            type: "line",
            data: { labels, datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { intersect: false, mode: "index" },
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            boxWidth: 8,
                            padding: 10,
                            font: { size: 10, family: "'Inter', sans-serif" },
                        },
                    },
                    tooltip: {
                        backgroundColor: "rgba(31,31,31,0.9)",
                        padding: 10,
                        cornerRadius: 8,
                    },
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { font: { size: 10 }, maxRotation: 45 },
                    },
                    y: {
                        grid: { color: "rgba(0,0,0,0.05)" },
                        ticks: { font: { size: 10 } },
                    },
                },
            },
        });

        // Insights
        renderInsights(results);
    } catch (err) {
        console.error("Trends error:", err);
    }
}

function renderInsights(results) {
    const container = $("#trendsInsights");

    // Compute insights
    const avgIndex = results.reduce((sum, r) => sum + r.latest_index, 0) / results.length;
    const highest = results.reduce((a, b) => (a.latest_index > b.latest_index ? a : b));
    const lowest = results.reduce((a, b) => (a.latest_index < b.latest_index ? a : b));
    const topGrowth = results.reduce((a, b) => (a.change_percent > b.change_percent ? a : b));
    const lowestGrowth = results.reduce((a, b) => (a.change_percent < b.change_percent ? a : b));

    const insights = [
        {
            icon: "monitoring",
            type: "neutral",
            title: "National Average",
            text: `The average property price index across all regions is ${avgIndex.toFixed(1)}, indicating a ${((avgIndex - 100) / 100 * 100).toFixed(0)}% increase since the 2015 base year.`,
        },
        {
            icon: "arrow_upward",
            type: "up",
            title: "Highest Index",
            text: `${highest.name} leads with an index of ${highest.latest_index.toFixed(1)} and an average property price of ${formatPrice(highest.latest_avg_price)}.`,
        },
        {
            icon: "trending_up",
            type: "up",
            title: "Fastest Growing",
            text: `${topGrowth.name} shows the strongest growth at +${topGrowth.change_percent}% over the measured period.`,
        },
        {
            icon: "arrow_downward",
            type: "down",
            title: "Most Affordable",
            text: `${lowest.name} has the lowest index at ${lowest.latest_index.toFixed(1)} with average prices of ${formatPrice(lowest.latest_avg_price)}.`,
        },
    ];

    container.innerHTML = insights
        .map(
            (ins) => `
        <div class="insight-card animate-in">
            <div class="insight-icon ${ins.type}">
                <span class="material-symbols-rounded">${ins.icon}</span>
            </div>
            <div>
                <div class="insight-title">${ins.title}</div>
                <div class="insight-text">${ins.text}</div>
            </div>
        </div>`
        )
        .join("");
}

// ============================
// Helpers
// ============================
function formatPrice(price) {
    if (price >= 1000000) return "\u00A3" + (price / 1000000).toFixed(1) + "M";
    if (price >= 1000) return "\u00A3" + (price / 1000).toFixed(0) + "K";
    return "\u00A3" + price.toLocaleString();
}

function formatDate(dateStr) {
    const [year, month] = dateStr.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[parseInt(month, 10) - 1] + " " + year;
}

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// ============================
// Service Worker Registration
// ============================
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
}
