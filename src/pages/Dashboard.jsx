import { useCV } from '../context/CVContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const { cvData } = useCV();
  const { skills } = cvData;

  const getChartData = () => {
    const categoryCounts = skills.reduce((acc, skill) => {
      const existingCategory = acc.find(item => item.name === skill.category);
      if (existingCategory) {
        existingCategory.cantidad += 1;
      } else {
        acc.push({ name: skill.category, cantidad: 1 });
      }
      return acc;
    }, []);
    return categoryCounts;
  };

  const chartData = getChartData();

  return (
    <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '10px', color: 'var(--text-h)', fontWeight: '800' }}>Dashboard de Habilidades</h1>
      <p style={{ marginBottom: '40px', color: 'var(--text)', fontSize: '1.1rem' }}>
        Resumen visual de tus áreas de conocimiento.
      </p>

      {skills.length === 0 ? (
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text)', fontStyle: 'italic', fontSize: '1.1rem' }}>Aún no hay habilidades registradas para generar la gráfica.</p>
        </div>
      ) : (
        <div className="glass-panel" style={{ height: '450px', padding: '30px', marginBottom: '30px' }}>
          <h3 style={{ color: 'var(--text-h)', marginBottom: '30px', fontSize: '1.3rem', fontWeight: '700' }}>
            Habilidades por Categoría
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text)" tick={{ fill: 'var(--text)' }} tickLine={{ stroke: 'var(--border)' }} />
              <YAxis allowDecimals={false} stroke="var(--text)" tick={{ fill: 'var(--text)' }} tickLine={{ stroke: 'var(--border)' }} />
              <Tooltip 
                cursor={{ fill: 'var(--accent-bg)' }} 
                contentStyle={{ backgroundColor: 'var(--glass-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-h)' }} 
                itemStyle={{ color: 'var(--accent)', fontWeight: 'bold' }}
              />
              <Bar dataKey="cantidad" fill="var(--accent)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className="glass-panel" style={{ padding: '30px', flex: '1', minWidth: '220px' }}>
          <h3 style={{ margin: '0 0 15px 0', color: 'var(--text-h)', fontSize: '1.1rem', fontWeight: '600' }}>Total Registradas</h3>
          <p style={{ fontSize: '3rem', margin: '0', fontWeight: '800', color: 'var(--accent)' }}>{skills.length}</p>
        </div>
        <div className="glass-panel" style={{ padding: '30px', flex: '1', minWidth: '220px' }}>
          <h3 style={{ margin: '0 0 15px 0', color: 'var(--text-h)', fontSize: '1.1rem', fontWeight: '600' }}>Categorías Diferentes</h3>
          <p style={{ fontSize: '3rem', margin: '0', fontWeight: '800', color: '#82ca9d' }}>{chartData.length}</p>
        </div>
      </div>
    </div>
  );
}