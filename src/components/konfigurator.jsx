// app/components/konfigurator.jsx
"use client";

import { useEffect, useState } from "react";

const STORAGE_KEYS = {
    SETTINGS: "autoPublisherSettings",
    LOG: "autoPublisherLog",
    QUEUE: "autoPublisherQueueCount",
};

const defaultSettings = {
    pagesPerRun: 5,
    mode: "random", // random | oldest | priority
    notifyEnabled: true,
    notifyEmail: "",
};

export default function Konfigurator() {
    const [settings, setSettings] = useState(defaultSettings);
    const [log, setLog] = useState([]);
    const [queueCount, setQueueCount] = useState(0);
    const [activeTab, setActiveTab] = useState("settings");
    const [message, setMessage] = useState("");

    // Load from localStorage on first render
    useEffect(() => {
        if (typeof window === "undefined") return;

        try {
            const savedSettings = window.localStorage.getItem(STORAGE_KEYS.SETTINGS);
            const savedLog = window.localStorage.getItem(STORAGE_KEYS.LOG);
            const savedQueue = window.localStorage.getItem(STORAGE_KEYS.QUEUE);

            if (savedSettings) {
                setSettings(JSON.parse(savedSettings));
            }
            if (savedLog) {
                setLog(JSON.parse(savedLog));
            }
            if (savedQueue) {
                setQueueCount(parseInt(savedQueue, 10) || 0);
            } else {
                // optional: some demo queue size
                setQueueCount(10);
            }
        } catch (e) {
            console.error("Failed to load Konfigurator data:", e);
        }
    }, []);

    // Helpers to save to localStorage
    const persistSettings = (newSettings) => {
        setSettings(newSettings);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(
                STORAGE_KEYS.SETTINGS,
                JSON.stringify(newSettings)
            );
        }
    };

    const persistLog = (newLog) => {
        setLog(newLog);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(STORAGE_KEYS.LOG, JSON.stringify(newLog));
        }
    };

    const persistQueue = (newQueueCount) => {
        setQueueCount(newQueueCount);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(
                STORAGE_KEYS.QUEUE,
                String(newQueueCount)
            );
        }
    };

    const showMessage = (text) => {
        setMessage(text);
        setTimeout(() => setMessage(""), 3000);
    };

    // SETTINGS HANDLERS
    const handleSettingsSubmit = (e) => {
        e.preventDefault();
        let pagesPerRun = parseInt(settings.pagesPerRun, 10);
        if (!pagesPerRun || pagesPerRun <= 0) pagesPerRun = 1;

        const newSettings = {
            ...settings,
            pagesPerRun,
        };

        persistSettings(newSettings);
        showMessage("Einstellungen gespeichert.");
    };

    // MANUAL RUN (simulate cron)
    const handleManualRun = (e) => {
        e.preventDefault();

        if (queueCount <= 0) {
            showMessage("Keine Seiten in der Queue.");
            return;
        }

        const countToPublish = Math.min(settings.pagesPerRun || 1, queueCount);

        // Simulierte veröffentlichte Seiten
        const now = new Date();
        const published = Array.from({ length: countToPublish }).map((_, index) => {
            const id = Math.floor(Math.random() * 100000);
            return {
                ID: id,
                title: `Demo-Seite ${id}`,
                url: `https://example.com/demo-seite-${id}`,
                priority: settings.mode === "priority" ? 10 + index : "-",
            };
        });

        const newQueueCount = queueCount - countToPublish;
        persistQueue(newQueueCount);

        const entry = {
            time: now.toISOString(),
            mode: settings.mode,
            count: countToPublish,
            published,
        };

        const newLog = [...log, entry].slice(-50); // max 50 entries
        persistLog(newLog);

        showMessage(`Cron-Job simuliert: ${countToPublish} Seite(n) veröffentlicht.`);
    };

    // CSV UPLOAD
    const handleCsvUpload = async (e) => {
        e.preventDefault();
        const fileInput = e.target.elements.csvFile;
        const file = fileInput.files?.[0];

        if (!file) {
            showMessage("Bitte eine CSV-Datei auswählen.");
            return;
        }

        try {
            const text = await file.text();
            const lines = text.split(/\r?\n/).filter((line) => line.trim() !== "");
            if (lines.length <= 1) {
                showMessage("CSV enthält keine Datenzeilen.");
                return;
            }

            // Erste Zeile = Header
            const header = lines[0].split(";").map((h) => h.trim());
            const titleIndex = header.indexOf("title");
            const contentIndex = header.indexOf("content");

            if (titleIndex === -1 || contentIndex === -1) {
                showMessage('CSV muss mindestens "title" und "content" Spalten enthalten.');
                return;
            }

            let created = 0;
            for (let i = 1; i < lines.length; i++) {
                const row = lines[i].split(";");
                const title = (row[titleIndex] || "").trim();
                const content = (row[contentIndex] || "").trim();

                if (title && content) {
                    created++;
                }
            }

            if (created > 0) {
                const newQueueCount = queueCount + created;
                persistQueue(newQueueCount);
                showMessage(`${created} Seite(n) in Queue übernommen (simuliert).`);
            } else {
                showMessage("Keine gültigen Zeilen in der CSV gefunden.");
            }
        } catch (err) {
            console.error(err);
            showMessage("Fehler beim Lesen der CSV-Datei.");
        } finally {
            e.target.reset();
        }
    };

    // VIEW HELPERS
    const modeLabel = (mode) => {
        switch (mode) {
            case "oldest":
                return "Älteste zuerst";
            case "priority":
                return "Nach Priorität";
            case "random":
            default:
                return "Zufällig";
        }
    };

    // For “next run” we just show “manuell” since we have no real cron here
    const nextRunText = "nicht geplant (manueller Start)";

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    Auto Page Publisher – Konfigurator
                </h1>
                <p className="text-sm opacity-80">
                    Vereinfachte Next.js-Version deines WordPress-Plugins. Alle Daten
                    werden im Browser (localStorage) gespeichert.
                </p>
            </div>

            {message && (
                <div className="alert alert-success mb-4">
                    <span>{message}</span>
                </div>
            )}

            {/* Info Box */}
            <div className="stats shadow mb-6 w-full">
                <div className="stat">
                    <div className="stat-title">Aktuelle Queue</div>
                    <div className="stat-value">{queueCount}</div>
                    <div className="stat-desc">
                        Draft-Seiten mit Auto-Publish-Flag (simuliert)
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-title">Nächster Lauf</div>
                    <div className="stat-value text-sm">{nextRunText}</div>
                    <div className="stat-desc">In dieser Demo nur per Button</div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-4 border-b border-base-300">
                <div className="tabs tabs-boxed bg-base-200 inline-flex">
                    <button
                        className={`tab ${activeTab === "settings" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("settings")}
                    >
                        Einstellungen
                    </button>
                    <button
                        className={`tab ${activeTab === "log" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("log")}
                    >
                        Log
                    </button>
                    <button
                        className={`tab ${activeTab === "csv" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("csv")}
                    >
                        CSV-Bulk-Upload
                    </button>
                </div>
            </div>

            {/* TAB CONTENT */}
            {activeTab === "settings" && (
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Einstellungen</h2>
                        <form onSubmit={handleSettingsSubmit} className="space-y-4">
                            <div className="form-control">
                                <label className="label" htmlFor="pagesPerRun">
                                    <span className="label-text">Seiten pro Tag</span>
                                </label>
                                <input
                                    id="pagesPerRun"
                                    type="number"
                                    min={1}
                                    value={settings.pagesPerRun}
                                    onChange={(e) =>
                                        setSettings((prev) => ({
                                            ...prev,
                                            pagesPerRun: e.target.value,
                                        }))
                                    }
                                    className="input input-bordered max-w-xs"
                                />
                                <span className="label-text-alt">
                                    Maximale Anzahl Seiten, die pro Lauf veröffentlicht werden.
                                </span>
                            </div>

                            <div className="form-control">
                                <label className="label" htmlFor="mode">
                                    <span className="label-text">Veröffentlichungsmodus</span>
                                </label>
                                <select
                                    id="mode"
                                    value={settings.mode}
                                    onChange={(e) =>
                                        setSettings((prev) => ({ ...prev, mode: e.target.value }))
                                    }
                                    className="select select-bordered max-w-xs"
                                >
                                    <option value="random">Zufällig</option>
                                    <option value="oldest">Älteste zuerst</option>
                                    <option value="priority">Nach Priorität</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <span className="label-text mb-1">E-Mail-Benachrichtigung</span>
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        checked={settings.notifyEnabled}
                                        onChange={(e) =>
                                            setSettings((prev) => ({
                                                ...prev,
                                                notifyEnabled: e.target.checked,
                                            }))
                                        }
                                    />
                                    <span className="label-text">
                                        Benachrichtigung nach jedem Auto-Lauf senden (Demo, ohne
                                        echten Versand)
                                    </span>
                                </label>
                                <div className="mt-2">
                                    <label className="label" htmlFor="notifyEmail">
                                        <span className="label-text">E-Mail-Adresse</span>
                                    </label>
                                    <input
                                        id="notifyEmail"
                                        type="email"
                                        value={settings.notifyEmail}
                                        onChange={(e) =>
                                            setSettings((prev) => ({
                                                ...prev,
                                                notifyEmail: e.target.value,
                                            }))
                                        }
                                        className="input input-bordered w-full max-w-md"
                                        placeholder="admin@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-base-300 mt-4">
                                <button type="submit" className="btn btn-primary">
                                    Einstellungen speichern
                                </button>

                                <form onSubmit={handleManualRun}>
                                    <button
                                        type="button"
                                        className="btn btn-outline"
                                        onClick={handleManualRun}
                                    >
                                        Cron jetzt manuell ausführen
                                    </button>
                                </form>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {activeTab === "log" && (
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Letzte Auto-Läufe</h2>
                        {log.length === 0 ? (
                            <p>Noch keine Einträge vorhanden.</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="table table-zebra w-full">
                                    <thead>
                                        <tr>
                                            <th>Zeitpunkt</th>
                                            <th>Modus</th>
                                            <th>Anzahl</th>
                                            <th>Seiten</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[...log].reverse().map((entry, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {new Date(entry.time).toLocaleString("de-DE", {
                                                        dateStyle: "short",
                                                        timeStyle: "short",
                                                    })}
                                                </td>
                                                <td>{modeLabel(entry.mode)}</td>
                                                <td>{entry.count}</td>
                                                <td>
                                                    {entry.published && entry.published.length > 0 ? (
                                                        <ul className="list-disc ml-4">
                                                            {entry.published.map((p) => (
                                                                <li key={p.ID}>
                                                                    <a
                                                                        href={p.url}
                                                                        target="_blank"
                                                                        rel="noreferrer"
                                                                        className="link"
                                                                    >
                                                                        {p.title}
                                                                    </a>{" "}
                                                                    (ID {p.ID}, Prio {p.priority ?? "-"})
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <span>–</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {activeTab === "csv" && (
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title mb-4">CSV-Bulk-Upload</h2>
                        <p className="mb-4 text-sm opacity-80">
                            Hier kannst du viele Seiten auf einmal anlegen. Alle importierten
                            Seiten werden in dieser Demo als <strong>Draft</strong> gezählt
                            und automatisch in die Auto-Publish-Queue aufgenommen.
                        </p>

                        <div className="mb-4">
                            <p className="font-semibold mb-1">
                                CSV-Format (Semikolon getrennt):
                            </p>
                            <pre className="bg-base-200 p-3 rounded-lg text-xs overflow-x-auto">
                                {`title;slug;content;priority
"Multi-Split Wien";"multi-split-wien";"<h1>Multi-Split Wien</h1>...";5
"Klimaanlage Graz";"klimaanlage-graz";"<h1>Klimaanlage Graz</h1>...";10`}
                            </pre>
                            <p className="text-xs mt-2">
                                In dieser vereinfachten Version werden nur <code>title</code>{" "}
                                und <code>content</code> wirklich geprüft – slug/priority werden
                                ignoriert.
                            </p>
                        </div>

                        <form onSubmit={handleCsvUpload} className="space-y-4">
                            <div className="form-control">
                                <label className="label" htmlFor="csvFile">
                                    <span className="label-text">CSV-Datei</span>
                                </label>
                                <input
                                    id="csvFile"
                                    name="csvFile"
                                    type="file"
                                    accept=".csv,text/csv"
                                    className="file-input file-input-bordered w-full max-w-md"
                                    required
                                />
                                <span className="label-text-alt">
                                    Trennzeichen: Semikolon (;). Spalten: title, slug (optional),
                                    content, priority (optional).
                                </span>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                CSV importieren (Demo)
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
