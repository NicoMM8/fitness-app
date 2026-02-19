import React, { useRef, useState } from 'react';
import { Download, Upload, Trash2, AlertTriangle, CheckCircle, FileJson } from 'lucide-react';
import { exportAllData, importAllData, clearAllData } from '../utils/storage';

export default function DataSettings() {
    const fileInputRef = useRef(null);
    const [message, setMessage] = useState(null);

    const showMessage = (text, type = 'success') => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 3000);
    };

    const handleExport = () => {
        const jsonStr = exportAllData();
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `fitness_backup_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showMessage('Datos exportados correctamente');
    };

    const handleImportClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const result = importAllData(event.target.result);
            if (result.success) {
                showMessage('Datos restaurados. Recargando...', 'success');
                setTimeout(() => window.location.reload(), 1500);
            } else {
                showMessage('Error al importar: ' + result.error, 'error');
            }
        };
        reader.readAsText(file);
        e.target.value = null; // Reset input
    };

    const handleClear = () => {
        if (window.confirm('¿Estás seguro? Esto borrará TODOS tus datos y no se pueden recuperar.')) {
            clearAllData();
            showMessage('Datos eliminados. Recargando...', 'success');
            setTimeout(() => window.location.reload(), 1500);
        }
    };

    return (
        <div className="ios-section">
            <h3 className="section-title">Datos y Almacenamiento</h3>

            {message && (
                <div
                    style={{
                        marginBottom: '14px',
                        padding: '12px',
                        borderRadius: 'var(--radius-card)',
                        background: message.type === 'error' ? 'rgba(255, 69, 58, 0.15)' : 'rgba(48, 209, 88, 0.15)',
                        color: message.type === 'error' ? 'var(--ios-red)' : 'var(--ios-green)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                    }}
                >
                    {message.type === 'error' ? <AlertTriangle size={18} /> : <CheckCircle size={18} />}
                    {message.text}
                </div>
            )}

            <div className="ios-list">
                {/* Export */}
                <div className="ios-row" onClick={handleExport} style={{ cursor: 'pointer' }}>
                    <div className="row-icon blue">
                        <Download size={20} />
                    </div>
                    <div className="row-body">
                        <div className="row-title">Exportar Copia de Seguridad</div>
                        <div className="row-subtitle">Descarga tus datos en un archivo JSON</div>
                    </div>
                </div>

                {/* Import */}
                <div className="ios-row" onClick={handleImportClick} style={{ cursor: 'pointer' }}>
                    <div className="row-icon purple">
                        <Upload size={20} />
                    </div>
                    <div className="row-body">
                        <div className="row-title">Restaurar Copia de Seguridad</div>
                        <div className="row-subtitle">Recupera datos desde un archivo</div>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".json"
                        style={{ display: 'none' }}
                    />
                </div>

                {/* Clear Data */}
                <div className="ios-row" onClick={handleClear} style={{ cursor: 'pointer' }}>
                    <div className="row-icon" style={{ background: 'rgba(255, 69, 58, 0.12)', color: 'var(--ios-red)' }}>
                        <Trash2 size={20} />
                    </div>
                    <div className="row-body">
                        <div className="row-title" style={{ color: 'var(--ios-red)' }}>Borrar Todos los Datos</div>
                        <div className="row-subtitle">Elimina todo y resetea la app</div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '12px', padding: '0 12px' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', lineHeight: '1.4' }}>
                    <FileJson size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                    Los datos se guardan localmente en tu navegador. Usa la opción de Exportar para guardar una copia de seguridad en tu dispositivo.
                </p>
            </div>
        </div>
    );
}
