import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  {
    year: '1983',
    PP: 716, PSOE: 892, otros: 806,
    participacion: 63.60,
    abstencion: 36.40,
    concejales_PP: 4,
    concejales_PSOE: 5,
    concejales_otros: 2,
    censo: 3844,
    validos: 2414,
    nulos: 22,
    blancos: 9
  },
  {
    year: '1987',
    PP: 974, PSOE: 588, otros: 368,
    participacion: 63.85,
    abstencion: 36.15,
    concejales_PP: 5,
    concejales_PSOE: 3,
    concejales_otros: 3,
    censo: 3083,
    validos: 1930,
    nulos: 23,
    blancos: 16
  },
  {
    year: '1991',
    PP: 1032, PSOE: 848, otros: 377,
    participacion: 77.61,
    abstencion: 22.39,
    concejales_PP: 5,
    concejales_PSOE: 4,
    concejales_otros: 2,
    censo: 3096,
    validos: 2363,
    nulos: 23,
    blancos: 17
  },
  {
    year: '1995',
    PP: 1086, PSOE: 654, otros: 409,
    participacion: 70.52,
    abstencion: 29.48,
    concejales_PP: 6,
    concejales_PSOE: 3,
    concejales_otros: 2,
    censo: 3158,
    validos: 2149,
    nulos: 28,
    blancos: 50
  },
  {
    year: '1999',
    PP: 973, PSOE: 951, otros: 393,
    participacion: 72.85,
    abstencion: 27.15,
    concejales_PP: 5,
    concejales_PSOE: 4,
    concejales_otros: 2,
    censo: 3180,
    validos: 2317,
    nulos: 22,
    blancos: 27
  },
  {
    year: '2003',
    PP: 881, PSOE: 1291, otros: 0,
    participacion: 77.61,
    abstencion: 22.39,
    concejales_PP: 4,
    concejales_PSOE: 7,
    concejales_otros: 0,
    censo: 3096,
    validos: 2172,
    nulos: 23,
    blancos: 17
  },
  {
    year: '2007',
    PP: 1142, PSOE: 1146, otros: 0,
    participacion: 75.17,
    abstencion: 24.83,
    concejales_PP: 5,
    concejales_PSOE: 6,
    concejales_otros: 0,
    censo: 3129,
    validos: 2288,
    nulos: 37,
    blancos: 27
  },
  {
    year: '2011',
    PP: 1391, PSOE: 730, otros: 235,
    participacion: 80.27,
    abstencion: 19.73,
    concejales_PP: 7,
    concejales_PSOE: 3,
    concejales_otros: 1,
    censo: 3027,
    validos: 2356,
    nulos: 33,
    blancos: 41
  },
  {
    year: '2015',
    PP: 1102, PSOE: 678, otros: 393,
    participacion: 77.51,
    abstencion: 22.49,
    concejales_PP: 6,
    concejales_PSOE: 3,
    concejales_otros: 2,
    censo: 2935,
    validos: 2173,
    nulos: 59,
    blancos: 43
  },
  {
    year: '2019',
    PP: 1349, PSOE: 671, otros: 162,
    participacion: 78.62,
    abstencion: 21.38,
    concejales_PP: 8,
    concejales_PSOE: 3,
    concejales_otros: 0,
    censo: 2830,
    validos: 2182,
    nulos: 21,
    blancos: 22
  },
  {
    year: '2023',
    PP: 1086, PSOE: 918, otros: 35,
    participacion: 74.87,
    abstencion: 25.13,
    concejales_PP: 6,
    concejales_PSOE: 5,
    concejales_otros: 0,
    censo: 2813,
    validos: 2039,
    nulos: 47,
    blancos: 20
  }
];

const COLORS = {
  PP: '#0066CC',
  PSOE: '#E30613',
  otros: '#999999',
  participacion: '#4CAF50',
  abstencion: '#FF9800',
  blancos: '#DDDDDD',
  nulos: '#666666'
};

export default function DashboardAnalisis() {
  return (
    <div className="w-full bg-gray-50 p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Análisis Electoral de Porzuna (1983-2023)
      </h1>

      {/* Panel de Estadísticas Clave */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Mayor Participación</h3>
          <p className="text-2xl font-bold text-blue-600">80.27%</p>
          <p className="text-sm text-gray-500">2011</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Mayor Victoria</h3>
          <p className="text-2xl font-bold text-blue-600">61.21%</p>
          <p className="text-sm text-gray-500">PP (2019)</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Resultado más ajustado</h3>
          <p className="text-2xl font-bold text-blue-600">4 votos</p>
          <p className="text-sm text-gray-500">2007</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Evolución Censo</h3>
          <p className="text-2xl font-bold text-blue-600">-1031</p>
          <p className="text-sm text-gray-500">1983-2023</p>
        </div>
      </div>

      {/* Gráfica de Evolución del Voto */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Evolución del voto por partidos</h2>
        <div className="h-96">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="PP" stroke={COLORS.PP} strokeWidth={2} name="AP/PP" />
              <Line type="monotone" dataKey="PSOE" stroke={COLORS.PSOE} strokeWidth={2} />
              <Line type="monotone" dataKey="otros" stroke={COLORS.otros} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfica de Participación */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Evolución de la participación</h2>
        <div className="h-96">
          <ResponsiveContainer>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="participacion" stroke={COLORS.participacion} fill={COLORS.participacion} fillOpacity={0.3} name="Participación %" />
              <Area type="monotone" dataKey="abstencion" stroke={COLORS.abstencion} fill={COLORS.abstencion} fillOpacity={0.3} name="Abstención %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfica de Concejales */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Distribución de concejales</h2>
        <div className="h-96">
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[0, 11]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="concejales_PP" stackId="a" fill={COLORS.PP} name="AP/PP" />
              <Bar dataKey="concejales_PSOE" stackId="a" fill={COLORS.PSOE} name="PSOE" />
              <Bar dataKey="concejales_otros" stackId="a" fill={COLORS.otros} name="Otros" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfica de Evolución del Censo */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Evolución del censo electoral</h2>
        <div className="h-96">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[0, 4000]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="censo" stroke="#2196F3" strokeWidth={2} name="Censo electoral" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfica de Votos Nulos y Blancos */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Evolución de votos nulos y blancos</h2>
        <div className="h-96">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="nulos" stroke={COLORS.nulos} strokeWidth={2} name="Votos nulos" />
              <Line type="monotone" dataKey="blancos" stroke={COLORS.blancos} strokeWidth={2} name="Votos en blanco" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
