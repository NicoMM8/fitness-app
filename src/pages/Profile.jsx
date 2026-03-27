import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Activity, Flame, Clock, CheckCircle2, XCircle, ChevronLeft, Dumbbell } from 'lucide-react';

export default function Profile() {
    const navigate = useNavigate();

    return (
        <div className="page-container" style={{ paddingBottom: '90px' }}>
            <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button className="back-btn" onClick={() => navigate(-1)} style={{ margin: 0 }}>
                    <ChevronLeft size={24} />
                </button>
                <h1 style={{ margin: 0 }}>Perfil de <span className="gradient-text">Nicolás</span></h1>
            </div>

            {/* 1. Cálculo de Requerimientos */}
            <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={20} color="var(--ios-blue)" />
                    1. Cálculo de Requerimientos (Los Números)
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                    Aplicando la fórmula de Mifflin-St Jeor para tu perfil exacto:
                </p>
                <div className="ios-list" style={{ margin: 0 }}>
                    <div className="ios-row">
                        <div className="row-icon blue">⚡</div>
                        <div className="row-body">
                            <div className="row-title">TMB (Tasa Metabólica Basal)</div>
                            <div className="row-subtitle">Lo que tu cuerpo necesita en reposo</div>
                        </div>
                        <span style={{ fontWeight: 700 }}>~1.860 kcal</span>
                    </div>
                    <div className="ios-row">
                        <div className="row-icon purple">🔥</div>
                        <div className="row-body">
                            <div className="row-title">TDEE (Gasto Energético Total)</div>
                            <div className="row-subtitle">Trabajo sedentario + 4 días entreno</div>
                        </div>
                        <span style={{ fontWeight: 700 }}>~2.700 kcal</span>
                    </div>
                    <div className="ios-row">
                        <div className="row-icon orange">📉</div>
                        <div className="row-body">
                            <div className="row-title">Déficit Calórico Objetivo</div>
                            <div className="row-subtitle">Protegiendo masa muscular (-400 kcal)</div>
                        </div>
                        <span style={{ fontWeight: 700, color: 'var(--ios-orange)' }}>2.300 kcal</span>
                    </div>
                </div>
            </div>

            {/* 2. Distribución de Macronutrientes */}
            <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <Flame size={20} color="var(--ios-orange)" />
                    2. Distribución de Macronutrientes (El Combustible)
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                    Con tu tendencia endomorfa y el objetivo de recomposición, mantenemos proteína alta, grasas moderadas-altas y carbohidratos controlados.
                </p>
                
                <div className="macros-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ background: 'rgba(52, 199, 89, 0.1)', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
                        <div style={{ color: 'var(--ios-green)', fontWeight: 800, fontSize: '1.2rem' }}>172g</div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Proteínas (30%)</div>
                    </div>
                    <div style={{ background: 'rgba(255, 149, 0, 0.1)', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
                        <div style={{ color: 'var(--ios-orange)', fontWeight: 800, fontSize: '1.2rem' }}>89g</div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Grasas (35%)</div>
                    </div>
                    <div style={{ background: 'rgba(0, 122, 255, 0.1)', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
                        <div style={{ color: 'var(--ios-blue)', fontWeight: 800, fontSize: '1.2rem' }}>201g</div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Carbos (35%)</div>
                    </div>
                </div>

                <div className="ios-list" style={{ margin: 0 }}>
                    <div className="ios-row">
                        <div className="row-body">
                            <div className="row-title">Proteínas</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>Reparar tejido, construir músculo postural y dar saciedad. (Aprox. 2g/kg de peso).</div>
                        </div>
                    </div>
                    <div className="ios-row">
                        <div className="row-body">
                            <div className="row-title">Grasas</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>Entorno hormonal óptimo, salud articular y control de la insulina.</div>
                        </div>
                    </div>
                    <div className="ios-row">
                        <div className="row-body">
                            <div className="row-title">Carbohidratos</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>Energía para los entrenos y recuperación de glucógeno.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Estructura de Comidas y Tiempos */}
            <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={20} color="var(--ios-purple)" />
                    3. Horario y Estructura (Día de Entrenamiento)
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                    Ayuno Intermitente 16/8 para mejorar la sensibilidad a la insulina y gestionar el déficit.
                </p>
                
                <div className="ios-list" style={{ margin: 0 }}>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-icon" style={{ background: 'var(--bg-glass)', color: 'var(--text-primary)' }}>🍽️</div>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--ios-blue)' }}>13:30 - Romper el Ayuno y Pre-Entreno</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Objetivo:</strong> Llenar los depósitos de glucógeno muscular y aportar aminoácidos rápidos para rendir sin pesadez estomacal.
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Menú:</strong> 250 g de queso fresco batido 0% (o yogur griego ligero) + 60 g de avena + 1 plátano + 15 g de nueces. (Si usas Whey, 1 cazo y 150g de queso).
                            </div>
                        </div>
                    </div>

                    <div className="ios-row" style={{ alignItems: 'flex-start', background: 'rgba(255, 149, 0, 0.05)' }}>
                        <div className="row-icon" style={{ background: 'var(--ios-orange)', color: 'white' }}>🏋️</div>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--ios-orange)' }}>14:30 a 16:00 - Entrenamiento (Basic-Fit)</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Foco:</strong> Fuerza y corrección postural (énfasis en glúteos, core, retractores escapulares y estiramiento de pectorales/flexores de cadera).
                            </div>
                        </div>
                    </div>

                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-icon" style={{ background: 'var(--bg-glass)', color: 'var(--text-primary)' }}>⚡</div>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--ios-green)' }}>16:30 - Comida Post-Entrenamiento</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Objetivo:</strong> Frenar la degradación muscular, iniciar la síntesis de nueva proteína y aportar grasas saludables para controlar la inflamación articular.
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Menú:</strong> Tortilla de 3 huevos enteros + 100 g de pechuga de pavo natural + Medio aguacate con limón + Espinacas frescas con 1 cda de AOVE.
                            </div>
                        </div>
                    </div>

                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-icon" style={{ background: 'var(--bg-glass)', color: 'var(--text-primary)' }}>🌙</div>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--ios-purple)' }}>21:00 - Cena (Carga de Hidratos Limpios)</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Objetivo:</strong> Aprovechar la alta sensibilidad a la insulina post-entrenamiento para meter los carbohidratos (al músculo, no a la grasa).
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Menú:</strong> 200 g de pechuga de pollo o lomo + 250 g de patata o boniato + Brócoli o judías verdes + 1 cda de AOVE.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Lista de Alimentos Prioritarios y a Evitar */}
            <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <CheckCircle2 size={20} color="var(--ios-green)" />
                    4. Alimentos Prioritarios
                </div>
                
                <div className="ios-list" style={{ margin: 0, marginBottom: '24px' }}>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--ios-green)', marginBottom: '4px' }}>Proteínas</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.5' }}>Huevos enteros, pechuga de pollo, pavo, ternera magra, lomo de cerdo ibérico, atún, merluza, salmón, queso fresco batido 0%, proteína Whey.</div>
                        </div>
                    </div>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--ios-green)', marginBottom: '4px' }}>Grasas</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.5' }}>AOVE, aguacate, almendras, nueces, yemas de huevo, pescados azules.</div>
                        </div>
                    </div>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--ios-green)', marginBottom: '4px' }}>Carbohidratos</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.5' }}>Patata cocida (enfriada), boniato, arroz basmati, avena integral, lentejas, garbanzos, verdura de hoja verde (espinacas, brócoli, calabacín).</div>
                        </div>
                    </div>
                </div>

                <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--ios-red)' }}>
                    <XCircle size={20} color="var(--ios-red)" />
                    Tus Enemigos Directos
                </div>
                <div style={{ background: 'rgba(255, 69, 58, 0.1)', padding: '16px', borderRadius: '12px', color: 'var(--ios-red)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    <strong>Alcohol:</strong> bloquea la oxidación de grasas y va directo al abdomen.<br/>
                    <strong>Azúcar refinado:</strong> refrescos y dulces.<br/>
                    <strong>Harinas blancas:</strong> pan de molde comercial.<br/>
                    <strong>Frituras:</strong> aceites de semillas (girasol, soja).
                </div>
            </div>

            {/* 5. Recordatorios Semanales */}
            <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <Dumbbell size={20} color="var(--ios-blue)" />
                    5. Recordatorios Semanales
                </div>
                
                <div className="ios-list" style={{ margin: 0 }}>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-icon" style={{ background: 'var(--bg-glass)', color: 'var(--text-primary)' }}>🔄</div>
                        <div className="row-body">
                            <div className="row-title">A Diario</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>Mantén activos tus "cues" mentales (Bolsillos traseros, Cremallera frontal).</div>
                        </div>
                    </div>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-icon" style={{ background: 'var(--bg-glass)', color: 'var(--text-primary)' }}>🏃</div>
                        <div className="row-body">
                            <div className="row-title">Miércoles y Domingo</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>35 min de cinta (Método CACO: caminar/correr) controlando la postura ("hilo en la coronilla").</div>
                        </div>
                    </div>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-icon" style={{ background: 'var(--bg-glass)', color: 'var(--text-primary)' }}>🧘</div>
                        <div className="row-body">
                            <div className="row-title">Lunes</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>Descanso activo en casa haciendo la rutina postural completa (Bloques 1 y 2) con calma.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. Bloque 1: Síndrome Cruzado Superior */}
            <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <Activity size={20} color="var(--ios-blue)" />
                    6. Postura: Bloque 1 (Cuello y Hombros)
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                    Ataca la Desviación Anterior de la Cabeza, Hombros Protruidos y la Hipercifosis.
                </p>

                <div className="section-title" style={{ fontSize: '0.9rem' }}>Fase 1: Liberación y Estiramiento</div>
                <div className="ios-list" style={{ margin: 0, marginBottom: '20px' }}>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--text-primary)' }}>Pectoral Mayor y Menor (En puerta)</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Series:</strong> 3 x 30-45 seg / lado
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Por qué:</strong> El pectoral acortado tira de la escápula hacia adelante/abajo, bloqueando la extensión torácica.
                            </div>
                        </div>
                    </div>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--text-primary)' }}>Trapecio Superior y Elevador</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Series:</strong> 3 x 30 seg / lado (Mano atrás, inclinando cabeza contrario y abajo)
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Por qué:</strong> La cabeza adelantada duplica el peso en el cuello, hiperactivando estos músculos.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title" style={{ fontSize: '0.9rem' }}>Fase 2: Activación y Fortalecimiento</div>
                <div className="ios-list" style={{ margin: 0 }}>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--text-primary)' }}>Retracciones Cervicales (Chin Tucks)</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Series:</strong> 3 x 10 reps (sosteniendo 3-5 seg)
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Foco:</strong> Desliza la cabeza horizontalmente hacia atrás (como en rieles haciendo papada). No mires arriba o abajo.
                            </div>
                        </div>
                    </div>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--text-primary)' }}>Deslizamientos en Pared (Wall Angels)</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Series:</strong> 3 x 12 reps
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Foco:</strong> Lumbar, alta espalda y cabeza tocando pared. Siente el trabajo entre y bajo los omóplatos.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. Bloque 2: Síndrome Cruzado Inferior */}
            <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <Activity size={20} color="var(--ios-purple)" />
                    7. Postura: Bloque 2 (Pelvis y Lumbar)
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                    Ataca la Inclinación Pélvica Anterior (Anteversión) y la Hiperlordosis Lumbar Moderada.
                </p>

                <div className="section-title" style={{ fontSize: '0.9rem' }}>Fase 1: Liberación y Estiramiento</div>
                <div className="ios-list" style={{ margin: 0, marginBottom: '20px' }}>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--text-primary)' }}>Flexores de Cadera (Caballero)</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Series:</strong> 3 x 30-45 seg / lado
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Por qué:</strong> Un psoas tenso tira de la lumbar forzando la pelvis a rotar (incrementando lordosis).
                            </div>
                        </div>
                    </div>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--text-primary)' }}>Posición del Niño (Child's Pose)</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Series:</strong> 3 x 45 seg (Respiración diafragmática)
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Por qué:</strong> Descomprime articulaciones lumbares y estira la fascia profunda.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title" style={{ fontSize: '0.9rem' }}>Fase 2: Activación y Fortalecimiento</div>
                <div className="ios-list" style={{ margin: 0 }}>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--text-primary)' }}>Insecto Muerto (Dead Bugs)</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Series:</strong> 3 x 10 reps / lado
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Foco:</strong> APLASTA la lumbar contra el suelo. Lento y controlado, costillas bajas.
                            </div>
                        </div>
                    </div>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-body">
                            <div className="row-title" style={{ color: 'var(--text-primary)' }}>Puente de Glúteo (con Retroversión)</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4', marginBottom: 4 }}>
                                <strong>Series:</strong> 3 x 15 reps (sosteniendo 2 seg arriba)
                            </div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}>
                                <strong>Foco:</strong> Inicia con inclinación posterior (aplana la espalda), sube apretando glúteos NUNCA lumbar.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 8. Integración Diaria */}
            <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <Activity size={20} color="var(--ios-green)" />
                    8. Integración Diaria (Ergonomía y Cues)
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                    El correctivo es solo 10%, el otro 90% es tu postura el resto del día. Usa estas señales:
                </p>
                
                <div className="ios-list" style={{ margin: 0 }}>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-icon" style={{ background: 'var(--bg-glass)' }}>🧵</div>
                        <div className="row-body">
                            <div className="row-title">El "Hilo en la Coronilla"</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}><strong>Sentado/Caminando:</strong> Imagina un hilo tirando de tu coronilla al techo para elongar la cervical.</div>
                        </div>
                    </div>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-icon" style={{ background: 'var(--bg-glass)' }}>👖</div>
                        <div className="row-body">
                            <div className="row-title">La "Cremallera Frontal"</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}><strong>De pie/Caminando:</strong> Sube la cremallera desde el pubis al esternón para neutralizar la pelvis de forma sutil.</div>
                        </div>
                    </div>
                    <div className="ios-row" style={{ alignItems: 'flex-start' }}>
                        <div className="row-icon" style={{ background: 'var(--bg-glass)' }}>👖</div>
                        <div className="row-body">
                            <div className="row-title">El "Bolsillo Trasero"</div>
                            <div className="row-subtitle" style={{ whiteSpace: 'normal', lineHeight: '1.4' }}><strong>Sentado trabajando:</strong> Guarda tus escápulas en los bolsillos traseros para deprimir los hombros.</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <button className="btn btn-primary" style={{ width: '100%', marginBottom: '20px' }} onClick={() => navigate('/mealplans')}>
                🥗 Ver el Menú Semanal (2.300 kcal)
            </button>
        </div>
    );
}
